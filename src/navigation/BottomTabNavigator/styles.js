import {Dimensions, StyleSheet} from 'react-native';
import {FONTS, COLORS} from './../../constants';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // iconbox: {
  //   width: width * 0.135,
  //   height: width * 0.135,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: 60,
  //   backgroundColor: COLORS.green,
  //   marginBottom: height * -0.016,
  //   borderWidth:1
  // },
  icon_set: {
    width: width * 0.055,
    height: height * 0.03,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  tableBar: {
    height: height * 0.074,
    backgroundColor: COLORS.white,
  },
  tablebal: {
    ...FONTS.sixHundred,
    fontSize: width * 0.028,
    color: COLORS.white,
    marginBottom: -3,
  },
  headerstyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
  bell: {
    width: width * 0.06,
    height: height * 0.048,
    resizeMode: 'contain',
    marginRight: width * 0.045,
  },
  // logo: {
  //   width: width * 0.34,
  //   height: height * 0.08,
  //   resizeMode: 'stretch',
  // },
  headerTitle: {
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: width * 0.05,
  },
  count: {
    fontSize: 10,
    ...FONTS.sixHundred,
    color: COLORS.white,
    borderRadius: 20,
    marginBottom: -2,
  },
  countbox: {
    backgroundColor: COLORS.red,
    width: width * 0.05,
    height: width * 0.05,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
    top: 0,
    right: 13,
  },
});
