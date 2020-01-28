import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';
import {convertToThreeXSize} from '../../styles/metrics';
import {FontFamilySemiBold} from '../../styles/fonts';

export const viewPortWidth = Dimensions.get('window').width;
export const viewportHeight = Dimensions.get('window').height;

const style = StyleSheet.create({
  currentLocationTitleWrapper: {
    backgroundColor: colors.white,
    paddingTop: convertToThreeXSize(58),
  },
  currentLocationTitle: {
    paddingLeft: convertToThreeXSize(63),
    paddingBottom: convertToThreeXSize(40),
    ...FontFamilySemiBold,
    fontSize: convertToThreeXSize(44),
    color: colors.font.darkText,
  },
  currentLocationCountry: {
    flexDirection: 'row',
    marginLeft: convertToThreeXSize(63),
    paddingLeft: convertToThreeXSize(52),
    // width: convertToThreeXSize(980),
    height: convertToThreeXSize(163),
    backgroundColor: colors.white,
    alignItems: 'center',
    borderColor: colors.borders.lightGray,
    borderWidth: convertToThreeXSize(2),
    borderRadius: convertToThreeXSize(6),
    justifyContent: 'space-between',
    paddingRight: convertToThreeXSize(53),
  },
  countryName: {
    paddingLeft: convertToThreeXSize(49),
    ...FontFamilySemiBold,
    fontSize: convertToThreeXSize(44),
    color: colors.font.darkText,
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  checkIcon: {
    width: convertToThreeXSize(56),
    height: convertToThreeXSize(42),
  },
});

export default style;
