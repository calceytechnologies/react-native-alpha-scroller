import * as React from 'react';
import {PureComponent} from 'react';
import {
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
  PanResponderInstance,
  View,
  StyleSheet,
} from 'react-native';
import AlphabetListItem from './AlphabetListItem';

interface IProps {
  contentHeight: number;
  containerY: number;
  verticalPadding: number;
  titles: string[];
  onTouchChange: (index: number) => void;
}

interface IState {
  selectedLetter: string;
  itemHeight: number;
  display: boolean;
}

const MinItemHeightToDisplay = 13;

class AlphabetList extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      selectedLetter: '',
      itemHeight: 0,
      display: false,
    };
  }

  componentDidMount() {
    this.initData();
  }

  componentDidUpdate(prevProps: Readonly<IProps>) {
    this.initData();
  }

  letterChanged(selectedLetter: string) {
    if (this.state.selectedLetter != selectedLetter) {
      this.setState({
        selectedLetter: selectedLetter,
      });
    }
  }

  calculateItemHeight(): number {
    if (this.props.titles.length && this.props.contentHeight) {
      let itemHeight =
        (this.props.contentHeight - this.props.verticalPadding * 2) /
        this.props.titles.length;
      return itemHeight;
    }

    return 0;
  }

  initData() {
    let itemHeight = Math.floor(this.calculateItemHeight());
    let display: boolean = itemHeight >= MinItemHeightToDisplay;

    this.setState({
      itemHeight,
      display,
    });
  }

  onTouchChange = (
    e: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ) => {
    const event: any = e.nativeEvent || {};
    const index = Math.floor(
      (event.pageY - this.props.containerY - this.props.verticalPadding) /
        this.state.itemHeight,
    );

    if (index >= 0 && index <= this.props.titles.length - 1) {
      this.props.onTouchChange && this.props.onTouchChange(index);
      this.letterChanged(this.props.titles[index]);
    }
  };

  onTouchRelease = () => {
    this.letterChanged('');
  };

  responder: PanResponderInstance = PanResponder.create({
    onStartShouldSetPanResponderCapture: () => true,
    onStartShouldSetPanResponder: () => true,
    onPanResponderTerminationRequest: () => true,
    onPanResponderGrant: this.onTouchChange,
    onPanResponderMove: this.onTouchChange,
    onPanResponderRelease: this.onTouchRelease,
  });

  render() {
    const {selectedLetter, display, itemHeight} = this.state;

    if (!display) {
      return null;
    }

    const {titles} = this.props;

    return (
      <View
        style={[
          styles.container,
          {
            paddingVertical: this.props.verticalPadding,
          },
        ]}
        {...this.responder.panHandlers}>
        <View style={styles.wrapper}>
          {titles.map((title: string) => (
            <AlphabetListItem
              key={title}
              height={itemHeight}
              title={title}
              active={selectedLetter === title}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    width: 40,
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AlphabetList;
