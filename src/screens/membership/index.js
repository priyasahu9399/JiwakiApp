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
import CheckBox from 'react-native-check-box';

const {height, width} = Dimensions.get('window');

const Membership = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [isSelected, setSelected] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <Image source={images.home5} style={styles.oneimg} />

        <View style={styles.contentBox}>
          <Text style={styles.heading}>Buy – 99 Membership</Text>
          <Text style={styles.heading}>What is 99 Program?</Text>
          <Text style={[styles.subheading, {marginTop: height * 0.02}]}>
            99 Program is a performance-based marketing strategy that allows you
            to promote products from our company to your audience and create an
            additional source of income without having to create your own
            products and services. This program is based on revenue sharing.
            {'\n\n'}‘99’ concept is simple: when an existing customer refers
            someone to this program and that person becomes a new customer, the
            referring customer receives some form of reward, such as incentive,
            discounts and coupons
          </Text>

          <View style={styles.row}>
            <View style={styles.dot}></View>
            <Text style={styles.subheading}>
              Get discount coupon of worth Rs. 3000 when you register under 99
              program
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.dot}></View>
            <Text style={styles.subheading}>
              Get Rs 50 from each referral register using your referral link.
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.dot}></View>
            <Text style={styles.subheading}>
              Get referral bonus 10% of invoice value on each purchase made by
              them every time.
            </Text>
          </View>
        </View>
        <Text style={[styles.heading, {marginBottom: height * 0.003}]}>
          User detail
        </Text>
        <InputBox placeholder="Your Name" />
        <InputBox placeholder="Email" keyboardType="email-address" />
        <InputBox placeholder="Mobile no" keyboardType="numeric" />
        <InputBox placeholder="Password" />
        <InputBox placeholder="Confirm Password" />

        <View style={styles.row}>
          <CheckBox
            onClick={() => {
              setSelected(!isSelected);
            }}
            isChecked={!isSelected}
            checkBoxColor={COLORS.primary}
            uncheckedCheckBoxColor={COLORS.gray40}
            checkedCheckBoxColor={COLORS.primary}
          />
          <Text style={styles.checktext}>
            I agree to the Terms and Conditions, Return Policy & Privacy Policy
          </Text>
        </View>
        <ButtonCustom
          children="Pay"
          elevationbtn
          btnStyle={styles.paybtn}
          onPress={() => navigation.navigate('MemberShipBuy')}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Membership);
