import React, {useEffect} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images, icons} from '../../constants';
import {COLORS, SIZES} from './../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Home from './../../screens/home/index';
import Explore from './../../screens/explore/index';
import Blog from './../../screens/Blog/index';
import Profile from './../../screens/profile/index';
import Cart from './../../screens/Cart/index';

const {height, width} = Dimensions.get('window');

const Tab = createBottomTabNavigator();
const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: styles.headerTitle,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tableBar,
        tabBarLabelStyle: styles.tablebal,
        headerStyle: styles.headerstyle,
        tabBarLabel: '',
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}
              activeOpacity={0.6}>
              {/* <View style={styles.countbox}>
                <Text style={styles.count}>0</Text>
              </View> */}
              <Image source={icons.notify} style={styles.bell} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={icons.home}
                style={[
                  styles.icon_set,
                  {tintColor: focused ? COLORS.primary : COLORS.gray60},
                ]}
              />
              <Text
                style={[
                  styles.tablebal,
                  {color: focused ? COLORS.primary : COLORS.gray60},
                ]}>
                Home
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}
              activeOpacity={0.6}>
              {/* <View style={styles.countbox}>
                <Text style={styles.count}>0</Text>
              </View> */}
              <Image source={icons.notify} style={styles.bell} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={icons.explore}
                style={[
                  styles.icon_set,
                  {tintColor: focused ? COLORS.primary : COLORS.gray60},
                ]}
              />
              <Text
                style={[
                  styles.tablebal,
                  {color: focused ? COLORS.primary : COLORS.gray60},
                ]}>
                Explore
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={icons.cart}
                style={[
                  styles.icon_set,
                  {
                    tintColor: focused ? COLORS.primary : COLORS.gray60,
                    width: SIZES.width * 0.06,
                  },
                ]}
              />
              <Text
                style={[
                  styles.tablebal,
                  {color: focused ? COLORS.primary : COLORS.gray60},
                ]}>
                Cart
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Blog"
        component={Blog}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}
              activeOpacity={0.6}>
              {/* <View style={styles.countbox}>
                <Text style={styles.count}>0</Text>
              </View> */}
              <Image source={icons.notify} style={styles.bell} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={icons.blog}
                style={[
                  styles.icon_set,
                  {
                    tintColor: focused ? COLORS.primary : COLORS.gray60,
                  },
                ]}
              />
              <Text
                style={[
                  styles.tablebal,
                  {color: focused ? COLORS.primary : COLORS.gray60},
                ]}>
                Blog
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={icons.profile}
                style={[
                  styles.icon_set,
                  {tintColor: focused ? COLORS.primary : COLORS.gray60},
                ]}
              />
              <Text
                style={[
                  styles.tablebal,
                  {color: focused ? COLORS.primary : COLORS.gray60},
                ]}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BottomTab);
