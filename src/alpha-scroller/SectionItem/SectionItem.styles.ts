import {StyleSheet, Dimensions} from 'react-native';

import {convertToThreeXSize} from '../../styles/metrics';
import colors from '../../styles/colors';
import {FontFamilySemiBold} from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 1,
  },
  letters: {
    marginRight: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    height: 23,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letterText: {
    textAlign: 'center',
  },
  itemCountry: {
    justifyContent: 'center',
    marginLeft: convertToThreeXSize(63),
    // width: convertToThreeXSize(980),
    height: convertToThreeXSize(176),
    borderRightWidth: convertToThreeXSize(2),
    borderLeftWidth: convertToThreeXSize(2),
    borderColor: colors.borders.lightGray,
  },
  firstItemCountry: {
    justifyContent: 'center',
    marginLeft: convertToThreeXSize(63),
    // width: convertToThreeXSize(980),
    borderRadius: convertToThreeXSize(10),
    borderTopWidth: convertToThreeXSize(2),
    borderRightWidth: convertToThreeXSize(2),
    borderLeftWidth: convertToThreeXSize(2),
    borderColor: colors.borders.lightGray,
  },
  lastItemCountry: {
    justifyContent: 'center',
    marginLeft: convertToThreeXSize(63),
    // width: convertToThreeXSize(980),
    borderRightWidth: convertToThreeXSize(2),
    borderLeftWidth: convertToThreeXSize(2),
    borderRadius: convertToThreeXSize(10),

    borderBottomWidth: convertToThreeXSize(2),
    borderColor: colors.borders.lightGray,
  },
  borderSeparator: {
    backgroundColor: colors.borders.lightGray,
    height: convertToThreeXSize(2),
    marginLeft: convertToThreeXSize(52),
    width: convertToThreeXSize(873),
  },
  itemCountryName: {
    width: '90%',
  },
  list: {
    flex: 1,
  },
  sep: {
    width: '100%',
  },
  countryName: {
    paddingLeft: convertToThreeXSize(49),
    ...FontFamilySemiBold,
    fontSize: convertToThreeXSize(44),
    color: colors.font.darkText,
    textAlignVertical: 'center',
    includeFontPadding: false,
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
  currentLocationTitleWrapper: {
    width: Dimensions.get('window').width,
    backgroundColor: colors.white,
    paddingTop: convertToThreeXSize(58),
  },
  checkIcon: {
    width: convertToThreeXSize(56),
    height: convertToThreeXSize(42),
  },
  sectionHeaderText: {
    marginTop: convertToThreeXSize(60),
    marginLeft: convertToThreeXSize(60),
    marginBottom: convertToThreeXSize(40),
    ...FontFamilySemiBold,
    fontSize: convertToThreeXSize(44),
    color: colors.font.darkText,
  },
  countryItemInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: convertToThreeXSize(52),
    overflow: 'hidden',
  },
  flagTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: convertToThreeXSize(176),
    borderBottomWidth: convertToThreeXSize(2),
    borderColor: colors.borders.lightGray,
  },
});

export default styles;
