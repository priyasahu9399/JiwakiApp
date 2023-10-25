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

const RechargeSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View style={styles.row}>
        <Text style={styles.subheading}>Hurrey ! Recharge Successful </Text>
        <Image source={icons.done} style={styles.done} />
      </View>
      <Image source={images.success} style={styles.login} />
    </View>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RechargeSuccess);
