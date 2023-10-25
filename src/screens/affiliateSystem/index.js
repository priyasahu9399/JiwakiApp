import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  Clipboard,
} from 'react-native';
import {COLORS, FONTS, data, SIZES, images, icons} from '../../constants';
import styles from './styles';
import Loader from './../../component/modalLoading/index';
import ButtonCustom from './../../component/Button/index';
import Filter from './../filter/index';
import DropdownComponent from './../../component/dropdown/index';
import {LineChart} from 'react-native-chart-kit';
const {height, width} = Dimensions.get('window');

const datalist = [
  {label: 'Jan', value: '0'},
  {label: 'feb', value: '1'},
  {label: 'march', value: '2'},
];
const monthlist = [
  {label: 'Jan', value: '0'},
  {label: 'feb', value: '1'},
  {label: 'march', value: '2'},
];
const productlist = [
  {label: 'hair', value: '0'},
  {label: 'makeup', value: '1'},
  {label: 'beauty', value: '2'},
  {label: 'baby', value: '3'},
];
const Payment = ({keyvalue, user, amount, orderid}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.number}>{keyvalue}</Text>
      <Text style={styles.date}>{user}</Text>
      <Text style={styles.rupee}>₹{amount}</Text>
      <Text style={styles.pymt_name}>{orderid}</Text>
    </View>
  );
};
const AffiliateSystem = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [month, setMonth] = useState(false);
  const [product, setProduct] = useState(false);

  const [copiedText, setCopiedText] = useState(
    'https://www.jiwaki.in/Product/product_details/4545/activated-charcoal-bath-soap-with-coconut-olive-oil-no-chemical-no-anima....',
  );

  const copyToClipboard = () => {
    Clipboard.setString(copiedText);
    console.log('copiedText copy', copiedText);
  };
  const chartConfig = {
    backgroundGradientFrom: 'white',
    // backgroundGradientFromOpacity: 0,
    backgroundGradientTo: 'white',
    // backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(128, 124, 124, ${opacity})`,
    getDotColor: (opacity = 1) => `rgba(128, 124, 124, ${opacity})`,
    strokeWidth: 2,
    // barPercentage: 0.5,
    // useShadowColorFromDataset: false, // optional
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.pymtbox}>
          <View style={styles.urlbox}>
            <Text style={styles.url}>{copiedText} </Text>
          </View>
          <View style={styles.btnrow}>
            <ButtonCustom
              children="Share"
              iconbtn
              btnStyle={{marginRight: width * 0.03}}
            />
            <ButtonCustom
              children="Copy url"
              smallmediumbtn
              onPress={() => copyToClipboard()}
            />
          </View>
        </View>

        <View style={styles.row}>
          <Text style={[styles.pymthist, {fontSize: width * 0.03}]}>
            Affiliate System
          </Text>
          <DropdownComponent
            data={monthlist}
            onChange={item => setMonth(item?.value)}
            placeholder="month"
            size={16}
            placestyle={{fontSize: width * 0.027}}
            dropdownStyle={{
              width: width * 0.2,
              height: height * 0.035,
              marginTop: height * 0.02,
            }}
          />
          <DropdownComponent
            data={productlist}
            onChange={item => setProduct(item?.value)}
            placeholder="Choose product"
            size={16}
            placestyle={{fontSize: width * 0.026}}
            dropdownStyle={styles.productdrop}
          />
          <ButtonCustom
            children="Filter"
            smallmediumbtn
            btnStyle={{width: width * 0.18, height: height * 0.035}}
            onPress={() => navigation.navigate('Filter')}
          />
        </View>
        <LineChart
          data={{
            labels: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'June',
              'July',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            datasets: [
              {
                data: [0, 100, 200, 300, 400],
              },
            ],
          }}
          width={width}
          height={256}
          verticalLabelRotation={0}
          chartConfig={chartConfig}
          bezier
        />
        <Text style={styles.pymthist}>Affiliate Earning History</Text>
        <View style={styles.pymtbox}>
          <View style={styles.heshrow}>
            <Text style={styles.hesh}>#</Text>
            <Text style={styles.heshdate}>Referral User</Text>
            <Text style={styles.heshrupee}>Amount</Text>
            <Text style={styles.heshpymt_name}>Order Id</Text>
          </View>

          {data.affiliateearning?.map((item, index) => (
            <Payment
              keyvalue={item.keyvalue}
              user={item.user}
              amount={item.amount}
              orderid={item.orderid}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default AffiliateSystem;
