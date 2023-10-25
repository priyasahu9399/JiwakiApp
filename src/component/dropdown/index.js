import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS, FONTS, SIZES} from './../../constants/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const {height, width} = Dimensions.get('window');

const DropdownComponent = ({
  data,
  placeholder,
  dropdownStyle,
  containStyle,
  onChange,
  placestyle,
  size,
}) => {
  // const [value, setValue] = useState(null);

  return (
    <View>
      <Dropdown
        style={[styles.dropdown, dropdownStyle]}
        containerStyle={[styles.containerStyle, containStyle]}
        placeholderStyle={[styles.placeholderStyle, placestyle]}
        // iconStyle={styles.iconStyle}
        itemTextStyle={styles.itemTextStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        showsVerticalScrollIndicator={false}
        maxHeight={180}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        onChange={onChange}
        renderRightIcon={() => (
          <FontAwesome name="angle-down" size={size} color={COLORS.gray70} />
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: height * 0.056,
    width: width * 0.94,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingHorizontal: width * 0.03,
    borderWidth: 1,
    borderColor: COLORS.gray20,
    alignSelf: 'center',
    marginBottom: height * 0.015,
  },
  selectedTextStyle: {
    color: COLORS.black,
    fontSize: width * 0.03,
    ...FONTS.fiveHundred,
  },
  containerStyle: {
    borderRadius: 8,
    backgroundColor: COLORS.white,
  },
  itemTextStyle: {
    color: COLORS.black,
    fontSize: width * 0.03,
    ...FONTS.fiveHundred,
    marginVertical: height * -0.01,
  },
  placeholderStyle: {
    ...FONTS.fiveHundred,
    fontSize: width * 0.03,
    color: COLORS.gray60,
  },
});
