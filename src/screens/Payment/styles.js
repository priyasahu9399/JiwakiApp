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

  text1: {
    fontSize: 14,
    ...FONTS.fiveHundred,
    color: COLORS.black,
  },
  head: {
    fontSize: 15,
    ...FONTS.sixHundred,
    color: COLORS.black,
    marginTop: height * 0.01,
  },

  viewallbox: {
    width: width * 0.94,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: width * 0.03,
    alignSelf: 'center',
    borderColor: COLORS.gray20,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
    flexDirection: 'row',
  },
  greentext: {
    fontSize: 15,
    color: COLORS.green,
    ...FONTS.sixHundred,
    marginHorizontal: width * 0.03,
    marginBottom: -3,
  },
  pymtname: {
    fontSize: 14,
    color: COLORS.black,
    ...FONTS.fiveHundred,
    width: width * 0.62,
    marginBottom: -3,
  },
  pymentBox: {
    flexDirection: 'row',
    alignSelf: 'center',
    elevation: 3,
    backgroundColor: COLORS.white,
    height: height * 0.07,
    width: width * 0.94,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: height * 0.01,
  },
  pymtIcon: {
    height: height * 0.05,
    width: width * 0.13,
    resizeMode: 'contain',
    marginHorizontal: width * 0.03,
  },
  radioBox: {
    height: width * 0.055,
    width: width * 0.055,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    height: width * 0.038,
    width: width * 0.038,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
  },
});
