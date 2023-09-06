import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, moderateScale} from '../../theme';
import styling from './ModalButtonStyle';

const ModalButton = ({
  buttonLable,
  buttonValue,
  onPressButton,
  height,
  width,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  theme,
  showArrow
}) => {
  const styles = styling(theme);

  return (
    <TouchableOpacity
      onPress={onPressButton}
      style={[{height, width, marginTop, marginBottom, marginRight, marginLeft},{flexDirection:'row',zIndex:1}]}>
      <TextInput
        disabled
        mode={'outlined'}
        theme={{ roundness: 45 }} 
        label={buttonLable}
        value={buttonValue}
        activeOutlineColor={Colors[theme]?.black}
        style={[styles.buttonBackground, {height, width}]}
      />
      {showArrow &&<View style={styles.dropdownParent}>
        <Icon
          name={'chevron-down'}
          size={moderateScale(24)}
          color={Colors[theme]?.grey400}
        />
      </View>}
    </TouchableOpacity>
  );
};

export default ModalButton;
