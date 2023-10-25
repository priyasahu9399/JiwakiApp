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
import Share from 'react-native-share';
import styles from './styles';

const {height, width} = Dimensions.get('window');
const BlogDetail = ({navigation}) => {
  const [active, setActive] = useState(0);
  const share = () => {
    const options = {
      message: 'hello dear',
      url: 'http:product.hsgh.pmng',
      email: 'priyasahu833242@gmail.com',
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <View>
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
      </View>
      <ScrollView>
        <Text style={styles.headcustomer}>
          Rice Water for Skin Benefits for Face
        </Text>
        <Image source={images.girl} style={styles.oneimg} />

        <View style={styles.innerContainer}>
          <View style={styles.row}>
            <Image source={images.profile1} style={styles.profile} />
            <Text style={styles.profilename}>Rajesh kumar.</Text>
            <Text style={styles.profilename}>6 month ago</Text>
            <Text style={styles.profilename}>7876 Views</Text>
            <TouchableOpacity
              onPress={share}
              activeOpacity={0.6}
              style={styles.sharebox}>
              <Image source={icons.share} style={styles.share} />
            </TouchableOpacity>
          </View>
          <View style={styles.Ong_borderbox}>
            <Text style={styles.Ong_borderText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tristique feugiat nibh ut tempor. Quisque non dolor efficitur,
              efficitur est eget, fermentum neque. Donec semper iaculis
              sagittis. Vivamus euismod accumsan justo.
            </Text>
          </View>
          <Text style={[styles.Ong_borderText, {paddingHorizontal: 0}]}>
            Due to the rise of toxin-free beauty care products in recent times,
            people are now switching to using rice water for skin whitening.
            This trend is a huge comeback as a simple and safe solution for
            various skin care issues. Skin enthusiasts too are going gaga over
            this inexpensive and easy-to-use beauty hack for an improved skin
            texture and blemish-free appearance. But what is rice water and how
            is it beneficial for the skin- here’s a blog post explaining some of
            the basics.{'\n\n'}Rice has been a staple diet in Southeastern
            countries, primarily because of the geographical location of these
            countries near seas. Rice and fish rank among the most commonly
            available foods there, and this accounts for their ingenious
            discovery of the rice water benefits for skin care routine or hair
            care regimens.
          </Text>
          <View>
            <Text style={styles.heading}>What is water rice</Text>
            <Text style={[styles.Ong_borderText, {paddingHorizontal: 0}]}>
              Rice water is the starchy left after the rice is soaked in water.
              The water is most beneficial for skin and hair owing to the star
              ingredient- inositol and ferulic acid.{'\n\n'}Inositol, or vitamin
              B8, is a naturally occurring sugar. It helps make the skin more
              elastic, reduces sebum secretion, and reduces multiple signs of
              aging. Ferulic acid is also a fantastic antioxidant like vitamin C
              and E. It is well suited for fighting the harmful free radicals
              damage in the cells, thus making the skin stay younger.
            </Text>
          </View>
          <Image source={images.rice} style={styles.oneimg} />
          <View>
            <Text style={styles.heading}>
              13 Benefits of Rice Water for face
            </Text>
            <Text style={[styles.Ong_borderText, {paddingHorizontal: 0}]}>
              This article will list eight of the best-known benefits of rice
              water and how you can use it for your skin too. We would also top
              the article by mentioning some of the best ways that you may use
              rice water at home.
            </Text>
          </View>
          <View style={styles.dotbox}>
            <View style={styles.dot}></View>
            <Text numberOfLines={1} style={styles.dotText}>
              Glowing Skin.
            </Text>
          </View>
          <View style={styles.dotbox}>
            <View style={styles.dot}></View>
            <Text numberOfLines={1} style={styles.dotText}>
              Soothes Sun Damage. ....
            </Text>
          </View>
          <View style={styles.dotbox}>
            <View style={styles.dot}></View>
            <Text numberOfLines={1} style={styles.dotText}>
              Strengthens the Skin Barrier. ...
            </Text>
          </View>
          <View style={styles.dotbox}>
            <View style={styles.dot}></View>
            <Text numberOfLines={1} style={styles.dotText}>
              Improves the Elasticity of Skin....
            </Text>
          </View>
          <View style={[styles.dotbox, {marginBottom: height * 0.02}]}>
            <View style={styles.dot}></View>
            <Text numberOfLines={1} style={styles.dotText}>
              Brightens the Skin Complexion
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
