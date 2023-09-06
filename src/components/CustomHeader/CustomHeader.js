import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Icons} from '../../assets';
import styling from './CustomHeaderStyle';

const CustomHeader = ({
  backButton = true,
  headerTitle,
  headerTitleStyle,
  backBtnStyle,
  headerStyle,
  onPressBack,
  theme,
}) => {
  const styles = styling(theme);

  return (
    <View style={[styles.defaultHeaderStyle]}>
      {backButton ? (
        <TouchableOpacity onPress={onPressBack}>
          <Image
            source={Icons.back}
            style={[styles.defaultBackBtnStyle, backBtnStyle]}
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}
      {headerTitle ? (
        <View style={styles.centerView}>
        <Text style={[styles.defaultHeaderTitleStyle, headerTitleStyle]}>
          {headerTitle}
        </Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default CustomHeader;
