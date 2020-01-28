import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {IAlphaScrollItemData} from '../IAlphaScrollItemData';
import countriesJson from '../../../assets/data/countries-images.json';

import styles from './CurrentLocation.styles';
import {Flag} from '../Flag/Flag';

interface IProps {
  currentLocation: string;
  countryCode: string;
  onSelect: (item: IAlphaScrollItemData) => void;
}

const CurrentLocation: React.FC<IProps> = props => {
  const {onSelect, currentLocation, countryCode} = props;
  const currentLocationCountry: IAlphaScrollItemData =
    countriesJson[currentLocation];
  return (
    <View style={styles.currentLocationTitleWrapper}>
      <Text style={styles.currentLocationTitle}>Current location</Text>
      <TouchableOpacity
        style={styles.currentLocationCountry}
        onPress={() => onSelect(currentLocationCountry)}>
        <View style={styles.itemContainer}>
          <Flag {...{flag: currentLocationCountry.flag}} />
          <Text style={styles.countryName}>
            {currentLocationCountry.name.common}
          </Text>
        </View>
        {currentLocation && countryCode === currentLocation ? (
          <Image
            resizeMode="contain"
            style={styles.checkIcon}
            source={require('../../../assets/images/check.png')}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default CurrentLocation;
