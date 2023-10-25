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
  profilebg: {
    width: width * 0.514,
    height: width * 0.514,
    alignSelf: 'center',
    marginTop: height * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.008,
  },
  profile: {
    width: width * 0.42,
    height: width * 0.42,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.04,
    ...FONTS.sixHundred,
    alignSelf: 'center',
  },
  subheading: {
    color: COLORS.gray60,
    fontSize: width * 0.03,
    ...FONTS.sixHundred,
    alignSelf: 'center',
    marginBottom: height * 0.03,
  },
  // ----modal
  modalBox: {
    backgroundColor: COLORS.white,
    width: width * 0.9,
    paddingVertical: height * 0.03,
    paddingHorizontal: height * 0.02,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  modalSubtitle: {
    color: COLORS.primary,
    ...FONTS.sixHundred,
    fontSize: width * 0.035,
    alignSelf: 'center',
    marginBottom: height * 0.025,
  },
});
