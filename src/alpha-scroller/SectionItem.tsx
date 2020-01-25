import * as React from 'react';
import {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IAlphaScrollItemData} from './IAlphaScrollItemData';
import {IAlphaScrollItemProps} from './AlphaScrollList';

const SectionItem: FC<IAlphaScrollItemProps<IAlphaScrollItemData>> = function(
  props,
) {
  return (
    <View style={styles.container}>
      <View>
        <Text>{props.item.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'center',
  },
});

export default SectionItem;
