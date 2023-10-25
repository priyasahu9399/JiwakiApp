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

  box3: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: height * 0.1,
    width: width * 0.78,
  },
  resend: {
    fontSize: 13,
    fontFamily: FONTS.medium,
    color: COLORS.gray60,
    width: width * 0.63,
    // alignSelf: 'center',
  },
  time: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: COLORS.primary,
    width: width * 0.18,
  },

  otpCheck: {
    width: width * 0.7,
    height: height * 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  underlineStyleBase: {
    width: width * 0.12,
    height: height * 0.055,
    borderRadius: 12,
    color: COLORS.black,
    fontFamily: FONTS.semiBold,
    backgroundColor: '#F7F7F7',
    fontSize: 19,
    paddingBottom: width * 0.015,
  },
  underlineStyleHighLighted: {
    borderColor: COLORS.primary,
  },
  resent: {
    color: COLORS.primary,
    textDecorationLine: 'underline',
    fontSize: 14,
    ...FONTS.fiveHundred,
    alignSelf: 'center',
  },
  login: {
    width: width * 0.9,
    height: height * 0.36,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: height * 0.03,
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
    marginBottom: height * 0.02,
  },
  btn: {
    marginBottom: height * 0.08,
    alignSelf: 'center',
  },
});
