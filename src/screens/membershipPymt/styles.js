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
  // text1: {
  //   fontSize: 14,
  //   ...FONTS.fiveHundred,
  //   color: COLORS.black,
  // },
  // head: {
  //   fontSize: 15,
  //   ...FONTS.sixHundred,
  //   color: COLORS.black,
  //   marginTop: height * 0.01,
  // },

  // viewallbox: {
  //   width: width * 0.94,
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   marginVertical: width * 0.03,
  //   alignSelf: 'center',
  //   borderColor: COLORS.gray20,
  //   paddingVertical: height * 0.015,
  //   paddingHorizontal: width * 0.04,
  //   flexDirection: 'row',
  // },
  orangerow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  orangebgcolor: {
    backgroundColor: COLORS.primary,
    width: width * 0.94,
    alignSelf: 'center',
    paddingHorizontal: height * 0.035,
    paddingVertical: height * 0.01,
  },
  Boxdesign: {
    borderWidth: 2,
    borderColor: COLORS.white,
    backgroundColor: COLORS.gray10,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.003,
  },
  whitecircle: {
    backgroundColor: COLORS.white,
    width: width * 0.06,
    height: width * 0.06,
    borderRadius: 30,
  },
  circlerow: {
    flexDirection: 'row',
    position: 'absolute',
    top: height * 0.08,
    zIndex: 100,
    right: -5,
  },
  Boxdesignname: {
    fontSize: width * 0.043,
    color: COLORS.primary,
    ...FONTS.fiveHundred,
    marginBottom: -3,
  },
  orngcarthead: {
    fontSize: width * 0.037,
    color: COLORS.white,
    ...FONTS.fiveHundred,
    marginLeft: width * 0.03,
    width: width * 0.7,
  },
  bordertobottom: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.white,
     marginVertical:height * 0.01
  },
  orngcart_Hiii: {
    fontSize: width * 0.03,
    color: COLORS.white,
    ...FONTS.fiveHundred,
    width: width * 0.3,
  },

  orngcart_emailno: {
    fontSize: width * 0.03,
    color: COLORS.white,
    ...FONTS.fiveHundred,
    width: width * 0.5,
  },

  orngcart_total: {
    fontSize: width * 0.03,
    color: COLORS.white,
    ...FONTS.fiveHundred,
    width: width * 0.6,
    // marginTop: height * 0.005,
  },
  orngcart_price: {
    fontSize: width * 0.03,
    marginBottom: -3,
    color: COLORS.white,
    ...FONTS.fiveHundred,
  },

  pymtname: {
    fontSize: width * 0.035,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height * 0.01,
  },
  netbank: {
    fontSize: width * 0.033,
    color: COLORS.primary,
    ...FONTS.fiveHundred,
  },
  morebank: {
    fontSize: width * 0.033,
    color: COLORS.primary,
    ...FONTS.fiveHundred,
  },
  netbankBox: {
    elevation: 3,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.02,
    marginBottom: height * 0.01,
  },
  morebankbox: {
    width: width * 0.22,
  },
  bankimg: {
    height: height * 0.06,
    width: width * 0.12,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  banktext: {
    fontSize: width * 0.033,
    color: COLORS.black,
    ...FONTS.fiveHundred,
    alignSelf: 'center',
  },
});
