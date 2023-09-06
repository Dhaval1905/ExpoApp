import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { CustomButton, CustomHeader } from '../../components';
import { navigationStrings, Strings } from '../../constants';
import { resetPassword } from '../../redux/actions/ach';
import { showLoader } from '../../redux/actions/user';
import { Colors } from '../../theme';
import styling from './ConfirmPasswordStyle';

const ConfirmPasswordScreen = ({ navigation }) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validation = () => {
    let isValid = false
    if (password.length === 0) {
      isValid = true
      setPasswordError('Please enter password.')
    }
    if (confirmPassword.length === 0) {
      isValid = true
      setConfirmPasswordError('Please enter confirm password.')
    }
    if (confirmPassword !== password) {
      isValid = true
      setConfirmPasswordError('Password and Confirm password should be match.')
    }
    return isValid
  }

  const onLogin = async () => {
    if (!validation()) {
      await dispatch(showLoader(true))
      // await setToken(APP_TOKEN)
      let data = {
        email_or_phone: route?.params?.email,
        new_password: password
      }
      let reset_response = await resetPassword(data)
      // await dispatch(getAccountInfo())
      await dispatch(showLoader(false))
      if (reset_response?.data?.status === 1) {
        navigation.navigate(navigationStrings.AUTHSTACK)
      } else {
        showMessage({
          message: `${reset_response?.data?.message}`,
          type: "danger",
        });
      }
    }
  }

  return (
    <View style={styles.screen}>
      <CustomHeader theme={theme} onPressBack={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.card}>
            <TextInput
              secureTextEntry={!passwordVisible}
              mode={'outlined'}
              label={Strings.password}
              style={styles.textInput}
              activeOutlineColor={Colors[theme]?.black}
              onChangeText={(text) => setPassword(text)}
              right={
                passwordVisible ? (
                  <TextInput.Icon
                    name={'eye-off'}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                  />
                ) : (
                  <TextInput.Icon
                    name={'eye'}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                  />
                )
              }
            />
            <TextInput
              secureTextEntry={!passwordVisible1}
              mode={'outlined'}
              label={Strings.confirm.toUpperCase() + " " + Strings.password}
              style={styles.textInput}
              activeOutlineColor={Colors[theme]?.black}
              onChangeText={(text) => setConfirmPassword(text)}
              right={
                passwordVisible1 ? (
                  <TextInput.Icon
                    name={'eye-off'}
                    onPress={() => setPasswordVisible1(!passwordVisible)}
                  />
                ) : (
                  <TextInput.Icon
                    name={'eye'}
                    onPress={() => setPasswordVisible1(!passwordVisible)}
                  />
                )
              }
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.ConfirmParent}>
        <CustomButton
          theme={theme}
          onBtnPress={() =>onLogin()}
          buttonTitle={Strings.confirm}
          buttonStyle={styles.confirmBtn}
          buttonTitleStyle={styles.confirmText}
        />
      </View>
    </View>
  );
};

export default ConfirmPasswordScreen;
