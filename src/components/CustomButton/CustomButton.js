import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styling from './CustomButtonStyle';

const CustomButton = ({
  buttonStyle,
  buttonTitleStyle,
  buttonTitle,
  onBtnPress,
  buttonActiveOpacity,
  buttonDisable,
  theme,
}) => {
  const styles = styling(theme);

  return (
    <TouchableOpacity
      disabled={buttonDisable ?? false}
      style={[styles.defaultButtonStyle, buttonStyle]}
      onPress={onBtnPress}
      activeOpacity={buttonActiveOpacity ?? 0.2}>
      <Text style={[styles.defaultTextStyle, buttonTitleStyle]}>
        {buttonTitle ?? 'Press Here'}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
