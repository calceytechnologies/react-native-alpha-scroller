import * as React from 'react';
import {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Flag} from '../Flag/Flag';
import {IAlphaScrollItemProps} from '../AlphaScrollList/AlphaScrollList';
import {IAlphaScrollItemData} from '../IAlphaScrollItemData';

import styles from './SectionItem.styles';

interface IProps extends IAlphaScrollItemProps<IAlphaScrollItemData> {
  itemSection: Array<IAlphaScrollItemData>;
  countryCode: string;
  onSelect: (item: IAlphaScrollItemData) => void;
}

const SectionItem: FC<IProps> = function(props) {
  const {
    item: country,
    onSelect,
    index: itemIndex,
    itemSection,
    countryCode,
  } = props;
  return (
    <TouchableOpacity
      key={country.cca2}
      testID={`country-selector-${country.cca2}`}
      onPress={() => onSelect(country)}>
      <View
        style={[
          styles.itemCountry,
          !itemIndex ? styles.firstItemCountry : null,
          itemSection && itemSection.length === itemIndex + 1
            ? styles.lastItemCountry
            : null,
        ]}>
        <View style={styles.countryItemInnerContainer}>
          <View style={styles.flagTextWrapper}>
            <Flag {...{flag: country.flag}} />
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={styles.countryName}>
              {country.name}
            </Text>
          </View>
          {countryCode === country.cca2 ? (
            <Image
              resizeMode="contain"
              style={styles.checkIcon}
              source={require('../../../assets/images/check.png')}
            />
          ) : null}
        </View>
        {itemSection.length !== itemIndex + 1 ? (
          <View style={styles.borderSeparator} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default SectionItem;
