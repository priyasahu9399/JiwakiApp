import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import styles from './styles';
import {icons, data, images, COLORS} from '../../constants';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';

const {height, width} = Dimensions.get('window');

const MemberShipBuy = ({navigation}) => {
  const [radio, setRadio] = useState();
  const [loading, setLoading] = useState(false);

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
        <View style={[styles.circlerow, {left: -5}]}>
          <View style={styles.whitecircle}></View>
        </View>
        <View style={styles.circlerow}>
          <View style={styles.whitecircle}></View>
        </View>
        <View style={styles.orangebgcolor}>
          <View style={styles.orangerow}>
            <View style={styles.Boxdesign}>
              <Text style={styles.Boxdesignname}>JL</Text>
            </View>
            <Text numberOfLines={2} style={styles.orngcarthead}>
              JIWAKI LIFESTYLE PRIVATE LIMITED (JILI79)
            </Text>
          </View>
          <View style={styles.bordertobottom}></View>

          <View style={styles.orangerow}>
            <View>
              <Text style={styles.orngcart_Hiii}>Hi,</Text>
              <Text style={styles.orngcart_Hiii}>Pawan</Text>
            </View>
            <View>
              <Text style={styles.orngcart_emailno}>
                pawankrtest07@gmail.com
              </Text>
              <Text style={styles.orngcart_emailno}>+91 99880 99880</Text>
            </View>
          </View>
          <View style={styles.bordertobottom}></View>
          <View style={styles.orangerow}>
            <Text style={styles.orngcart_total}>Total Amount</Text>
            <Text style={styles.orngcart_price}>INR 99.00</Text>
          </View>
        </View>
        {/* <ImageBackground
          source={images.orange}
          style={styles.orangebg}></ImageBackground> */}

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setRadio(1)}
          style={styles.pymentBox}>
          <Image source={icons.gpay} style={styles.pymtIcon} />
          <Text style={styles.pymtname}>Gpay</Text>
          <View style={styles.radioBox}>
            {radio === 1 && <Text style={styles.radioInner}></Text>}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setRadio(2), Rozarpayonline();
          }}
          style={styles.pymentBox}>
          <Image source={icons.phonepy} style={styles.pymtIcon} />
          <Text style={styles.pymtname}>Phonepe</Text>
          <View style={styles.radioBox}>
            {radio === 2 && <Text style={styles.radioInner}></Text>}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setRadio(3)}
          style={styles.pymentBox}>
          <Image source={icons.pytm} style={styles.pymtIcon} />
          <Text style={styles.pymtname}>Paytm UPI</Text>
          <View style={styles.radioBox}>
            {radio === 3 && <Text style={styles.radioInner}></Text>}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setRadio(4)}
          style={styles.pymentBox}>
          <Image source={icons.wallet} style={styles.pymtIcon} />
          <Text style={styles.pymtname}>Debit Card/Credit Card</Text>
          <View style={styles.radioBox}>
            {radio === 4 && <Text style={styles.radioInner}></Text>}
          </View>
        </TouchableOpacity>

        <View style={styles.row}>
          <Text style={styles.netbank}>NET Banking</Text>
          <TouchableOpacity>
            <Text style={styles.morebank}>More Bank</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.netbankBox}>
          <FlatList
            data={data.banklist}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View style={styles.morebankbox}>
                <Image source={item?.img} style={styles.bankimg} />
                <Text style={styles.banktext}>{item?.text}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MemberShipBuy);
