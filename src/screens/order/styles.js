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
    height: height,
  },
  // addmorebox: {

  //   alignSelf: 'center',
  //   marginVertical: height * 0.02,
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   justifyContent: 'center',
  //   borderColor: COLORS.primary,
  // },
  orderSuccess: {
    color: COLORS.green,
    fontSize: width * 0.04,
    ...FONTS.fiveHundred,
    alignSelf: 'center',
    marginVertical: height * 0.01,
  },
  downloadBox: {
    width: width * 0.93,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    marginBottom: height * 0.012,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray10,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.014,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: height * 0.016,
  },
  download: {
    color: COLORS.gray60,
    ...FONTS.fiveHundred,
    fontSize: width * 0.034,
    width: width * 0.76,
    marginLeft: width * 0.02,
  },
  rarrow: {
    width: width * 0.03,
    height: height * 0.015,
    tintColor: COLORS.gray70,
    resizeMode: 'contain',
    marginBottom: -3,
  },
  downloadrarrow: {
    width: width * 0.06,
    height: height * 0.026,
    tintColor: COLORS.gray70,
    resizeMode: 'contain',
    marginBottom: -3,
  },
  orderdone: {
    width: width * 0.7,
    height: height * 0.2,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: height * 0.02,
  },
  orderImg: {
    width: width * 0.24,
    height: height * 0.12,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  qty: {
    color: COLORS.gray70,
    ...FONTS.fiveHundred,
    fontSize: width * 0.034,
    alignSelf: 'center',
    marginTop: height * 0.01,
  },
  orderid: {
    color: COLORS.gray50,
    ...FONTS.fiveHundred,
    fontSize: width * 0.029,
    width: width * 0.6,
  },
  ordertitle: {
    color: COLORS.black,
    ...FONTS.sixHundred,
    fontSize: width * 0.032,
    width: width * 0.6,
    height: height * 0.045,
  },
  orderdeliver: {
    color: COLORS.gray60,
    ...FONTS.fiveHundred,
    fontSize: width * 0.034,
  },
  orderdate: {
    color: COLORS.green,
    ...FONTS.sixHundred,
    fontSize: width * 0.034,
    marginBottom: -2,
  },
  orderprice: {
    color: COLORS.green,
    ...FONTS.sixHundred,
    fontSize: width * 0.038,
  },
  imgBox: {
    width: width * 0.28,
    marginRight: width * 0.02,
  },
  orderBox: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.93,
    alignSelf: 'center',
    borderColor: COLORS.gray10,
    borderRadius: 6,
    marginBottom: height * 0.015,
    paddingVertical: height * 0.01,
  },
  cancel: {
    width: width * 0.6,
    borderRadius: 0,
    height: height * 0.036,
  },
  // ----modal
  modalBox: {
    backgroundColor: COLORS.white,
    width: width * 0.9,
    paddingVertical: height * 0.02,
    paddingHorizontal: height * 0.02,
    borderRadius: 8,
  },

  modaltitle: {
    color: COLORS.black,
    ...FONTS.sixHundred,
    fontSize: width * 0.042,
    alignSelf: 'center',
  },

  modalSubtitle: {
    color: COLORS.gray60,
    ...FONTS.sixHundred,
    fontSize: width * 0.03,
    alignSelf: 'center',
    marginTop: height * 0.01,
    marginBottom: height * 0.02
  },
});
