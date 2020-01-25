import * as React from 'react';
import {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {
  title: string;
  height: number;
  active: boolean;
}

const AlphabetListItem: FC<IProps> = function(props) {
  return (
    <View
      style={[
        styles.container,
        {
          height: props.height,
          width: props.height,
          borderRadius: props.height / 2,
          backgroundColor: props.active ? '#0ea8ff' : 'transparent',
        },
      ]}>
      <Text
        style={[
          styles.text,
          {
            color: props.active ? 'white' : '#333',
          },
        ]}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'PingFangSC-Regular',
  },
});

export default AlphabetListItem;
