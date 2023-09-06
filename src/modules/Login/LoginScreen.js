import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Linking
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { Icons } from '../../assets';
import { CustomButton, CustomHeader } from '../../components';
import { navigationStrings, Strings } from '../../constants';
import { setToken } from '../../httpClient/ClientHelper';
import { getAccountInfo, logIn, showLoader } from '../../redux/actions/user';
import { Colors, isIos } from '../../theme';
import { APP_TOKEN } from '../../utils/constant';
import styling from './LoginStyle';
import { showMessage, hideMessage } from "react-native-flash-message";

const LoginScreen = (props) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const dispatch = useDispatch()
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const onPressHeaderback = () => {
    props.navigation.goBack();
  };

  const onPressResetPassword = () => {
    props.navigation.navigate(navigationStrings.RESETPASSWORD);
  };

  const validation = () => {
    let isValid = false
    if (email.length === 0) {
      isValid = true
      setEmailError('Please enter an email.')
    }
    if (password.length === 0) {
      isValid = true
      setPasswordError('Please enter a password.')
    }
    return isValid
  }

  const onLogin = async () => {
    if (!validation()) {
      await dispatch(showLoader(true))
      // await setToken(APP_TOKEN)
      let data = {
        email: email.toLowerCase(),
        password: password,
        device_type: Platform.OS === 'android' ? 2 : 1,
        device_token: "fef"
      }
      let login_res = await dispatch(logIn(data))
      // await dispatch(getAccountInfo())
      await dispatch(showLoader(false))
      if (login_res?.data?.status === 1) {
        props.navigation.navigate(navigationStrings.OTPVERIFYLOGIN)
      } else if (login_res?.data?.status === 2) {
        showMessage({
          message: `${login_res?.data?.message}`,
          type: "danger",
        });
        setTimeout(() => {
          Linking.openURL(login_res?.data?.redirectUrl)
        }, 300);
      }
      else {
        showMessage({
          message: `${login_res?.data?.message}`,
          type: "danger",
        });
      }
    }
  }

  return (
    <View style={styles.screen}>
    <KeyboardAvoidingView
      behavior={isIos ? 'padding' : 'height'}
      style={{ flex: 1 }}>
        <CustomHeader theme={theme} onPressBack={onPressHeaderback} />
        <View style={styles.container}>
          <View style={styles.applogoParent}>
            <Image source={Icons.appLogo} style={styles.appLogo} resizeMode='contain' />
            <Text style={styles.loginStyle}>LOGIN NOW</Text>
          </View>
          <TextInput
            mode={'outlined'}
            theme={{ roundness: 45, }} 
            label={Strings.email}
            style={styles.textInput}
            activeOutlineColor={Colors[theme]?.black}
            value={email}
            onChangeText={(text) => {
              setEmailError('')
              setEmail(text)
            }}
          />
          {emailError?.length > 0 && (
            <Text style={styles.errorText}>
              {emailError}
            </Text>
          )}
          <TextInput
            secureTextEntry={!passwordVisible}
            theme={{ roundness: 45 }} 
            mode={'outlined'}
            label={Strings.password}
            style={styles.textInput}
            activeOutlineColor={Colors[theme]?.black}
            value={password}
            onChangeText={(text) => {
              setPasswordError('')
              setPassword(text)
            }}
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
          {passwordError?.length > 0 && (
            <Text style={styles.errorText}>
              {passwordError}
            </Text>
          )}
          <CustomButton
            theme={theme}
            onBtnPress={() => onLogin()}
            buttonTitle={Strings.login}
            buttonStyle={styles.loginBtn}
            buttonTitleStyle={styles.loginText}
          />
          <TouchableOpacity onPress={onPressResetPassword}>
            <Text style={styles.resetPassword}>{Strings.resetPassword}</Text>
          </TouchableOpacity>
          <View style={styles.applyNowParent}>
            <Text style={styles.newToRethink}>{Strings.newToRethink}</Text>
            <TouchableOpacity onPress={() => Linking.openURL('http://dev.rethinkfi.com/signup')}>
              <Text style={styles.applyNow}>
                {Strings.applyNow?.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </KeyboardAvoidingView>
      </View>
  );
};

export default LoginScreen;
