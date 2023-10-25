import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, data} from '../../constants';
import {connect} from 'react-redux';
import styles from './styles';
import NewProductCart from './../../component/carts/newproductCart';

const {height, width} = Dimensions.get('window');
const Favorite = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View style={styles.innercontainer}>
        <FlatList
          data={data.NewProductCartdata}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{alignSelf: 'center'}}
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
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
