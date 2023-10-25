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
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: height * 0.1,
  },
  login: {
    width: width * 0.9,
    height: height * 0.35,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  done: {
    width: width * 0.06,
    height: height * 0.03,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },

  subheading: {
    color: COLORS.red,
    fontSize: width * 0.05,
    ...FONTS.sixHundred,
    marginBottom: -4,
  },
});
