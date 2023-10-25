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
  addmorebox: {
    width: width * 0.93,
    height: height * 0.055,
    alignSelf: 'center',
    marginVertical: height * 0.02,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    borderColor: COLORS.primary,
  },
  addmoretext: {
    color: COLORS.primary,
    fontSize: width * 0.036,
    ...FONTS.fiveHundred,
    alignSelf: 'center',
    marginBottom: -2,
  },
  promocodeBox: {
    width: width * 0.93,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    marginBottom: height * 0.01,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray10,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.014,
  },
  radiobtn: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: COLORS.gray30,
    width: width * 0.06,
    height: width * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerradio: {
    borderRadius: 30,
    backgroundColor: COLORS.green,
    width: width * 0.036,
    height: width * 0.036,
  },
  promocodehead: {
    color: COLORS.gray40,
    ...FONTS.sixHundred,
    fontSize: width * 0.036,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.016,
  },
  promocode: {
    color: COLORS.black,
    ...FONTS.sixHundred,
    fontSize: width * 0.034,
    width: width * 0.7,
    marginLeft: width * 0.03,
  },
  promocodeoff: {
    color: COLORS.gray40,
    ...FONTS.fiveHundred,
    fontSize: width * 0.029,
  },
  promocoderarrow: {
    width: width * 0.03,
    height: height * 0.015,
    tintColor: COLORS.black,
    resizeMode: 'contain',
    marginBottom: -3,
  },
  bottomBox: {
    elevation: 4,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: height * 0.01,
  },
  viewtotaltext: {
    color: COLORS.black,
    ...FONTS.sixHundred,
    fontSize: width * 0.035,
    marginBottom: -4,
  },
  viewgreen: {
    color: COLORS.green,
    ...FONTS.fiveHundred,
    fontSize: width * 0.03,
    marginBottom: -4,
  },

  // ----modal
  modalBox: {
    backgroundColor: COLORS.white,
    width: width * 0.9,
    paddingVertical: height * 0.02,
    paddingHorizontal: height * 0.02,
    borderRadius: 8,
  },

  modalSubtitle: {
    color: COLORS.primary,
    ...FONTS.sixHundred,
    fontSize: width * 0.034,
    alignSelf: 'center',
    marginTop: height * 0.01,
    marginBottom: height * 0.02,
  },
});
