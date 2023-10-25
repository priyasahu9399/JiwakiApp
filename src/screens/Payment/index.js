import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  BackHandler,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import styles from './styles';
import {icons, images, COLORS} from '../../constants';
import ButtonCustom from './../../component/Button/index';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';

const {height, width} = Dimensions.get('window');

const Payment = ({navigation}) => {
  const [radio, setRadio] = useState();
  const [loading, setLoading] = useState(false);

  // const [postData, setpostData] = useState({
  //   paymentStatus: null,
  // });

  const Rozarpayonline = async () => {
    var options = {
      description: 'Credits towards consultation',
      currency: 'INR',
      key: 'rzp_test_sRLd371Eatsnrl', // Your api key
      amount: 3530 * 100,
      name: 'Priya sahu',
      prefill: {
        contact: '9399329654',
      },
      theme: {color: COLORS.primary},
    };
    RazorpayCheckout?.open(options)
      .then(data => {
        alert(`Success`);
      })
      .catch(error => {
        // alert(`Error: ${error?.code} | ${error?.description}`);
      });
  };

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <View style={styles.innercontainer}>
        <View style={styles.viewallbox}>
          <Text style={styles.text1}>2 Product added to cart</Text>
          <Text style={styles.greentext}>₹ 353</Text>
        </View>

        <Text style={styles.head}>Choose Payment method</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setRadio(1), Rozarpayonline();
          }}
          style={styles.pymentBox}>
          <Image source={icons.online} style={styles.pymtIcon} />
          <Text style={styles.pymtname}>Online</Text>
          <View style={styles.radioBox}>
            {radio === 1 && <Text style={styles.radioInner}></Text>}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setRadio(2)}
          style={styles.pymentBox}>
          <Image source={icons.cash} style={styles.pymtIcon} />
          <Text style={styles.pymtname}> Cash On Delivery</Text>
          <View style={styles.radioBox}>
            {radio === 2 && <Text style={styles.radioInner}></Text>}
          </View>
        </TouchableOpacity>

        <ButtonCustom
          children="Payment"
          elevationbtn
          btnStyle={{alignSelf: 'center', marginTop: height * 0.025}}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
