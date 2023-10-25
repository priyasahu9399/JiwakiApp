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
  addmorebox: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignSelf: 'center',
    marginBottom: height * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.93,
    justifyContent: 'center',
    height: height * 0.056,
    borderRadius: 6,
    backgroundColor: COLORS.white,
    marginTop: height * 0.02,
  },
  plus: {
    height: height * 0.03,
    width: width * 0.043,
    resizeMode: 'contain',
    marginHorizontal: width * 0.02,
  },
  addmore: {
    fontSize: width * 0.035,
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
    marginBottom: -3,
  },
});
