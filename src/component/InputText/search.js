import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES, icons} from '../../constants';

const {width, height} = Dimensions.get('window');

const SearchBox = ({
  placeholder,
  searchStyle,
  editable,
  onPressfilter,
  disabled,
  onPresssearch,
  disabledfilter,
  onChangeText,
  value,
  filter,
  autoFocus,
  onPressToggle,
  toggle,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPresssearch}
      activeOpacity={0.6}
      style={[styles.searchbox, searchStyle]}>
      {toggle ? (
        ''
      ) : (
        <TouchableOpacity onPress={onPressToggle}>
          <Image source={icons.toggle} style={styles.toggle} />
        </TouchableOpacity>
      )}
      <TextInput
        editable={editable}
        placeholder={'Search here..'}
        style={[
          styles.searchinput,
          toggle && {
            width: width * 0.76,
            marginLeft: width * 0.05,
          },
        ]}
        placeholderTextColor={COLORS.gray80}
        onChangeText={onChangeText}
        value={value}
        autoFocus={autoFocus}
      />
      <Image source={icons.search} style={styles.search} />
    </TouchableOpacity>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchbox: {
    height: height * 0.057,
    width: width * 0.84,
    marginVertical: height * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: COLORS.gray10,
    borderColor: COLORS.gray30,
    marginLeft: width * -0.012,
  },
  toggle: {
    height: height * 0.03,
    width: width * 0.06,
    marginHorizontal: width * 0.04,
    resizeMode: 'contain',
    tintColor: COLORS.gray80,
  },
  search: {
    height: height * 0.03,
    width: width * 0.06,
    marginHorizontal: width * 0.02,
    resizeMode: 'contain',
    tintColor: COLORS.gray80,
  },

  searchinput: {
    width: width * 0.57,
    fontFamily: FONTS.medium,
    fontSize: 14,
    marginBottom: -3,
  },
});
