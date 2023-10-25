import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../constants';
import Share from 'react-native-share';
// import ImgToBase64 from 'react-native-image-base64';
import {http2} from './../../services/api';
const {height, width} = Dimensions.get('window');

const BlogCart = ({review, title, image, navigation}) => {
  // const [base64Img, setBase64Img] = useState();
  // ImgToBase64.getBase64String(image?.uri)
  //   .then(base64String => {
  //     setBase64Img('data:image/jpeg;base64,' + base64String);
  //     // console.log('base64 : ', base64Img);
  //   })
  //   .catch(err => console.log(err));
  // const options = {
  //   message: `${text1}`,
  //   url: base64Img,
  // };

  // const share = () => {
  //   Share.open(options)
  //     .then(result => console.log(result))
  //     .catch(errorMsg => console.log(errorMsg));
  // };
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
  const [heart, setheart] = useState(true);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate('BlogDetail')}
      style={styles.blogBox}>
      <Image source={image} style={styles.blogimg} />
      <TouchableOpacity onPress={share} style={styles.sharebox}>
        <Image source={icons.share} style={styles.share} />
      </TouchableOpacity>
      <View style={styles.row}>
        <Image source={icons.eye} style={styles.eye} />
        <Text style={styles.eyerighttext}>{review}</Text>

        <TouchableOpacity
          style={styles.heartbox}
          onPress={() => setheart(!heart)}>
          {!heart ? (
            <Image
              source={icons.heart}
              style={[styles.heart, {tintColor: COLORS.primary}]}
            />
          ) : (
            <Image source={icons.heart} style={styles.heart} />
          )}
        </TouchableOpacity>
      </View>
      <Text numberOfLines={2} style={styles.blogContain}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BlogCart;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: width * 0.01,
  },
  blogBox: {
    width: width * 0.46,
    borderWidth: 1,
    borderColor: COLORS.gray10,
    marginVertical: height * 0.01,
    borderRadius: 6,
  },
  blogimg: {
    width: width * 0.46,
    height: height * 0.2,
    resizeMode: 'stretch',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    alignSelf: 'center',
  },
  sharebox: {
    width: width * 0.1,
    height: height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  heartbox: {
    width: width * 0.1,
    height: height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },
  share: {
    width: width * 0.06,
    height: height * 0.03,
    resizeMode: 'contain',
  },
  eye: {
    width: width * 0.06,
    height: height * 0.03,
    resizeMode: 'contain',
  },
  eyerighttext: {
    fontSize: width * 0.03,
    ...FONTS.fiveHundred,
    color: COLORS.gray60,
    marginBottom: -3,
    width: width * 0.26,
    paddingLeft: width * 0.012,
  },
  blogContain: {
    fontSize: width * 0.032,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    paddingHorizontal: width * 0.014,
    height: height * 0.05,
  },
  heart: {
    width: width * 0.04,
    height: height * 0.02,
    resizeMode: 'contain',
  },
});
