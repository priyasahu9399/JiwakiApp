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

import {Formik} from 'formik';
import * as yup from 'yup';

const {height, width} = Dimensions.get('window');

const AddAddress = ({navigation, route}) => {
  // const address = route?.params?.item; //address data get
  const showeditbtn = route?.params?.showeditbtn; //edit btn show
  const [loading, setLoading] = useState(false);
  const [isSelected, setisSelected] = useState('false');

  navigation?.setOptions({
    title: showeditbtn ? 'Edit Address' : 'Add Address',
  });

  const AddressValidationSchema = yup.object().shape({
    name: yup.string().required('please enter full name'),
    mobile: yup
      .string()
      .min(10, ({min}) => `mobile number must be ${min} digit`)
      .required('mobile number is Required'),
    houseNumber: yup.string().required('houseNumber is Required'),
    area: yup.string().required('Please enter area'),
    landmark: yup.string().required('landmark is Required'),
    pincode: yup.string().length(6).required('please enter pinCode'),
    state: yup.string().required('please enter state'),
    city: yup.string().required('please enter city'),
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <Formik
          validationSchema={AddressValidationSchema}
          initialValues={{
            name: '',
            mobile: '',
            houseNumber: '',
            area: '',
            pincode: '',
            state: '',
            city: '',
            landmark: '',
          }}
          onSubmit={values => {
            console.log(values), navigation.navigate('DeliveryAddress');
          }}>
          {({
            setFieldValue,
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            values,
            errors,
            isValid,
          }) => {
            return (
              <>
                <InputBox
                  placeholder="Your name"
                  onChangeText={handleChange('name')}
                  value={values?.name}
                  errors={touched?.name && errors?.name}
                />
                <InputBox
                  placeholder="Mobile no"
                  keyboardType="numeric"
                  maxLength={10}
                  value={values?.mobile}
                  errors={touched?.mobile && errors?.mobile}
                  onChangeText={handleChange('mobile')}
                />

                <InputBox
                  value={values?.state}
                  placeholder="state"
                  onChangeText={handleChange('state')}
                  errors={touched?.state && errors?.state}
                />
                <InputBox
                  value={values?.city}
                  placeholder="city"
                  onChangeText={handleChange('city')}
                  errors={touched?.city && errors?.city}
                />

                <InputBox
                  onChangeText={handleChange('pincode')}
                  value={values?.pincode}
                  placeholder="Pincode"
                  keyboardType="numeric"
                  maxLength={6}
                  errors={touched?.pincode && errors?.pincode}
                />
                <InputBox
                  placeholder="Area/ street/ village"
                  onChangeText={handleChange('area')}
                  value={values?.area}
                  errors={touched?.area && errors?.area}
                />
                <InputBox
                  placeholder="landmark/ village"
                  onChangeText={handleChange('landmark')}
                  value={values?.landmark}
                  errors={touched?.landmark && errors?.landmark}
                />
                <InputBox
                  placeholder="Flat/ House no"
                  value={values?.houseNumber}
                  errors={touched?.houseNumber && errors?.houseNumber}
                  onChangeText={handleChange('houseNumber')}
                />
                <CheckBox
                  isChecked={!isSelected}
                  onClick={() => setisSelected(!isSelected)}
                  checkedCheckBoxColor={COLORS.primary}
                  uncheckedCheckBoxColor={COLORS.gray50}
                  rightTextView={
                    <Text style={styles.checktext}>
                      Make this is my default address.
                    </Text>
                  }
                  style={{marginLeft: width * 0.01}}
                />

                {showeditbtn == true ? (
                  <Button
                    children="Edit address"
                    elevationbtn
                    btnStyle={styles.addbtn}
                    onPress={handleSubmit}
                  />
                ) : (
                  <Button
                    children="Add address"
                    elevationbtn
                    btnStyle={styles.addbtn}
                    onPress={handleSubmit}
                  />
                )}
              </>
            );
          }}
        </Formik>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress);
