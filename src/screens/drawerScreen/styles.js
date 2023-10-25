import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  logoBox: {
    backgroundColor: COLORS.lightorange2,
    width: width * 0.62,
    height: height * 0.08,
    transform: [{rotate: '-45deg'}],
    marginLeft: width * -0.17,
    alignItems: 'center',
    marginTop: height * 0.035,
  },
  bglogo: {
    width: width * 0.37,
    height: height * 0.14,
    resizeMode: 'contain',
    marginTop: height * -0.028,
  },
  logo: {
    width: width * 0.5,
    height: height * 0.14,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  cross: {
    width: width * 0.054,
    height: height * 0.028,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginRight: width * 0.08,
    marginTop: height * -0.01,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.008,
  },
  collapsbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  collapsimg: {
    width: width * 0.06,
    height: height * 0.03,
    resizeMode: 'contain',
    marginHorizontal: width * 0.04,
    tintColor: COLORS.gray80,
  },
  collapstitle: {
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: width * 0.0375,
    marginBottom: -4,
    width: width * 0.52,
    paddingVertical: height * 0.008,
  },
  collapsubtitle: {
    ...FONTS.fiveHundred,
    color: COLORS.gray80,
    fontSize: width * 0.036,
    marginBottom: -3,
    paddingVertical: height * 0.01,
  },
  arrow: {
    width: width * 0.03,
    height: height * 0.015,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
  drawerborder: {
    paddingLeft: width * 0.1,
    marginTop: height * 0.01,
    borderBottomWidth: 1,
    borderColor: COLORS.gray10,
  },
});
