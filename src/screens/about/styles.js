import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    width: width * 0.94,
  },
  oneimg: {
    width: width * 0.94,
    height: height * 0.2,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },

  orderdone: {
    width: width * 0.7,
    height: height * 0.25,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: height * 0.01,
  },
  content: {
    color: COLORS.gray80,
    fontSize: width * 0.032,
    ...FONTS.fiveHundred,
    marginVertical: height * 0.01,
    width: width * 0.94,
    lineHeight: 26,
  },
  boxheading: {
    color: COLORS.black,
    fontSize: width * 0.038,
    ...FONTS.sixHundred,
    marginTop: height * 0.02,
  },
});
