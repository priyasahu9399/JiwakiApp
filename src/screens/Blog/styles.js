import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listbox: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    height: height * 0.038,
    paddingHorizontal: height * 0.016,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 20,
    // marginHorizontal: width * 0.01,
    marginTop: height * 0.015,
    marginBottom: height * 0.006,
    justifyContent: 'center',
  },
  listboxtext: {
    color: COLORS.primary,
    ...FONTS.sixHundred,
    fontSize: width * 0.032,
    marginBottom: -1,
  },
});
