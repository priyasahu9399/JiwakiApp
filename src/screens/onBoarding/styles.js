import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  title: {
    color: COLORS.black,
    alignSelf: 'center',
    ...FONTS.sevenHundred,
    fontSize: 17,
    textAlign: 'center',
    width: width * 0.9,
  },
  subtitle: {
    color: COLORS.gray50,
    alignSelf: 'center',
    ...FONTS.fiveHundred,
    fontSize: 14,
    textAlign: 'center',
    width: width * 0.9,
  },
  image: {
    width: width * 0.9,
    height: height * 0.5,
    marginVertical: height * 0.04,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  skip: {
    color: COLORS.black,
    ...FONTS.sixHundred,
    fontSize: 12,
    alignSelf: 'flex-end',
    marginTop: height * 0.03,
  },
  dot_box: {
    height: height * 0.06,
    flexDirection: 'row',
    width: width * 0.3,
    alignSelf: 'center',
  },
  dot: {
    backgroundColor: COLORS.gray20,
    width: width * 0.02,
    height: width * 0.02,
    borderRadius: 20,
    marginRight: width * 0.02,
  },
  rarrowBox: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.12,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: width * 0.019,
    top: width * 0.019,
  },
  rarrow: {
    width: width * 0.036,
    height: width * 0.036,
    resizeMode: 'contain',
  },
});
