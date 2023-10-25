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
import {COLORS, data, icons, images} from './../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import ProfileBox from './../../component/carts/profilecart';

const {height, width} = Dimensions.get('window');
const Affiliate = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <View style={styles.innercontainer}>
        <ProfileBox
          profileimage={icons.affiliate}
          text="Affiliate System"
          rarrow
          orangeicon
          onPress={() => navigation.navigate('AffiliateSystem')}
        />
        <ProfileBox
          profileimage={icons.money}
          text="Payment History"
          rarrow
          orangeicon
          onPress={() => navigation.navigate('PaymentHistory')}
        />
        <ProfileBox
          profileimage={icons.withdraw}
          text="Withdraw Request"
          rarrow
          orangeicon
          onPress={() => navigation.navigate('WithDrawRequest')}
        />
      </View>
    </ScrollView>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Affiliate);
