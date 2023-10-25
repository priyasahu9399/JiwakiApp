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
import Button from './../../component/Button/index';
import InputBox from './../../component/InputText/index';
import CheckBox from 'react-native-check-box';
import AddressCart from './../../component/carts/address';

const {height, width} = Dimensions.get('window');

const DeliveryAddress = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const addressmatch = route?.params;
  const [isSelected, setisSelected] = useState('false');
  const [radioBtnid, setradioBtnid] = useState(1);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={data.AddressCartdata}
          renderItem={({item, index}) => (
            <AddressCart
              key={index}
              firstname={item?.firstname}
              mobile={item?.mobile}
              address={item?.houseNumber}
              landmark={item?.landmark}
              houseNumber={item?.houseNumber}
              area={item?.area}
              city={item?.city}
              state={item?.state}
              pincode={item?.pincode}
              onPress={() => {
                setradioBtnid(index);
              }}
              checked={radioBtnid == index ? true : false}
              onPressedit={() => {
                navigation?.navigate('AddAddress', {
                  showeditbtn: true,
                });
              }}
            />
          )}
        />
        <TouchableOpacity
          onPress={() => navigation?.navigate('AddAddress')}
          activeOpacity={0.5}
          style={styles.addmorebox}>
          <Image source={icons.plus} style={styles.plus} />
          <Text style={styles.addmore}>Add New Address</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryAddress);
