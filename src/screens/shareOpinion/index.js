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
const ShareOpinion = ({navigation}) => {
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
          size={24}
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
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShareOpinion);
