import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../constants';

const OfferNotificationCart = ({
  text1,
  text2,
  image,
  onPress,
  proimg,
  profileimg,
  disabled,
  Apply,
}) => {
  return (
    <TouchableOpacity
      style={styles.box1}
      disabled={disabled}
      activeOpacity={0.7}
      onPress={onPress}>
      <View style={styles.imgbox}>
        <Image source={image} style={[styles.img, proimg]} />
      </View>
      <Text style={[styles.text1, Apply && {width: SIZES.width * 0.66}]}>
        {text1}
      </Text>
      {Apply && <Text style={styles.apply}>Apply</Text>}
    </TouchableOpacity>
  );
};

export default OfferNotificationCart;

const styles = StyleSheet.create({
  box1: {
    width: SIZES.width * 0.92,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.height * 0.02,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  imgbox: {
    height: SIZES.width * 0.08,
    width: SIZES.width * 0.08,
    backgroundColor: '#fce9dc',
    marginRight: SIZES.width * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  img: {
    height: SIZES.height * 0.02,
    width: SIZES.width * 0.04,
    resizeMode: 'contain',
  },
  text1: {
    width: SIZES.width * 0.8,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: SIZES.width * 0.032,
    marginBottom: -4,
  },
  apply: {
    ...FONTS.sixHundred,
    color: COLORS.primary,
    fontSize: SIZES.width * 0.03,
    marginBottom: -4,
  },
});
