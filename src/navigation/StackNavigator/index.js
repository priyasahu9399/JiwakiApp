import React, {useState} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import TabNavigator from '../BottomTabNavigator';
import BottomTab from './../BottomTabNavigator';
import {COLORS, icons} from '../../constants';
import styles from './styles';
import BlogDetail from './../../screens/blogDetail';
import AddAddress from './../../screens/addAddress';
import DeliveryAddress from './../../screens/addressDelivery';
import PaymentHistory from './../../screens/paymentHistory';
import ProductDetail from './../../screens/productDetail';
import PromoCode from './../../screens/promocode';
import PrivacyPolicy from './../../screens/privacypolicy';
import TermCondition from './../../screens/termcondition';
import ReturnPolicy from './../../screens/returnpolicy';
import SupportPolicy from './../../screens/supportpolicy';
import Review from './../../screens/review';
import Notification from './../../screens/notification';
import Payment from './../../screens/Payment';
import PaymentFail from './../../screens/paymentfail';
import RechargeSuccess from './../../screens/rechargeSuccess/index';
import WithDrawRequest from './../../screens/withdrawrequest/index';
import RechargeWallet from './../../screens/rechargeWallet/index';
import Affiliate from './../../screens/affiliate/index';
import Filter from './../../screens/filter/index';
import ShareOpinion from './../../screens/shareOpinion/index';
import FAQ from './../../screens/FAQ/index';
import Membership from './../../screens/membership/index';
import MemberShipBuy from './../../screens/membershipPymt/index';
import Favorite from './../../screens/favorite/index';
import About from './../../screens/about/index';
import ContactUs from './../../screens/contactUs/index';
import Order from './../../screens/order/index';
import AffiliateSystem from './../../screens/affiliateSystem/index';
import Product from './../../screens/product/index';
import Search from "./../../screens/search/index";

const Stack = createStackNavigator();

const StackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      // initialRouteName="Review"
      screenOptions={{
        headerTitleStyle: styles.headerTitle,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: styles.headerstyle,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="BottomTab"
        component={BottomTab}
      />
      <Stack.Screen
        name="BlogDetail"
        component={BlogDetail}
        options={{
          title: 'Blog Detail',
        }}
      />
      <Stack.Screen
        name="AddAddress"
        component={AddAddress}
        options={{
          title: 'Add Address',
        }}
      />
      <Stack.Screen
        name="DeliveryAddress"
        component={DeliveryAddress}
        options={{
          title: 'Delivery Address',
        }}
      />
      <Stack.Screen
        options={{
          title: 'Payment History',
        }}
        name="PaymentHistory"
        component={PaymentHistory}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: 'Product Detail',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      <Stack.Screen
        name="PromoCode"
        component={PromoCode}
        options={{
          title: 'Promo Code',
        }}
      />
      <Stack.Screen
        options={{
          title: 'Privacy Policy',
        }}
        name="PrivacyPolicy"
        component={PrivacyPolicy}
      />
      <Stack.Screen
        options={{
          title: 'Term Condition',
        }}
        name="TermCondition"
        component={TermCondition}
      />
      <Stack.Screen
        options={{
          title: 'Support Policy',
        }}
        name="SupportPolicy"
        component={SupportPolicy}
      />
      <Stack.Screen
        options={{
          title: 'Return Policy',
        }}
        name="ReturnPolicy"
        component={ReturnPolicy}
      />
      <Stack.Screen
        name="PaymentFail"
        component={PaymentFail}
        options={{
          title: 'Payment Method',
        }}
      />
      <Stack.Screen
        name="RechargeSuccess"
        component={RechargeSuccess}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WithDrawRequest"
        component={WithDrawRequest}
        options={{
          title: 'Wallet Withdraw Request',
        }}
      />
      <Stack.Screen
        name="RechargeWallet"
        component={RechargeWallet}
        options={{
          title: 'Recharge Wallet',
        }}
      />
      <Stack.Screen
        name="ShareOpinion"
        component={ShareOpinion}
        options={{
          title: 'Share your opinion',
        }}
      />
      <Stack.Screen
        name="Membership"
        component={Membership}
        options={{
          title: 'Membership',
        }}
      />
      <Stack.Screen
        name="MemberShipBuy"
        component={MemberShipBuy}
        options={{
          title: 'Buy Membership',
        }}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          title: 'Contact Us',
        }}
      />
      <Stack.Screen
        options={{
          title: 'Affiliate System',
        }}
        name="AffiliateSystem"
        component={AffiliateSystem}
      />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Affiliate" component={Affiliate} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Search" component={Search} />

      {/*   
      <Stack.Screen
        options={{
          title: 'Result',
        }}
        name="ResultSelfAssessment"
        component={ResultSelfAssessment}
      />
      <Stack.Screen
        options={{
          title: 'Order Buy',
        }}
        name="OrderBuy"
        component={OrderBuy}
      />
      <Stack.Screen
        name="OrderConfirm"
        component={OrderConfirm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{
          title: 'Order History',
        }}
      />
      
      <Stack.Screen
        name="AffiliateCreate"
        component={AffiliateCreate}
        options={{
          title: 'Add Affiliate',
        }}
      />
      <Stack.Screen name="Testimonial" component={Testimonial} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="Result" component={Result} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
