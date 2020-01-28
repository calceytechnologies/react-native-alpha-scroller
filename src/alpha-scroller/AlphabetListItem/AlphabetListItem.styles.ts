import {StyleSheet} from 'react-native';
import {FontFamilyRegular} from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    ...FontFamilyRegular,
  },
});

export default styles;
