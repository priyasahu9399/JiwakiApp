import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    width: width * 0.95,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  pymtbox: {
    borderWidth: 1,
    borderColor: COLORS.gray30,
    borderRadius: 8,
    marginVertical: height * 0.02,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.011,
  },
  number: {
    color: COLORS.gray80,
    fontSize: width * 0.03,
    textAlign: 'center',
    alignSelf: 'center',
    ...FONTS.fiveHundred,
    width: width * 0.1,
  },
  date: {
    color: COLORS.gray80,
    fontSize: width * 0.03,
    textAlign: 'center',
    alignSelf: 'center',
    ...FONTS.fiveHundred,
    width: width * 0.3,
  },
  pymt_name: {
    color: COLORS.gray80,
    fontSize: width * 0.03,
    textAlign: 'center',
    alignSelf: 'center',
    ...FONTS.fiveHundred,
    width: width * 0.36,
  },
  rupee: {
    color: COLORS.gray80,
    fontSize: width * 0.03,
    textAlign: 'center',
    alignSelf: 'center',
    ...FONTS.fiveHundred,
    width: width * 0.17,
  },
  heshrow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLORS.gray20,
    paddingVertical: width * 0.03,
  },
  hesh: {
    color: COLORS.gray80,
    fontSize: width * 0.034,
    textAlign: 'center',
    alignSelf: 'center',
    ...FONTS.sixHundred,
    width: width * 0.1,
  },
  heshdate: {
    color: COLORS.gray80,
    fontSize: width * 0.034,
    textAlign: 'center',
    alignSelf: 'center',
    ...FONTS.sixHundred,
    width: width * 0.3,
  },
  heshpymt_name: {
    color: COLORS.gray80,
    fontSize: width * 0.034,
    textAlign: 'center',
    alignSelf: 'center',
    ...FONTS.sixHundred,
    width: width * 0.35,
  },
  heshrupee: {
    color: COLORS.gray80,
    fontSize: width * 0.034,
    textAlign: 'center',
    alignSelf: 'center',
    ...FONTS.sixHundred,
    width: width * 0.19,
  },
});
