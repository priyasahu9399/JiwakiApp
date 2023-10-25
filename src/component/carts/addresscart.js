import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import React from 'react';
import {COLORS, FONTS, icons} from '../../constants';
const Address = ({
  onPress,
  firstname,
  address,
  landmark,
  area,
  state,
  city,
  pincode,
  checked,
  onPresschange,
  mobile,
  radiobtn,
  addressStyle,
  Change,
  disabled,
  delivery,
}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        disabled={disabled}
        style={[styles.box1, addressStyle]}>
        {delivery && <Text style={styles.delivery}>Delivery Address</Text>}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            {/* {!Change ? (
              ''
            ) : (
              <Image source={icons.location} style={styles.location} />
            )} */}
            <View
              style={{
                marginLeft: width * 0.025,
              }}>
              <View style={styles.rowtext}>
                <Text
                  numberOfLines={1}
                  style={[styles.text1, Change && {width: width * 0.6}]}>
                  {firstname}
                </Text>
              </View>
              {Change ? (
                <Text
                  numberOfLines={1}
                  style={[
                    styles.text1,
                    Change && {
                      marginVertical: height * 0.006,
                      width: width * 0.6,
                    },
                  ]}>
                  {mobile}
                </Text>
              ) : (
                <Text
                  numberOfLines={1}
                  style={[styles.text1, {marginVertical: height * 0.006}]}>
                  Phone number - {mobile}
                </Text>
              )}
              <Text
                numberOfLines={2}
                style={[
                  styles.text3,
                  delivery && {color: COLORS.black},
                  Change && {width: width * 0.69},
                ]}>
                {landmark}
                {', '}
                {area}
                {', '}
                {address}
                {', '}
                {city}
                {', '}
                {state}
                {', '}
                {pincode}
              </Text>
            </View>
          </View>

          {Change && (
            <TouchableOpacity onPress={onPresschange} style={styles.changebox}>
              <Text style={styles.change}>{Change}</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  box1: {
    marginVertical: width * 0.02,
    alignSelf: 'center',
    paddingVertical: height * 0.008,
    width: width * 0.93,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: width * 0.01,
  },
  rowtext: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * -0.002,
  },
  delivery: {
    fontSize: width * 0.037,
    ...FONTS.fiveHundred,
    color: COLORS.gray40,
    marginLeft: width * 0.015,
    marginBottom: height * 0.007,
  },
  text1: {
    fontSize: 12.5,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    width: width * 0.8,
    marginBottom: -3,
  },

  text3: {
    fontSize: 11.5,
    ...FONTS.fiveHundred,
    color: COLORS.gray70,
    width: width * 0.88,
    height: height * 0.04,
  },
  changebox: {
    height: height * 0.027,
    paddingHorizontal: width * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.3,
    borderColor: COLORS.primary,
    borderRadius: 4,
  },
  change: {
    fontSize: width * 0.028,
    ...FONTS.sixHundred,
    color: COLORS.primary,
    marginBottom:-1
  },
  img3: {
    height: height * 0.027,
    width: width * 0.06,
    resizeMode: 'contain',
  },
  pyment_radio_box: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: COLORS.primary,
    width: width * 0.05,
    height: height * 0.025,
  },
  pyment_innerradio_box: {
    borderRadius: 10,
    width: width * 0.032,
    height: height * 0.016,
    alignSelf: 'center',
    margin: width * 0.004,
    backgroundColor: COLORS.primary,
  },
  location: {
    width: width * 0.04,
    height: height * 0.02,
    resizeMode: 'contain',
    marginTop: height * 0.004,
  },
});
