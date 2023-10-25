import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
const {height, width} = Dimensions.get('window');

const DrawerList = ({
  icon,
  title,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
  subtitle5,
  subtitle6,
  subtitle7,
  subtitle8,
  subtitle9,
  term,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  iconstyle,
}) => {
  const [isCollapsed, setCollapsed] = useState(true);

  return (
    <>
      <TouchableOpacity
        onPress={() => setCollapsed(!isCollapsed)}
        style={[
          styles.collapsbox,
          !isCollapsed == true && {
            backgroundColor: COLORS.lightorange,
          },
        ]}>
        <View style={styles.row}>
          <Image
            source={icon}
            style={[
              styles.collapsimg,
              iconstyle,
              !isCollapsed == true && {
                tintColor: COLORS.primary,
              },
            ]}
          />
          <Text
            style={[
              styles.collapstitle,
              !isCollapsed == true && {
                color: COLORS.primary,
              },
            ]}>
            {title}
          </Text>
        </View>
        <Image
          source={icons.D_arrow}
          style={[
            styles.arrow,
            !isCollapsed == true && {
              tintColor: COLORS.primary,
            },
          ]}
        />
      </TouchableOpacity>

      {term ? (
        <Collapsible collapsed={isCollapsed}>
          <View
            style={{marginHorizontal: width * 0.04, marginTop: height * 0.025}}>
            {subtitle1 && (
              <TouchableOpacity style={styles.row}>
                <Image source={icon1} style={styles.collapsimg} />
                <Text style={styles.collapsubtitle}>{subtitle1}</Text>
              </TouchableOpacity>
            )}
            {subtitle2 && (
              <TouchableOpacity style={styles.row}>
                <Image source={icon2} style={styles.collapsimg} />
                <Text style={styles.collapsubtitle}>{subtitle2}</Text>
              </TouchableOpacity>
            )}
            {subtitle3 && (
              <TouchableOpacity style={styles.row}>
                <Image source={icon3} style={styles.collapsimg} />
                <Text style={styles.collapsubtitle}>{subtitle3}</Text>
              </TouchableOpacity>
            )}
            {subtitle4 && (
              <TouchableOpacity style={styles.row}>
                <Image source={icon4} style={styles.collapsimg} />
                <Text style={styles.collapsubtitle}>{subtitle4}</Text>
              </TouchableOpacity>
            )}
            {subtitle5 && (
              <TouchableOpacity style={styles.row}>
                <Image source={icon5} style={styles.collapsimg} />
                <Text style={styles.collapsubtitle}>{subtitle5}</Text>
              </TouchableOpacity>
            )}
            {subtitle6 && (
              <TouchableOpacity style={styles.row}>
                <Image source={icon6} style={styles.collapsimg} />
                <Text style={styles.collapsubtitle}>{subtitle6}</Text>
              </TouchableOpacity>
            )}
            {subtitle7 && (
              <TouchableOpacity style={styles.row}>
                <Image source={icon7} style={styles.collapsimg} />
                <Text style={styles.collapsubtitle}>{subtitle7}</Text>
              </TouchableOpacity>
            )}
            {subtitle8 && (
              <TouchableOpacity style={styles.row}>
                <Image source={icon8} style={styles.collapsimg} />
                <Text style={styles.collapsubtitle}>{subtitle8}</Text>
              </TouchableOpacity>
            )}
          </View>
        </Collapsible>
      ) : (
        <Collapsible collapsed={isCollapsed}>
          <View
            style={styles.drawerborder}>
            {subtitle1 && (
              <TouchableOpacity>
                <Text style={styles.collapsubtitle}>{subtitle1}</Text>
              </TouchableOpacity>
            )}
            {subtitle2 && (
              <TouchableOpacity>
                <Text style={styles.collapsubtitle}>{subtitle2}</Text>
              </TouchableOpacity>
            )}
            {subtitle3 && (
              <TouchableOpacity>
                <Text style={styles.collapsubtitle}>{subtitle3}</Text>
              </TouchableOpacity>
            )}
            {subtitle4 && (
              <TouchableOpacity>
                <Text style={styles.collapsubtitle}>{subtitle4}</Text>
              </TouchableOpacity>
            )}
          </View>
        </Collapsible>
      )}
    </>
  );
};

const DrawerScreen = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.logoBox}>
        <Image source={images.logo} style={styles.bglogo} />
      </View>
      <TouchableOpacity onPress={() => navigation?.closeDrawer()}>
        <Image source={icons.x} style={styles.cross} />
      </TouchableOpacity>
      <Image source={images.logo} style={styles.logo} />
      <DrawerList
        icon={icons.hair}
        title="Hair"
        subtitle1="Sampoo"
        subtitle2="Conditionar"
      />
      <DrawerList
        icon={icons.makeup}
        title="Makeup"
        subtitle1="cream"
        subtitle2="loation"
      />
      <DrawerList
        icon={icons.face2}
        title="Beauty"
        subtitle1="powder"
        subtitle2="kajal"
      />
      <DrawerList
        icon={icons.baby}
        title="Baby"
        subtitle1="baby shop"
        subtitle2="baby loation"
        subtitle3="baby cream"
      />
      <DrawerList
        icon={icons.face}
        title="Face"
        subtitle1="face product"
        subtitle2="face wash"
        subtitle3="loation"
        subtitle4="cream"
      />
      <DrawerList
        icon={icons.blog}
        iconstyle={{width: width * 0.05}}
        title="Blog"
        subtitle1="ALL Blog"
        subtitle2="Blog cart"
      />
      <DrawerList icon={icons.member} title="Membership" subtitle1="member" />
      <DrawerList
        icon={icons.privacy}
        title="Term & Condition"
        term
        icon1={icons.privacy}
        icon2={icons.term}
        icon3={icons.returnicon}
        icon4={icons.support}
        icon5={icons.member}
        icon6={icons.contact}
        icon7={icons.term}
        icon8={icons.faq}
        subtitle1="Privacy Policy"
        subtitle2="Term & Condition"
        subtitle3="Return Policy"
        subtitle4="Support Policy"
        subtitle5="Buy Membership"
        subtitle6="Contact Us"
        subtitle7="About Us"
        subtitle8="FAQ"
      />
    </ScrollView>
  );
};
export default DrawerScreen;
