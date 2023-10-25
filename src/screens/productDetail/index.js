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
  TextInput,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import SearchBox from './../../component/InputText/search';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Drawer from './../drawerScreen/index';
import ButtonCustom from './../../component/Button/index';
import {Button, ModalLoading} from 'react-native-components-design';
import NewProductCart from './../../component/carts/newproductCart';
import Stars from 'react-native-stars';
import ProductDetailSlider from './../../component/slider/productdetailSlider';
import HeadingSeeAll from './../../component/carts/headingSeeall';
import Collapsible from 'react-native-collapsible';
import * as Progress from 'react-native-progress';
import CircularProgress from 'react-native-circular-progress-indicator';
import InputBox from './../../component/InputText/index';

const {height, width} = Dimensions.get('window');
const Listdata = [
  {
    id: 0,
    title: 'Discription',
  },
  {
    id: 1,
    title: 'Key Benifits',
  },
  {
    id: 2,
    title: 'Direction for use',
  },
  {
    id: 3,
    title: 'Safety Information',
  },
  {
    id: 4,
    title: 'Other Information',
  },
];
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

const ProductDetail = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);
  const [switchs, setSwitchs] = useState('Discription');

  // const {entries, activeSlide} = useState(1);

  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductDetailSlider datalist={data.homeslidersecondlist} />
        <View style={styles.innercontainer}>
          <Text style={[styles.title, {fontSize: width * 0.037}]}>
            Onion Hair Oil for Hair Regrowth and Hair Fall Control with
            Redensyl, 150ml
          </Text>
          <Text style={styles.subtitle}>
            Boosts Hair Growth | Adds Strength & Shine
          </Text>
          <View style={styles.row}>
            <Text style={styles.rate}>4.5</Text>
            <Image source={icons.fillstar} style={styles.star} />
            <Text style={styles.rating}>987 ratings</Text>
          </View>
        </View>
        <Text style={styles.heading}>Select Variant</Text>
        <FlatList
          data={data.priceVariant}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setActive(index)}
              style={[
                styles.variantBox,
                {marginLeft: index == 0 ? width * 0.03 : 0},
                {
                  marginRight: data.priceVariant?.length - 1 ? width * 0.03 : 0,
                },
              ]}>
              <View
                style={[
                  styles.variantmlBox,
                  active == index && {backgroundColor: COLORS.primary},
                ]}>
                <Text
                  style={[
                    styles.variantml,
                    active == index && {color: COLORS.white},
                  ]}>
                  {item?.qty}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.variantmrp}>₹{item?.mrp}</Text>
                <Text style={styles.variantprice}>₹{item?.price}</Text>
              </View>
              <Text style={styles.variantmlprimary}>₹{item?.prqty}ml</Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.innercontainer}>
          <View style={styles.row}>
            <Text style={styles.greenprice}>₹353</Text>
            <Text style={styles.mrp}>MRP ₹399</Text>
            <Text style={styles.off}>10% OFF</Text>
          </View>
          <Text style={[styles.include, {marginTop: height * 0.001}]}>
            Include of all taxes
          </Text>
          <Text style={styles.title}>Delivering To :</Text>
          <Text style={styles.deliveraddress}>
            Premnagar near shiv mandir, sindhur vbu hazaribagh
          </Text>
        </View>

        <View>
          <Text style={styles.heading}>Offers</Text>
          <FlatList
            data={data.OfferList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setActive(index)}
                style={[
                  styles.offerBox,
                  {marginLeft: index == 0 ? width * 0.03 : 0},
                  {
                    marginRight: data.OfferList?.length - 1 ? width * 0.03 : 0,
                  },
                ]}>
                <View style={styles.row}>
                  <Image style={styles.offericon} source={icons.offer} />
                  <Text style={styles.off}>{item?.title}</Text>
                </View>
                <Text style={styles.offerblack}>{item?.subtitle} </Text>
                <View style={styles.row}>
                  <Text style={styles.offergreen}>{item?.count} Offer</Text>
                  <Image style={styles.iconarrow} source={icons.R_arrow} />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <FlatList
          data={data.fourList}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item, index}) => (
            <View style={styles.fourimgbox}>
              <Image source={item.img} style={styles.fourimg} />
              <Text style={styles.fourtext}>{item.text1}</Text>
            </View>
          )}
        />
        <FlatList
          data={Listdata}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setSwitchs(item.title)}
              style={[
                styles.switchbox,
                switchs == item.title && styles.activeswitch,
              ]}>
              <Text
                style={[
                  styles.switchtext,
                  switchs == item.title && {
                    color: COLORS.primary,
                  },
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
        {switchs == 'Discription' && (
          <Text style={styles.switchtitle}>
            Introducing new & improved Mamaearth Onion Conditioner for even
            stronger, smoother, and shinier hair. It’s time to welcome healthier
            hair with the time-tested goodness of Onion. Onion, rich in Sulphur,
            potassium & antioxidants, reduces hair fall & accelerates hair
            growth.
          </Text>
        )}
        {switchs == 'Key Benifits' && (
          <Text style={styles.switchtitle}>
            Introducing new & improved Mamaearth Onion Conditioner for even
            stronger, smoother, and shinier hair. It’s time to welcome healthier
            hair with the time-tested goodness of Onion. Onion, rich in Sulphur,
            potassium & antioxidants, reduces hair fall & accelerates hair
            growth. {'\n\n'} Coconut has nourishing properties and it penetrates
            deep into the follicles to promote hair growth & scalp health. The
            natural goodness of Sweet Almond Oil nourishes and strengthens the
            hair and is optimal for controlling hair fall.And because of our no
            toxins and no harmful chemicals philosophy, you won’t find any
            Silicones, Parabens, mineral oil & dyes in Mamaearth Onion Hair
            Conditione
          </Text>
        )}
        {switchs == 'Direction for use' && (
          <Text style={styles.switchtitle}>
            Introducing new & improved Mamaearth Onion Conditioner for even
            stronger, smoother, and shinier hair. It’s time to welcome healthier
            hair with the time-tested goodness of Onion. Onion, rich in Sulphur,
            potassium & antioxidants, reduces hair fall & accelerates hair
            growth.
          </Text>
        )}
        {switchs == 'Safety Information' && (
          <Text style={styles.switchtitle}>
            Introducing new & improved Mamaearth Onion Conditioner for even
            stronger, smoother, and shinier hair. It’s time to welcome healthier
            hair with the time-tested goodness of Onion. Onion, rich in Sulphur,
            potassium & antioxidants, reduces hair fall & accelerates hair
            growth.
          </Text>
        )}
        {switchs == 'Other Information' && (
          <Text style={styles.switchtitle}>
            Introducing new & improved Mamaearth Onion Conditioner for even
            stronger, smoother, and shinier hair. It’s time to welcome healthier
            hair with the time-tested goodness of Onion. Onion, rich in Sulphur,
            potassium & antioxidants, reduces hair fall & accelerates hair
            growth.
          </Text>
        )}

        <Image source={images.home4} style={styles.oneimg} />

        <Text style={styles.heading}>Ratings :</Text>
        <View style={styles.starmainbox}>
          {data.ratinglist.map((item, index) => (
            <View style={styles.starbox}>
              <View style={styles.starstyle}>
                <Stars
                  default={item.rate}
                  spacing={5}
                  starSize={12}
                  count={item.count}
                  fullStar={icons.fillstar}
                  style={{alignSelf: 'flex-start'}}
                />
              </View>
              <Text style={styles.usercount}>{item.user} users</Text>
              <Progress.Bar
                progress={item.progress}
                width={width * 0.34}
                height={height * 0.01}
                borderRadius={12}
                borderColor="#F5F5F5"
                indeterminate={false}
                unfilledColor={COLORS.gray10}
              />
            </View>
          ))}
        </View>

        <View style={styles.starmainbox}>
          <FlatList
            data={data.circleProgress}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View style={styles.circlebox}>
                <CircularProgress
                  key={item?.id}
                  value={item?.value}
                  radius={26}
                  duration={2000}
                  progressValueColor={COLORS.black}
                  activeStrokeColor={COLORS.green}
                  inActiveStrokeColor={COLORS.gray10}
                  inActiveStrokeOpacity={0.4}
                  inActiveStrokeWidth={5}
                  activeStrokeWidth={5}
                  onAnimationComplete={() => {
                    console.log('Animation complete');
                  }}
                />
                <Text style={styles.circletext}>{item?.name}</Text>
              </View>
            )}
          />
        </View>

        <Text style={styles.heading}>Customer Review</Text>
        <FlatList
          data={data.reviewslist}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={item.id}
              style={styles.ReviewBox}
              activeOpacity={0.7}>
              <Image source={item?.img} style={styles.Reviewimg} />
              <View>
                <Text style={styles.text1}>{item?.text1}</Text>
                <Text style={styles.reviewsubtext}>{item?.text2}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity>
          <Text style={styles.readall}>Read all reviews!</Text>
        </TouchableOpacity>

        <View>
          <Text style={[styles.heading, {marginBottom: height * 0.01}]}>
            Rate this product
          </Text>
          <Stars
            default={5}
            spacing={8}
            count={5}
            fullStar={
              <FontAwesome name="star" size={15} color={COLORS.gray70} />
            }
          />
          <View style={styles.raterowbox}>
            {data.rateList.map((item, index) => (
              <View style={styles.row}>
                <Text style={styles.ratetext}>{item?.name}</Text>
                <Stars
                  default={5}
                  spacing={14}
                  count={5}
                  fullStar={
                    <FontAwesome name="star" size={12} color={COLORS.gray70} />
                  }
                />
              </View>
            ))}

            <InputBox
              placeholder="Share your experience"
              textAlignVertical="top"
              multiline={true}
              numberOfLines={5}
              inputboxstyle={styles.input}
            />

            <ButtonCustom
              children="Submit"
              mediumbtn
              btnStyle={{alignSelf: 'flex-end'}}
            />
          </View>
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

        <Image
          source={images.home3}
          style={[styles.oneimg, {marginTop: height * 0.03}]}
        />
        <View>
          <HeadingSeeAll
            heading="Similar Product"
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
      </ScrollView>

      <View style={styles.bottomrow}>
        <ButtonCustom
          children="Add to Cart"
          iconbtnICON
          whitebgbtn
          btnStyle={{backgroundColor: '#fce9dc'}}
          onPress={() => navigation.navigate('Cart')}
        />
        <ButtonCustom
          children="Buy Now"
          mediumbtn
          onPress={() => navigation.navigate('Order')}
        />
      </View>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
