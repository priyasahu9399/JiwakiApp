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
  FlatList,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import {connect} from 'react-redux';
import styles from './styles';
import Loader from './../../component/modalLoading/index';
import Address from './../../component/carts/addresscart';
import CartComponent from './../../component/carts/Carts';
import PriceDetail from './../../component/carts/pricedetail';
import ButtonCustom from './../../component/Button/index';
import Modal from 'react-native-modal';

const {height, width} = Dimensions.get('window');
const Cart = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [radioBtnid, setradioBtnid] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <Address
          firstname="Rohan Kumar"
          mobile="9399658245"
          address="Hoshangabad"
          landmark="Itarsii"
          houseNumber="1252"
          area="Of Itarsi"
          city="Itarsi"
          state="Madhya pradesh"
          pincode="461122"
          Change="Change"
          onPresschange={() => navigation.navigate('DeliveryAddress')}
        />

        <FlatList
          data={data.cartdata}
          renderItem={({item, index}) => (
            <CartComponent
              key={item.id}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              ratings={item.ratings}
              rate={item.rate}
              price={item.price}
              showincre
              navigation={navigation}
              onPressremove={() => setModalVisible(true)}
            />
          )}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Home')}
          style={styles.addmorebox}>
          <Text style={styles.addmoretext}>Add More items</Text>
        </TouchableOpacity>

        <View style={styles.promocodeBox}>
          <Text style={styles.promocodehead}>Apply PROMOCODE</Text>
          <TouchableOpacity
            onPress={() => setradioBtnid(!radioBtnid)}
            style={styles.row}>
            <View
              style={[
                styles.radiobtn,
                radioBtnid && {borderColor: COLORS.green},
              ]}>
              {radioBtnid && <View style={styles.innerradio}></View>}
            </View>
            <Text style={styles.promocode}>Apply Promo Code</Text>
            <Image source={icons.R_arrow} style={styles.promocoderarrow} />
          </TouchableOpacity>
          <Text style={styles.promocodeoff}>10% off on this coupon</Text>
        </View>

        <PriceDetail
          mrp="600.00"
          discount="100.00"
          charge="20.00"
          Promocode="706.00"
          Totalpayable="804"
          save="100.00"
          headingmain="Payment detail"
        />

        <Modal backdropOpacity={0.5} isVisible={isModalVisible}>
          <View style={styles.modalBox}>
            <Text style={styles.modalSubtitle}>
              Are you want to remove this product?
            </Text>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <ButtonCustom
                children="No"
                whitebgbtn
                onPress={() => setModalVisible(false)}
              />
              <ButtonCustom
                children="Yes"
                mediumbtn
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
      <View style={styles.bottomBox}>
        <View style={{width: width * 0.27, justifyContent: 'center'}}>
          <Text style={styles.viewtotaltext}>₹ 804.00</Text>
          <Text style={styles.viewgreen}>View detail</Text>
        </View>
        <ButtonCustom
          mediumbtn
          children="Continue"
          onPress={() => navigation.navigate('Payment')}
        />
      </View>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
