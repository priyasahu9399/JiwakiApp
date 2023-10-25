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
import BlogCart from './../../component/carts/blogcart';
import Stars from 'react-native-stars';
import SearchBox from './../../component/InputText/search';

const {height, width} = Dimensions.get('window');
const Blog = ({navigation}) => {
  const [active, setActive] = useState();
  navigation?.setOptions({
    headerTitle: () => (
      <SearchBox  editable={false} onPresssearch={() => navigation?.navigate('Search')} />
    ),
    headerTitleAlign: 'left',
  });
  return (
    <View style={styles.container}>
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
              {
                marginLeft: index == 0 ? width * 0.02 : width * 0.01,
                marginRight:
                  data.categorylist?.length - 1 ? width * 0.02 : width * 0.01,
              },
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
        data={data.BlogCarts}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        renderItem={({item, index}) => (
          <BlogCart
            review={item?.review}
            title={item?.title}
            image={item?.img}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
