import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  oneimg: {
    width: width,
    alignSelf: 'center',
    height: height * 0.22,
    resizeMode: 'stretch',
    borderRadius: 0,
    marginVertical: height * 0.01,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listbox: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    paddingVertical: height * 0.008,
    paddingHorizontal: height * 0.016,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 20,
    marginHorizontal: width * 0.015,
    marginVertical: height * 0.02,
  },
  listboxtext: {
    color: COLORS.primary,
    ...FONTS.sixHundred,
    fontSize: width * 0.032,
    marginBottom: -3,
  },
 
 
});
