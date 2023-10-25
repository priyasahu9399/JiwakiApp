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
import HomeSlider from './../../component/slider/homeAutoscrollslider';
import HeadingSeeAll from './../../component/carts/headingSeeall';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Collapsible from 'react-native-collapsible';

const {height, width} = Dimensions.get('window');

const CollapsibleFaq = ({title, subtext}) => {
  const [isCollapsed, setCollapsed] = useState(true);
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setCollapsed(!isCollapsed)}
        style={styles.faqBox}>
        <Text style={styles.faqtext}>{title}</Text>
        <Image source={icons.uparrow} style={styles.uparrow} />
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.faqtextBox}>
          <Text style={styles.faqtext}>{subtext}</Text>
        </View>
      </Collapsible>
    </View>
  );
};

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);
  navigation?.setOptions({
    headerTitle: () => (
      <SearchBox
        editable={false}
        onPressToggle={() => navigation?.openDrawer()}
        onPresssearch={() => navigation?.navigate('Search')}
      />
    ),
    headerTitleAlign: 'left',
  });
  const {entries, activeSlide} = useState(1);

  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <HomeSlider datalist={data.homesliderlist} />
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
        <View>
          <HeadingSeeAll
            heading="New Lounches"
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
        <View>
          <HeadingSeeAll
            heading="Beauty"
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

        <View>
          <Text style={styles.headcustomer}>FAQ</Text>
          <Image source={images.line} style={styles.line} />
          <CollapsibleFaq
            title="Are Jiwaki Products safe to use ?"
            subtext="Jiwaki Products safe to use , Are Jiwaki Products safe to use,Are Jiwaki Products safe to use"
          />
          <CollapsibleFaq
            title="Are Jiwaki Products safe to use ?"
            subtext=" Products safe to use , Are Jiwaki Products safe to use,Are Jiwaki Products safe to use"
          />
          <CollapsibleFaq
            title="Are Jiwaki Products safe to use ?"
            subtext=" Jiwaki Products safe to use , Are Jiwaki Products safe to use,Are Jiwaki Products safe to use"
          />
          <CollapsibleFaq
            title="Are Jiwaki Products safe to use ?"
            subtext="Are  Products safe to use , Are Jiwaki Products safe to use,Are Jiwaki Products safe to use"
          />
        </View>

        <View>
          <Text style={styles.headcustomer}>What is customer say</Text>
          <Image source={images.line} style={styles.line} />
          <Carousel
            data={data.CustomerSayList}
            renderItem={({item, index}) => (
              <View key={item => item?.id} style={styles.customerBox}>
                <View style={styles.row}>
                  <Image source={item?.img} style={styles.customerimg} />
                  <View>
                    <View style={styles.row}>
                      <Text style={styles.customertext}>{item?.text1}</Text>
                      <Image
                        source={icons.rightblue}
                        style={styles.rightblue}
                      />
                    </View>
                    <View style={{alignSelf: 'flex-start'}}>
                      <Stars
                        default={item.rate}
                        spacing={4}
                        starSize={13}
                        count={5}
                        fullStar={icons.fillstar}
                        emptyStar={icons.star}
                        disabled={true}
                      />
                    </View>
                  </View>
                </View>
                <Text numberOfLines={11} style={styles.customerContent}>
                  {item?.text2}
                </Text>
              </View>
            )}
            sliderWidth={width}
            itemWidth={width * 0.65}
          />
        </View>

        <View style={styles.fourimgmainbox}>
          {data.fourList.map((item, index) => (
            <View key={item => item?.id} style={styles.fourimgbox}>
              <Image source={item.img} style={styles.fourimg} />
              <Text style={styles.fourtext}>{item.text1}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
