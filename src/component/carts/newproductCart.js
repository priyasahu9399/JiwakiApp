import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import Button from './../Button/index';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');

const NewProductCart = ({
  image,
  title,
  gst,
  price,
  mrp,
  rate,
  ratings,
  marginleft,
  onPresscart,
  btnStyle,
  onPressheart,
  navigation,
}) => {
  const [heart, setheart] = useState(true);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail')}
      activeOpacity={0.7}
      style={[styles.main_Box, marginleft]}>
      <TouchableOpacity
        style={styles.heartbox}
        onPress={() => setheart(!heart)}>
        {!heart ? (
          <Image
            source={icons.heart}
            style={[styles.heart, {tintColor: COLORS.primary}]}
          />
        ) : (
          <Image source={icons.heart} style={[styles.heart]} />
        )}
      </TouchableOpacity>

      <View style={styles.imagebox} activeOpacity={0.5}>
        <Image source={image} style={styles.image} />
      </View>

      <View style={styles.bottomBox}>
        <Text numberOfLines={2} style={styles.heading}>
          {title}
        </Text>

        <View style={styles.row}>
          <View style={styles.ratebox}>
            <Text style={styles.rate}>{rate} </Text>
            <Image source={icons.fillstar} style={styles.star} />
          </View>
          <Text style={styles.ratings}>{ratings} ratings</Text>
        </View>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.mrp}>
            MRP
          </Text>
          <Text numberOfLines={1} style={styles.mrpprice}>
            ₹{mrp}
          </Text>
          <Text numberOfLines={1} style={styles.price}>
            ₹{price}
          </Text>
        </View>
      </View>
      <View style={{marginBottom: height * 0.01}}>
        <Button
          children="Add to cart"
          aadtocartBtn
          btnStyle={btnStyle}
          onPress={() => navigation.navigate('Cart')}
        />
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewProductCart);

const styles = StyleSheet.create({
  main_Box: {
    width: width * 0.46,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    elevation: 3,
    marginBottom: height * 0.013,
    marginTop: height * 0.002,
  },
  imagebox: {
    width: width * 0.3,
    height: height * 0.15,
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: height * 0.01,
    marginRight: width * 0.03,
  },
  image: {
    width: width * 0.32,
    height: height * 0.15,
    resizeMode: 'contain',
    borderRadius: 8,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.004,
  },
  bottomBox: {
    paddingHorizontal: width * 0.02,
  },
  heading: {
    color: COLORS.black,
    fontSize: 12,
    width: width * 0.41,
    ...FONTS.sixHundred,
    height: height * 0.045,
  },
  ratings: {
    color: COLORS.gray60,
    fontSize: width * 0.025,
    width: width * 0.17,
    ...FONTS.fiveHundred,
    marginBottom: -3,
  },
  ratebox: {
    width: width * 0.1,
    backgroundColor: COLORS.green,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: width * 0.003,
    justifyContent: 'center',
    borderRadius: 4,
    marginRight: width * 0.02,
  },
  rate: {
    color: COLORS.white,
    fontSize: width * 0.026,
    ...FONTS.fiveHundred,
    marginBottom: -3,
    marginHorizontal: width * 0.004,
  },
  star: {
    width: width * 0.026,
    height: height * 0.012,
    resizeMode: 'stretch',
    tintColor: COLORS.white,
  },
  heartbox: {
    width: width * 0.08,
    height: height * 0.04,
    resizeMode: 'contain',
    position: 'absolute',
    right: 5,
    top: 5,
    alignItems: 'center',
  },
  heart: {
    width: width * 0.05,
    height: height * 0.04,
    resizeMode: 'contain',
  },
  mrp: {
    color: COLORS.gray70,
    fontSize: 9.7,
    ...FONTS.fiveHundred,
    marginBottom: -3,
  },
  mrpprice: {
    color: COLORS.gray70,
    fontSize: 9.5,
    ...FONTS.fiveHundred,
    width: width * 0.14,
    textDecorationLine: 'line-through',
    marginBottom: -2.5,
  },

  price: {
    color: COLORS.black,
    fontSize: width * 0.03,
    ...FONTS.sixHundred,
    width: width * 0.15,
    marginBottom: -3,
  },
});
