import * as React from 'react';
import {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {IAlphaScrollSectionHeaderProps} from './AlphaScrollList/AlphaScrollList';

const SectionHeader: FC<IAlphaScrollSectionHeaderProps> = function(props) {
  return (
    <View
      style={[
        styles.container,
        {
          height: props.height,
        },
      ]}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
    paddingLeft: 15,
  },
  title: {
    color: '#888',
    fontSize: 14,
  },
});

export default SectionHeader;
