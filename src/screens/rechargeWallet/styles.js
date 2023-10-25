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
  heading: {
    fontSize: width * 0.036,
    ...FONTS.sixHundred,
    color: COLORS.gray60,
    marginVertical: height * 0.01,
    marginLeft:2
  },
  head: {
    fontSize: width * 0.032,
    ...FONTS.sixHundred,
    color: COLORS.gray50,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: height * 0.01,
  },
  rupe: {
    fontSize: width * 0.09,
    ...FONTS.sixHundred,
    color: COLORS.black,
    alignSelf: 'center',
    marginVertical: height * 0.04,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
