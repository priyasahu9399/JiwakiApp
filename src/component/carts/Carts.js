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
import ButtonCustom from './../Button/index';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');

const CartComponent = ({
  image,
  title,
  subtitle,
  price,
  mrpprice,
  rate,
  ratings,
  onPressimg,
  off,
  marginleft,
  onPresscart,
  onPressbuy,
  btnStyle,
  onPressdecrement,
  onPressincrement,
  showincre,
  heartactive,
  onPressremove,
  id,
  navigation,
  disabled,
}) => {
  const [loading, setLoading] = useState(false);
  const [condition, setCondition] = useState(false);
  const [incredecre, setIncredecre] = useState(1);

  return (
    <View style={[styles.main_Box, marginleft]}>
      <View>
        <TouchableOpacity
          disabled={disabled}
          style={[
            styles.imagebox,
            showincre && {
              width: width * 0.27,
              height: height * 0.12,
              marginBottom: height * 0.01,
            },
          ]}
          onPress={onPressimg}
          activeOpacity={0.5}>
          <Image source={image} style={[styles.image]} />
        </TouchableOpacity>
        {showincre && (
          <View style={styles.increbox}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                if (incredecre === 1) {
                  setIncredecre(1);
                } else {
                  setIncredecre(incredecre - 1);
                }
              }}>
              <Text
                style={[
                  styles.incredecretext,
                  {fontSize: 17, marginBottom: -5},
                ]}>
                -
              </Text>
            </TouchableOpacity>
            <Text style={styles.incredecretext}>{incredecre}</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setIncredecre(incredecre + 1)}>
              <Text style={[styles.incredecretext, {fontSize: 17}]}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.bottomBox}>
        <TouchableOpacity
          style={{width: width * 0.52}}
          activeOpacity={0.5}
          disabled={disabled}
          onPress={onPressimg}>
          <Text numberOfLines={2} style={styles.heading}>
            {title}
          </Text>

          <View style={styles.row}>
            <Text style={styles.rate}>{rate} </Text>
            <Image source={icons.fillstar} style={styles.star} />
            <Text style={styles.ratings}>{ratings} ratings</Text>
          </View>
          <Text numberOfLines={1} style={styles.greenprice}>
            ₹{price}
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <ButtonCustom
            children="Buy now"
            mediumbtn
            btnStyle={styles.buybtn}
            onPress={()=>navigation.navigate("Order")}
          />
          <ButtonCustom
            children="Remove"
            whitebgbtn
            btnStyle={{
              width: width * 0.26,
              height: height * 0.043,
            }}
            onPress={onPressremove}
          />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);

const styles = StyleSheet.create({
  increbox: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: height * 0.032,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  incredecretext: {
    fontSize: width * 0.03,
    ...FONTS.sixHundred,
    color: COLORS.primary,
    width: width * 0.07,
    textAlign: 'center',
    marginBottom: -3,
  },
  buybtn: {
    marginRight: width * 0.03,
    width: width * 0.26,
    height: height * 0.043,
  },
  main_Box: {
    width: width * 0.93,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    marginBottom: height * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray10,
  },
  imagebox: {
    width: width * 0.27,
    height: height * 0.14,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: width * 0.014,
    marginLeft: width * 0.02,
    borderRadius: 8,
  },
  image: {
    width: width * 0.27,
    height: height * 0.14,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.005,
  },
  bottomBox: {
    padding: width * 0.02,
    width: width * 0.63,
  },
  heading: {
    color: COLORS.black,
    fontSize: 12,
    width: width * 0.5,
    ...FONTS.sixHundred,
    height: height * 0.047,
  },
  ratings: {
    color: COLORS.gray70,
    fontSize: width * 0.027,
    ...FONTS.fiveHundred,
    marginBottom: -3,
  },

  rate: {
    color: COLORS.green,
    fontSize: width * 0.03,
    ...FONTS.sixHundred,
    marginBottom: -3,
  },
  star: {
    width: width * 0.028,
    height: height * 0.014,
    resizeMode: 'stretch',
    tintColor: COLORS.green,
    marginRight: width * 0.03,
  },

  greenprice: {
    color: COLORS.green,
    fontSize: width * 0.042,
    ...FONTS.sixHundred,
    marginTop: 4,
  },
});
