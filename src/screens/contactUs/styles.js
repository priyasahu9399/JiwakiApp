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
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    // justifyContent: 'space-between',
  },
  iconsBox: {
    elevation: 4,
    backgroundColor: COLORS.white,
    paddingVertical: height * 0.012,
    paddingHorizontal: height * 0.01,
    width: width * 0.45,
    marginTop: height * 0.01,
    alignSelf: 'center',
  },
  icons: {
    width: width * 0.08,
    height: width * 0.08,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: height * 0.007,
  },
  iconsBoxtext: {
    color: COLORS.black,
    fontSize: width * 0.031,
    ...FONTS.sixHundred,
    alignSelf: 'center',
    textAlign: 'center',
    height: height * 0.04,
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.04,
    ...FONTS.sixHundred,
    marginTop: height * 0.03,
  },
  socialicon: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: 'contain',
    marginRight: width * 0.05,
    marginLeft: width * 0.01,
    
  },
  socialrow: {
    flexDirection: 'row',
    marginVertical: height * 0.01,
  },
});
