import {StyleSheet} from 'react-native';
import {convertToThreeXSize} from '../../styles/metrics';

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageFlag: {
    marginRight: convertToThreeXSize(18),
    height: convertToThreeXSize(78),
    width: convertToThreeXSize(126),
  },
});

export default style;
