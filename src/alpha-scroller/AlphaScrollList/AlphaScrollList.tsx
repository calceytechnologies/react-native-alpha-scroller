// Reference: https://github.com/yoonzm/react-native-alphabet-flat-list

import * as React from 'react';
import {Component} from 'react';
import {
  Dimensions,
  FlatList,
  InteractionManager,
  LayoutChangeEvent,
  ListRenderItemInfo,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Keyboard,
} from 'react-native';
import AlphabetList from '../AlphabetList';
import {IAlphaScrollItemData} from '../IAlphaScrollItemData';

import styles from './AlphaScrollList.styles';
import colors from '../../styles/colors';
import SectionItem from '../SectionItem/SectionItem';
import CurrentLocation from '../CurrentLocation/CurrentLocation';

export interface IAlphaScrollItemProps<ItemT> {
  item: ItemT;
  index: number;
  last: boolean;
  height: number;
}

export interface IAlphaScrollSectionHeaderProps {
  title: string;
  height: number;
}

export type ListRenderItem<ItemT> = (
  props: IAlphaScrollItemProps<ItemT>,
) => React.ReactElement | null;

export type ListRenderSectionHeader = (
  props: IAlphaScrollSectionHeaderProps,
) => React.ReactElement | null;

export interface IProps<ItemT extends IAlphaScrollItemData> {
  data: {
    [key: string]: ItemT[];
  };
  itemHeight: number;
  sectionHeaderHeight: number;
  searchBoxHeight: number;
  alphaScrollerVerticalPadding: number;
  renderSectionHeader: ListRenderSectionHeader;
  countryCode: string;
  currentLocation: string;
  onSelect: (item: IAlphaScrollItemData) => void;
  onClose: () => void;
}

export interface IState<ItemT extends IAlphaScrollItemData> {
  data: {
    [key: string]: ItemT[];
  };
  containerHeight: number;
  itemLayout: {
    title: string;
    itemLength: number;
    beforeItemLength: number;
    length: number;
    offset: number;
  }[];
  titles: string[];
  selectedLetter: string;
  initialNumToRender: number;
  containerY: number; // Y coordinate relative to the screen
  searchActive: boolean;
  searchResultsExist: boolean;
}

const windowHeight = Dimensions.get('window').height;

export default class AlphaScrollList<
  ItemT extends IAlphaScrollItemData
