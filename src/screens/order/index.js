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
const Order = ({navigation}) => {
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
        <Text style={styles.orderSuccess}>
          Order is successfully placed ! 🎉🎉
        </Text>
        <FlatList
          data={data.OrderList}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={item?.id}
              activeOpacity={0.6}
              style={styles.orderBox}>
              <View style={styles.imgBox}>
                <Image source={item?.image} style={styles.orderImg} />
                <Text style={styles.qty}>QTY : {item?.qty}</Text>
              </View>
              <View>
                <Text style={styles.orderid}>Order id {item?.orderid}</Text>
                <Text style={styles.ordertitle}>{item?.heading}</Text>
                <View style={styles.row}>
                  <Text style={styles.orderdeliver}>Delivery at :</Text>
                  <Text style={styles.orderdate}> {item?.deliverydate}</Text>
                </View>
                <Text style={styles.orderprice}>₹ {item?.price}</Text>
                <ButtonCustom
                  children="Cancel Order"
                  whitebgbtn
                  btntextStyle={{fontSize: width * 0.028}}
                  btnStyle={styles.cancel}
                  onPress={() => setModalVisible(true)}
                />
              </View>
            </TouchableOpacity>
          )}
        />

        <PriceDetail
          mrp="600.00"
          discount="100.00"
          charge="20.00"
          Promocode="706.00"
          Totalpayable="804"
          save="100.00"
          headingmain="Order Summery"
        />
        <Address
          delivery
          disabled={true}
          firstname="Rohan Kumar"
          mobile="9399658245"
          address="Hoshangabad"
          landmark="Itarsii"
          houseNumber="1252"
          area="Of Itarsi"
          city="Itarsi"
          state="Madhya pradesh"
          pincode="461122"
        />
        <Image source={images.order} style={styles.orderdone} />
        <TouchableOpacity activeOpacity={0.6} style={styles.downloadBox}>
          <Text style={styles.download}>Download Invoice</Text>
          <Image source={icons.download} style={styles.downloadrarrow} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('ShareOpinion')}
          style={styles.downloadBox}>
          <Text style={styles.download}>Share your opinion</Text>
          <Image source={icons.R_arrow} style={styles.rarrow} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.downloadBox}>
          <Text style={styles.download}>Track order</Text>
          <Image source={icons.R_arrow} style={styles.rarrow} />
        </TouchableOpacity>

        <Modal backdropOpacity={0.5} isVisible={isModalVisible}>
          <View style={styles.modalBox}>
            <Text style={styles.modaltitle}>Confirm Cancellation</Text>
            <Text style={styles.modalSubtitle}>
              Are you sure want to cancel order ?
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
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
