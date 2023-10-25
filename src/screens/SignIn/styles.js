import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    width: width * 0.94,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  login: {
    width: width * 0.9,
    height: height * 0.45,
    resizeMode: 'stretch',
    alignSelf: 'center',
    // marginVertical: height * 0.04,
  },
  error: {
    color: COLORS.primary,
    fontSize: 12,
    ...FONTS.fiveHundred,
    marginLeft: width * 0.015,
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.04,
    ...FONTS.sixHundred,
    alignSelf: 'center',
  },
  subheading: {
    color: COLORS.gray60,
    fontSize: width * 0.03,
    ...FONTS.sixHundred,
    alignSelf: 'center',
    marginBottom: height * 0.03,
  },
  btn: {
    marginBottom: height * 0.04,
    alignSelf: 'center',
    marginTop: height * 0.03,
  },
});
