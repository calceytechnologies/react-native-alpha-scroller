import {StyleSheet} from 'react-native';
import {convertToThreeXSize} from '../../styles/metrics';
import colors from '../../styles/colors';

const style = StyleSheet.create({
  sectionHeader: {
    paddingLeft: convertToThreeXSize(63),
    paddingBottom: convertToThreeXSize(40),
    marginTop: convertToThreeXSize(40),
    // ...FontFamilySemiBold,
    fontSize: convertToThreeXSize(44),
    color: colors.font.darkText,
    backgroundColor: colors.white,
  },
});

export default style;
