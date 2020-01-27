import React from 'react';
import {Image, View} from 'react-native';

import styles from './Flag.styles';

interface FlagType {
  flag: string;
}

const ImageFlag = ({flag}: FlagType) => {
  return (
    <Image resizeMode="stretch" style={styles.imageFlag} source={{uri: flag}} />
  );
};

export const Flag = ({flag}: FlagType) => (
  <View style={styles.container}>
    <ImageFlag {...{flag}} />
  </View>
);
