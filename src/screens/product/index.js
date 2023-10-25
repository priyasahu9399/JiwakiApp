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
import styles from './styles';
import {connect} from 'react-redux';
import SearchBox from './../../component/InputText/search';
// import Loader from './../../component/modalLoading/index';
import Drawer from './../drawerScreen/index';
import ButtonCustom from './../../component/Button/index';
import {Button, ModalLoading} from 'react-native-components-design';
import NewProductCart from './../../component/carts/newproductCart';
import Stars from 'react-native-stars';
import HeadingSeeAll from './../../component/carts/headingSeeall';

const {height, width} = Dimensions.get('window');

const Product = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);
  const {entries, activeSlide} = useState(1);

  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <Image source={images.home4} style={styles.oneimg} />
        <FlatList
          data={data.categorylist}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => setActive(index)}
              key={item => item?.id}
              activeOpacity={0.6}
              style={[
                styles.listbox,
                active == index && {backgroundColor: COLORS.primary},
              ]}>
              <Text
                style={[
                  styles.listboxtext,
                  active == index && {color: COLORS.white},
                ]}>
                {item.text}
              </Text>
            </TouchableOpacity>
          )}
        />

        <FlatList
          data={data.NewProductCartdata}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          renderItem={({item, index}) => (
            <NewProductCart
              key={item => item?.id}
              navigation={navigation}
              image={item.image}
              title={item.title}
              gst={item.gst}
              price={item.price}
              mrp={item.mrp}
              rate={item.rate}
              ratings={item.ratings}
            />
          )}
        />
        <Image source={images.home1} style={styles.oneimg} />
        <View>
          <HeadingSeeAll
            heading="Skin Care"
            seeAll
            onPress={() => navigation.navigate('Product')}
          />
          <FlatList
            data={data.NewProductCartdata}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item, index}) => (
              <NewProductCart
                key={item => item?.id}
                image={item.image}
                title={item.title}
                gst={item.gst}
                price={item.price}
                mrp={item.mrp}
                rate={item.rate}
                ratings={item.ratings}
                marginleft={{
                  marginLeft: index == 0 ? width * 0.02 : width * 0.01,
                  marginRight:
                    data.NewProductCartdata.length - 1
                      ? width * 0.02
                      : width * 0.01,
                }}
              />
            )}
          />
        </View>
        <Image source={images.home3} style={styles.oneimg} />
        <View>
          <HeadingSeeAll
            heading="Gift Pack"
            seeAll
            onPress={() => navigation.navigate('Product')}
          />
          <FlatList
            data={data.NewProductCartdata}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item, index}) => (
              <NewProductCart
                key={item => item?.id}
                image={item.image}
                title={item.title}
                gst={item.gst}
                price={item.price}
                mrp={item.mrp}
                rate={item.rate}
                ratings={item.ratings}
                marginleft={{
                  marginLeft: index == 0 ? width * 0.02 : width * 0.01,
                  marginRight:
                    data.NewProductCartdata.length - 1
                      ? width * 0.02
                      : width * 0.01,
                }}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
