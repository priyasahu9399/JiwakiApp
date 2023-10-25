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
import DropdownComponent from './../../component/dropdown/index';

const {height, width} = Dimensions.get('window');
const Service = [
  {value: '0', label: 'Product'},
  {value: '1', label: 'Category'},
  {value: '2', label: 'Other'},
];
const ContactUs = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [isSelected, setisSelected] = useState('false');
  const [value, setvalue] = useState();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <DropdownComponent
          placeholder="Service"
          data={Service}
          onChange={item => setvalue(item?.value)}
        />
        <InputBox placeholder="Name" />
        <InputBox placeholder="Email-id" keyboardType="email-address" />
        <InputBox
          placeholder="Message"
          textAlignVertical="top"
          multiline={true}
          numberOfLines={7}
        />

        <ButtonCustom
          children="Submit"
          elevationbtn
          btnStyle={{alignSelf: 'center', marginTop: height * 0.02}}
        />

        <View>
          <Text style={styles.heading}>Get In touch</Text>

          <View style={styles.row}>
            <View style={[styles.iconsBox, {marginRight: width * 0.022}]}>
              <Image style={styles.icons} source={icons.email} />
              <Text style={styles.iconsBoxtext}>jiwaki@gmail.com</Text>
            </View>
            <View style={styles.iconsBox}>
              <Image style={styles.icons} source={icons.phone} />
              <Text style={styles.iconsBoxtext}>659-8977-987</Text>
            </View>
          </View>
          <View
            style={[
              styles.iconsBox,
              {width: width * 0.93, marginTop: height * 0.02},
            ]}>
            <Image style={styles.icons} source={icons.Colorlocation} />
            <Text style={styles.iconsBoxtext}>
              Near prem Nagar, sindhur Hazaribagh, Jharkhand (82531)
            </Text>
          </View>
        </View>

        <Text style={styles.heading}>Follow Us On</Text>
        <View style={styles.socialrow}>
          <TouchableOpacity>
            <Image
              source={icons.linked}
              style={[styles.socialicon, {tintColor: '#4555DE'}]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={icons.facebook}
              style={[styles.socialicon, {tintColor: '#4555DE'}]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={icons.twitter}
              style={[styles.socialicon, {tintColor: '#4555DE'}]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icons.insta} style={styles.socialicon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
