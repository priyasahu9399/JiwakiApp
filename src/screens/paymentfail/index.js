import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import ButtonCustom from './../../component/Button/index';

const {height, width} = Dimensions.get('window');

const PaymentFail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View style={styles.row}>
        <Text style={styles.subheading}>OOps ! Payment Fail </Text>
        <Image source={icons.sad} style={styles.done} />
      </View>
      <Image source={images.failed} style={styles.login} />

      <ButtonCustom
        children="Retry"
        elevationbtn
        btnStyle={{alignSelf: 'center', marginTop: height * 0.025}}
      />
    </View>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentFail);
