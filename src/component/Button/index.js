import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS, icons, images} from './../../constants';
const {height, width} = Dimensions.get('window');

const ButtonCustom = ({
  onPress,
  children,
  mediumbtn,
  smallmediumbtn,
  iconbtn,
  iconbtnICON,
  aadtocartBtn,
  whitebgbtn,
  btnStyle,
  btntextStyle,
  load,
  disabled,
  elevationbtn,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      disabled={disabled}
      style={[
        styles.longButton,
        mediumbtn && {width: width * 0.35, height: height * 0.05},
        smallmediumbtn && {
          width: width * 0.28,
          height: height * 0.04,
        },
        whitebgbtn && styles.whitebgbtn,
        iconbtn && styles.iconbtn,
        aadtocartBtn && styles.addtocartbtn,
        elevationbtn && styles.elevationbtn,
        btnStyle,
      ]}>
      {(aadtocartBtn || iconbtnICON) && (
        <Image
          source={icons.cart}
          style={[styles.icon, aadtocartBtn && {tintColor: COLORS.white}]}
        />
      )}
      {load && (
        <View style={styles.indBox}>
          <ActivityIndicator size={width * 0.065} color={COLORS.white} />
        </View>
      )}
      <Text
        style={[
          styles.buttonText,
          whitebgbtn && {
            fontSize: width * 0.032,
            color: COLORS.primary,
          },
          smallmediumbtn && {
            fontSize: width * 0.029,
          },
          iconbtn && {
            fontSize: width * 0.026,
            color: COLORS.primary,
            ...FONTS.sevenHundred,
          },
          aadtocartBtn && {
            color: COLORS.white,
            ...FONTS.fiveHundred,
            fontSize: 12,
          },
          elevationbtn && {
            color: COLORS.primary,
            fontSize: width * 0.035,
          },
          btntextStyle,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  longButton: {
    backgroundColor: COLORS.primary,
    width: width * 0.92,
    height: height * 0.065,
    borderRadius: 6,
    justifyContent: 'center',
    marginTop: height * 0.005,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: width * 0.05,
    height: height * 0.04,
    resizeMode: 'contain',
    marginRight: width * 0.02,
    tintColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    ...FONTS.sixHundred,
    fontSize: width * 0.032,
    marginBottom: -4,
  },
  indBox: {marginLeft: width * -0.03, marginRight: width * 0.02},
  whitebgbtn: {
    width: width * 0.35,
    height: height * 0.05,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  iconbtn: {
    width: width * 0.28,
    height: height * 0.04,
    borderWidth: 0.6,
    borderRadius: 4,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.lightpink,
  },
  addtocartbtn: {
    width: width * 0.38,
    height: height * 0.037,
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    borderWidth: 0,
  },
  elevationbtn: {
    elevation: 5,
    width: width * 0.38,
    height: height * 0.05,
    borderRadius: 30,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.primary,
    marginVertical: height * 0.01,
    shadowOpacity: 0.9,
    shadowRadius: 5,
    shadowOffset: {
      height: 4,
      width: 3,
    },
  },
});
export default ButtonCustom;
