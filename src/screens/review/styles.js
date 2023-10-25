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
  box1: {
    width: width * 0.94,
    flexDirection: 'row',
    marginBottom: height * 0.02,
    alignSelf: 'center',
  },
  imgbox: {
    height: width * 0.13,
    width: width * 0.13,
    marginRight: width * 0.03,
    borderRadius: 60,
    resizeMode: 'cover',
  },

  text1: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: width * 0.036,
    marginBottom: -4,
    width: width * 0.78,
  },
  subtitle: {
    ...FONTS.fiveHundred,
    color: COLORS.gray40,
    fontSize: width * 0.03,
    width: width * 0.78,
  },
});
