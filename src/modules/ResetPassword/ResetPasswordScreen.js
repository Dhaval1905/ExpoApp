import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View,Image} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { CustomButton, CustomHeader } from '../../components';
import { navigationStrings, Strings } from '../../constants';
import { forgotPassWord } from '../../redux/actions/ach';
import { showLoader } from '../../redux/actions/user';
import { Colors } from '../../theme';
import styling from './ResetPasswordStyle';
import { Icons } from '../../assets';

const ResetPasswordScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const resetPassword = Strings.resetPassword?.replace('?', '');
  const onPressHeaderBack = () => {
    navigation.goBack();
  };


  const validation = () => {
    let isValid = false
    if (email.length === 0) {
      isValid = true
      setEmailError('Please enter an email.')
    }
    return isValid
  }
  const onLogin = async () => {
    if (!validation()) {
      await dispatch(showLoader(true))
      // await setToken(APP_TOKEN)
      let data = {
        email_or_phone: email,
      }
      let reset_response = await forgotPassWord(data)
      console.log('------res', reset_response?.data)
      await dispatch(showLoader(false))
      if (reset_response?.data?.status === 1) {
        navigation.navigate(navigationStrings.OTPVERIFY, { verification_code: reset_response?.data?.verification_code, email: email })
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
      <CustomHeader
        theme={theme}
        // headerTitle={resetPassword}
        headerTitleStyle={styles.headerTitle}
        headerStyle={styles.header}
        onPressBack={onPressHeaderBack}
      />
      <View style={styles.container}>
      <View style={styles.applogoParent}>
            <Image source={Icons.appLogo} style={styles.appLogo} resizeMode='contain' />
            <Text style={styles.loginStyle}>{'Reset \nPassword'}</Text>
          </View>
        <View style={styles.card}>
          <Text style={styles.emailQuestion}>{Strings.emailQuestion}</Text>
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
        </View>
        <View style={styles.ConfirmParent}>
          <CustomButton
            theme={theme}
            onBtnPress={() => onLogin()}
            buttonTitle={Strings.confirm}
            buttonStyle={styles.confirmBtn}
            buttonTitleStyle={styles.confirmText}
          />
        </View>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;
