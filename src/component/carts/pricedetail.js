import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import Button from './../Button/index';

const {width, height} = Dimensions.get('window');

const PriceDetail = ({
  Totalpayable,
  discount,
  Promocode,
  charge,
  mrp,
  save,
  headingmain,
  addmorebtn,
  quantity,
}) => {
  return (
    <View>
      <View style={styles.priceBox}>
        <Text style={styles.pricetitle}>{headingmain}</Text>
        <View style={styles.rowprice}>
          <Text style={styles.pricehead}>MRP Total</Text>
          <Text style={styles.price}>₹{mrp}</Text>
        </View>

        <View style={styles.rowprice}>
          <Text style={styles.pricehead}>Discount</Text>
          <Text style={styles.price}>₹{discount}</Text>
        </View>

        <View style={styles.rowprice}>
          <Text style={styles.pricehead}>Promo Code</Text>
          <Text style={styles.price}>₹{Promocode}</Text>
        </View>

        <View style={styles.rowprice}>
          <Text style={styles.pricehead}>Delivery Charge</Text>
          <Text style={styles.price}>₹{charge}</Text>
        </View>

        <View style={styles.rowprice}>
          <Text style={[styles.pricehead, {color: COLORS.primary}]}>
            Total Payable
          </Text>
          <Text style={[styles.price, {color: COLORS.primary}]}>
            ₹{Totalpayable}
          </Text>
        </View>
        <Text style={styles.save}>You are save ₹ {save} on this order </Text>
      </View>
    </View>
  );
};
export default PriceDetail;
const styles = StyleSheet.create({
  priceBox: {
    borderWidth: 1,
    borderColor: COLORS.gray10,
    alignSelf: 'center',
    marginBottom: height * 0.02,
    width: width * 0.93,
    borderRadius: 6,
    backgroundColor: COLORS.white,
  },
  rowprice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.005,
    alignSelf: 'center',
    width: width * 0.85,
  },
  pricetitle: {
    fontSize: width * 0.037,
    color: COLORS.gray50,
    ...FONTS.sixHundred,
    paddingLeft: width * 0.025,
    paddingTop: height * 0.015,
    paddingBottom: height * 0.006,
  },
  pricehead: {
    width: width * 0.65,
    fontSize: width * 0.032,
    color: COLORS.gray70,
    ...FONTS.fiveHundred,
  },
  price: {
    fontSize: width * 0.032,
    color: COLORS.gray70,
    ...FONTS.fiveHundred,
  },
  save: {
    fontSize: width * 0.031,
    ...FONTS.fiveHundred,
    color: COLORS.green,
    marginLeft: width * 0.04,
    marginBottom: height * 0.01,
  },
});
