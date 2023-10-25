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
  faqBox: {
    flexDirection: 'row',
    width: width * 0.94,
    backgroundColor: COLORS.white,
    elevation: 3,
    alignSelf: 'center',
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: height * 0.02,
  },
  faqtextBox: {
    width: width * 0.94,
    alignSelf: 'center',
    paddingHorizontal: width * 0.04,
    borderLeftWidth: 3,
    elevation: 3,
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: COLORS.primary,
    marginBottom: height * 0.01,
  },
  uparrow: {
    width: width * 0.036,
    height: height * 0.018,
    resizeMode: 'contain',
    marginTop: height * 0.003,
    tintColor: COLORS.gray80,
  },
  faqtext: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: width * 0.032,
    marginBottom: -3,
    width: width * 0.8,
  },
  faqsubtext: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: width * 0.033,
    width: width * 0.84,
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
  },
  bottombox: {
    borderWidth: 1,
    borderColor: COLORS.gray10,
    width: width * 0.94,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    marginVertical: height * 0.04,
    paddingHorizontal: width * 0.03,
  },

  title1: {
    color: COLORS.black,
    ...FONTS.sixHundred,
    fontSize: width * 0.037,
    width: width * 0.52,
    marginTop: height * 0.01,
  },
  title2: {
    color: COLORS.gray60,
    ...FONTS.fiveHundred,
    fontSize: width * 0.032,
    marginBottom: -3,
    width: width * 0.52,
  },
  girl: {
    width: width * 0.36,
    height: height * 0.2,
    resizeMode: 'contain',
  },
  sendqry: {
    color: COLORS.primary,
    ...FONTS.sixHundred,
    fontSize: width * 0.033,
    marginTop: height * 0.02,
  },
});
