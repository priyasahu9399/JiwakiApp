import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import {connect, useDispatch} from 'react-redux';
import styles from './styles';
import ProfileBox from './../../component/carts/profilecart';
import Modal from 'react-native-modal';
import ButtonCustom from './../../component/Button/index';
import LoginBox from './../../component/carts/login';
import {AUTH_TOKEN} from './../../redux/types';
import {AuthFunction} from './../../redux/actions/authActions';

const {height, width} = Dimensions.get('window');
const Profile = ({navigation, token}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      {token ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.innercontainer}>
          <ImageBackground source={images.profile4} style={styles.profilebg}>
            <Image source={images.profile1} style={styles.profile} />
          </ImageBackground>
          <Text style={styles.heading}>Wade Warren</Text>
          <Text style={styles.subheading}>(907) 555-0101</Text>

          <View>
            <ProfileBox
              profileimage={icons.order}
              text="Order"
              onPress={() => navigation.navigate('Order')}
            />
            <ProfileBox
              profileimage={icons.heart}
              text="Favourite"
              onPress={() => navigation.navigate('Favorite')}
            />
            <ProfileBox
              profileimage={icons.location}
              text="Delivery Address"
              onPress={() => navigation.navigate('DeliveryAddress')}
            />
            <ProfileBox
              profileimage={icons.affiliate2}
              rarrow
              text="Affiliate"
              onPress={() => navigation.navigate('Affiliate')}
            />
            <ProfileBox
              profileimage={icons.member}
              text="Membership"
              onPress={() => navigation.navigate('Membership')}
            />
            <ProfileBox
              profileimage={icons.wallet2}
              text="Wallet"
              onPress={() => navigation.navigate('RechargeWallet')}
            />
            <ProfileBox
              profileimage={icons.logout}
              text="LogOut"
              onPress={() => setModalVisible(true)}
            />

            <Modal backdropOpacity={0.5} isVisible={isModalVisible}>
              <View style={styles.modalBox}>
                <Text style={styles.modalSubtitle}>
                  Are you want to logout ?
                </Text>
                <View style={styles.row}>
                  <ButtonCustom
                    children="No"
                    whitebgbtn
                    onPress={() => setModalVisible(false)}
                  />
                  <ButtonCustom
                    children="Yes"
                    mediumbtn
                    onPress={() => {
                      dispatch({
                        type: AUTH_TOKEN,
                        payload: null,
                      }),
                        setModalVisible(false);
                    }}
                  />
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      ) : (
        <LoginBox onPress={() => navigation.navigate('SignIn')} />
      )}
    </View>
  );
};
const mapStateToProps = state => ({
  token: state.auth.token,
});
const mapDispatchToProps = {AuthFunction};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