> extends Component<IProps<ItemT>, IState<ItemT>> {
  static defaultProps = {
    searchBoxHeight: 0,
    alphaScrollerVerticalPadding: 0,
  };

  container?: View;
  list?: FlatList<ItemT>;
  alphabetList?: AlphabetList;

  keyboardDidShowListener: any;
  keyboardDidHideListener: any;

  constructor(props: IProps<ItemT>, context: any) {
    super(props, context);
    this.state = {
      containerHeight: windowHeight,
      itemLayout: [],
      titles: [],
      selectedLetter: '',
      initialNumToRender: 0,
      containerY: 0,
      data: {...this.props.data},
      searchActive: false,
      searchResultsExist: false,
    };
  }

  componentDidMount() {
    this.initData(this.props.data);
  }

  /**
   * Calculate list height and item heights
   */
  initData = (data: any) => {
    const titles = Object.keys(data);

    const offset = (index: number, itemLength: number) =>
      index * this.props.sectionHeaderHeight! +
      itemLength * this.props.itemHeight;

    const itemLayout = titles.map((title, index) => {
      const beforeItemLength = titles
        .slice(0, index)
        .reduce((length, item) => length + data[item].length, 0);

      const itemLength = data[title].length;

      return {
        title,
        itemLength,
        beforeItemLength,
        length:
          this.props.sectionHeaderHeight! + this.props.itemHeight * itemLength,
        offset: offset(index, beforeItemLength),
      };
    });

    // Calculate the number of items that should rendered initially to fill the viewport.
    let initialNumToRender = itemLayout.findIndex(
      item => item.offset >= this.state.containerHeight,
    );

    if (initialNumToRender < 0) {
      initialNumToRender = titles.length;
    }

    this.setState({
      itemLayout,
      titles,
      selectedLetter: titles[0],
      initialNumToRender,
      data: {...data},
    });
  };

  /**
   * Get list area height, used to calculate the display of alphabet list
   */
  onLayout = (e: LayoutChangeEvent) => {
    try {
      let h = windowHeight;
      // Make sure to get the position coordinates after the navigation animation is completed, otherwise it will be inaccurate
      InteractionManager.runAfterInteractions(() => {
        if (this.container) {
          this.container.measure((x, y, w, h, px, py) => {
            this.setState({
              containerY: py,
            });
          });
        }
      });
      this.setState({
        containerHeight: e.nativeEvent.layout.height,
      });
    } catch (error) {
      console.error('Errors on layout changes', error);
    }
  };

  /**
   * Touch change on alphabet list will trigger scrolling
   */
  onAlphabetTouchChange = (index: number) => {
    if (this.list) {
      this.list.scrollToIndex({index, animated: true});
    }
  };

  getItemLayout = (data: any, index: number) => {
    return {
      length: this.state.itemLayout[index].length,
      offset: this.state.itemLayout[index].offset,
      index,
    };
  };

  onSearch = (text: string): void => {
    let searchResults: {[key: string]: IAlphaScrollItemData[]} = {};
    if (text === '') {
      searchResults = {...this.props.data};
    } else {
      const titles = Object.keys(this.props.data);
      for (let title of titles) {
        let filtered = this.props.data[title].filter(item => {
          return item.name.toLowerCase().includes(text.toLowerCase());
        });

        if (filtered.length) {
          searchResults[title] = filtered;
        }
      }
    }

    this.initData(searchResults);
    this.setState({
      searchActive: text.length > 0,
      searchResultsExist: Object.keys(searchResults).length > 0,
    });
  };

  onSelect = (item: IAlphaScrollItemData) => {
    this.props.onSelect && this.props.onSelect(item);
  };

  renderItem = (info: ListRenderItemInfo<string>) => {
    return (
      <View key={info.index}>
        {this.props.renderSectionHeader &&
          this.props.renderSectionHeader({
            title: info.item,
            height: this.props.sectionHeaderHeight!,
          })}

        {this.state.data[info.item].map((itemValue, itemIndex, items) => {
          return (
            <View style={{height: this.props.itemHeight}}>
              <SectionItem
                item={itemValue}
                index={itemIndex}
                last={itemIndex === items.length - 1}
                height={this.props.itemHeight}
                onSelect={this.props.onSelect}
                itemSection={this.state.data[info.item]}
                countryCode={this.props.countryCode}
              />
            </View>
          );
        })}
      </View>
    );
  };

  renderSearchBox() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            hitSlop={styles.hitSlop}
            onPress={this.props.onClose}
            style={styles.closeIconWrapper}>
            <Image
              style={styles.closeIcon}
              source={require('../../../assets/images/close.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Select country</Text>
        </View>
        <View style={styles.inputWrapper}>
          <Image
            source={require('../../../assets/images/search.png')}
            style={styles.searchIcon}
            resizeMode="contain"
          />
          <TextInput
            hitSlop={styles.hitSlop}
            testID="text-input-country-filter"
            autoCorrect={false}
            autoFocus={false}
            placeholderTextColor={colors.font.veryLightGray}
            placeholder="Search for a country"
            style={styles.input}
            onChangeText={this.onSearch}
            {...this.props}
          />
        </View>
      </View>
    );
  }

  renderContainer() {
    return (
      <View
        style={styles.scrollContainer}
        ref={ref => {
          this.container = ref as View;
        }}
        onLayout={this.onLayout}>
        {this.renderList()}
        {this.state.searchActive ? null : this.renderAlphabet()}
      </View>
    );
  }

  renderNoSearchResults() {
    return (
      <View>
        <Text style={styles.emptyResultText}>
          The country you searched is not available
        </Text>
      </View>
    );
  }

  renderCurrentLocation = (): JSX.Element | null => {
    let content = null;

    if (CurrentLocation) {
      content = (
        <CurrentLocation
          countryCode={this.props.countryCode}
          currentLocation={this.props.currentLocation}
          onSelect={this.props.onSelect}
        />
      );
    }

    return content;
  };

  renderList() {
    return (
      <FlatList<any>
        ref={ref => {
          this.list = ref as FlatList<ItemT>;
        }}
        style={styles.list}
        {...this.props}
        data={this.state.titles}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => `${index}`}
        getItemLayout={this.getItemLayout}
        initialNumToRender={this.state.initialNumToRender}
        ListHeaderComponent={this.renderCurrentLocation}
      />
    );
  }

  renderAlphabet() {
    return (
      <AlphabetList
        ref={ref => {
          this.alphabetList = ref as AlphabetList;
        }}
        containerY={this.state.containerY}
        contentHeight={this.state.containerHeight}
        titles={this.state.titles}
        onTouchChange={this.onAlphabetTouchChange}
        verticalPadding={this.props.alphaScrollerVerticalPadding}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderSearchBox()}
        {this.state.searchActive && !this.state.searchResultsExist
          ? this.renderNoSearchResults()
          : this.renderContainer()}
      </View>
    );
  }
}
