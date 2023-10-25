import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import {COLORS, data, icons, images} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import ButtonCustom from './../../component/Button/index';
import InputBox from './../../component/InputText/index';

const {height, width} = Dimensions.get('window');

const RechargeWallet = () => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <View style={styles.innercontainer}>
        <Text style={styles.head}>
          Enter money as much as you want to withdraw
        </Text>
        <Text style={styles.rupe}>₹20</Text>
        <Text style={styles.heading}>Enter Account detail : </Text>
        <InputBox placeholder="Account no" />
        <InputBox placeholder="IFSC CODE" />
        <ButtonCustom
          children="Get OTP"
          elevationbtn
          btnStyle={{alignSelf: 'center', marginTop: height * 0.015}}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RechargeWallet);
