import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, data, icons, images} from '../../constants';
import {connect} from 'react-redux';
import styles from './styles';

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
          <Text style={styles.faqsubtext}>{subtext}</Text>
        </View>
      </Collapsible>
    </View>
  );
};

const FAQ = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View style={styles.innercontainer}>
        <CollapsibleFaq
          title="Are Jiwaki Products safe to use ?"
          subtext="Lorem ipsum dolor sit amet consectetur adipiscing  Lorem ipsum dolor sit amet consectetur adipiscingLorem ipsum dolor sit amet consectetur adipiscingLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellusLorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus"
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

        <View style={styles.bottombox}>
          <View style={styles.row}>
            <Text style={styles.title1}>Don’t want to chat? Write to us</Text>
            <Text style={styles.title2}>
              75% customers prefer to chat over mail to get faster resolutions!
            </Text>
            <TouchableOpacity>
              <Text style={styles.sendqry}>Send Query</Text>
            </TouchableOpacity>
          </View>
          <Image source={images.girl2} style={styles.girl} />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);
