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
  contentBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.gray30,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.02,
    marginVertical: height * 0.03,
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.038,
    ...FONTS.sixHundred,
    marginLeft: 2,
    marginBottom: height * -0.01,
  },
  subheading: {
    color: COLORS.black,
    fontSize: width * 0.035,
    ...FONTS.fiveHundred,
    marginLeft: 2,
    width: width * 0.86,
    lineHeight: height * 0.032,
  },
  checktext: {
    color: COLORS.gray40,
    fontSize: width * 0.03,
    ...FONTS.fiveHundred,
    width: width * 0.84,
    marginLeft: width * 0.02,
  },
  row: {
    flexDirection: 'row',
    marginVertical: height * 0.006,
  },
  oneimg: {
    width: width * 0.94,
    height: height * 0.2,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  dot: {
    width: width * 0.02,
    height: width * 0.02,
    backgroundColor: COLORS.gray80,
    borderRadius: 20,
    marginTop: height * 0.009,
    marginRight: width * 0.018,
  },
  paybtn: {
    alignSelf: 'center',
    marginTop: height * 0.04,
    marginBottom: height * 0.03,
  },
});
