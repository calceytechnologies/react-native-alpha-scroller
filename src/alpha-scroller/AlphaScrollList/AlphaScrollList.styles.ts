import {StyleSheet, Dimensions} from 'react-native';

import {convertToThreeXSize} from '../../styles/metrics';
import colors from '../../styles/colors';
import {FontFamilySemiBold, FontFamilyRegular} from '../../styles/fonts';

export const viewPortWidth = Dimensions.get('window').width;
export const viewportHeight = Dimensions.get('window').height;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    padding: 2,
  },
  scrollContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  list: {},
  search: {
    borderColor: colors.backgrounds.gray,
    borderWidth: 1,
  },
  searchIcon: {
    marginLeft: convertToThreeXSize(42),
    marginRight: convertToThreeXSize(33),
    height: convertToThreeXSize(40),
    width: convertToThreeXSize(40),
  },
  input: {
    flex: 1,
    fontSize: convertToThreeXSize(44),
    color: colors.black,
  },
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  inputWrapper: {
    backgroundColor: colors.white,
    height: convertToThreeXSize(110),
    borderRadius: convertToThreeXSize(55),
    marginTop: convertToThreeXSize(86),
    marginBottom: convertToThreeXSize(61),
    width: convertToThreeXSize(1000),
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...FontFamilySemiBold,
    fontSize: convertToThreeXSize(56),
    color: colors.white,
  },
  closeIcon: {
    width: convertToThreeXSize(44),
    height: convertToThreeXSize(45),
  },
  closeIconWrapper: {
    position: 'absolute',
    left: convertToThreeXSize(74),
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  headerContainer: {
    alignItems: 'center',
    borderTopRightRadius: convertToThreeXSize(20),
    borderTopLeftRadius: convertToThreeXSize(20),
    backgroundColor: colors.backgrounds.primaryGreen,
    paddingTop: convertToThreeXSize(97),
    marginTop: viewPortWidth / 16,
  },
  emptyResultText: {
    ...FontFamilyRegular,
    // backgroundColor: 'red',
    textAlign: 'center',
    fontSize: convertToThreeXSize(42),
    marginTop: viewportHeight / 4,
  },
});

export default style;
