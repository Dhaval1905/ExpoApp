import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { CustomButton, CustomHeader } from '../../components';
import { Strings } from '../../constants';
import { Colors, moderateScale, verticalScale } from '../../theme';
import styling from './ChangePasswordStyle';
import Entypo from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import { showLoader } from '../../redux/actions/user';
import { useDispatch } from 'react-redux';
import { changePassWord } from '../../redux/actions/ach';

const ChangePasswordScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const dispatch = useDispatch()
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState('')
  const [oldPasswordError, setOldPasswordError] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordError, setNewPasswordError] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const validation = () => {
    let isValid = false
    if (oldPassword.length === 0) {
      isValid = true
      setOldPasswordError('Please enter current password.')
    }
    if (newPassword.length === 0) {
      isValid = true
      setNewPasswordError('Please enter new password.')
    }
    if (confirmPassword.length === 0) {
      isValid = true
      setConfirmPasswordError('Please enter confirm password.')
    }
    if (confirmPassword.length !== 0 && (newPassword !== confirmPassword)) {
      isValid = true
      setConfirmPasswordError('new password and confirm password must be same.')
    }
    return isValid
  }

  const onLogin = async () => {
    if (!validation()) {
      await dispatch(showLoader(true))
      // await setToken(APP_TOKEN)
      let data = {
        old_password: oldPassword,
        new_password: newPassword,
        confirm_password: confirmPassword
      }
      let login_res = await changePassWord(data)
      // await dispatch(getAccountInfo())
      await dispatch(showLoader(false))
      if (login_res?.data?.status === 1) {
        navigation.goBack()
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
      <CustomHeader
        theme={theme}
        headerTitle={"Change Password"}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <ScrollView>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
              style={{ flex: 1 }}
              enabled>
              <TextInput
                secureTextEntry={!passwordVisible}
                mode={'outlined'}
                theme={{roundness:45}}
                label={"CURRENT PASSWORD"}
                style={styles.textInput}
                activeOutlineColor={Colors[theme]?.black}
                onChangeText={(text) => {
                  setOldPassword(text)
                  setOldPasswordError('')
                }}
                right={
                  !passwordVisible ? (
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
              {oldPasswordError?.length > 0 && (
                <Text style={styles.errorText}>
                  {oldPasswordError}
                </Text>
              )}
              <TextInput
                secureTextEntry={!newPasswordVisible}
                mode={'outlined'}
                theme={{roundness:45}}
                label={Strings.newPassword?.toUpperCase()}
                style={styles.textInput}
                activeOutlineColor={Colors[theme]?.black}
                onChangeText={(text) => {
                  setNewPassword(text)
                  setNewPasswordError('')
                }}
                right={
                  !newPasswordVisible ? (
                    <TextInput.Icon
                      name={'eye-off'}
                      onPress={() => setNewPasswordVisible(!newPasswordVisible)}
                    />
                  ) : (
                    <TextInput.Icon
                      name={'eye'}
                      onPress={() => setNewPasswordVisible(!newPasswordVisible)}
                    />
                  )
                }
              />
              {newPasswordError?.length > 0 && (
                <Text style={styles.errorText}>
                  {newPasswordError}
                </Text>
              )}
              <View style={styles.passwordInstructionParent}>
                <Entypo
                  name={'checkmark-circle'}
                  size={moderateScale(22)}
                  color={Colors[theme]?.green901}
                />
                <Text style={styles.passwordInstruction}>
                  {Strings.mustLetter}
                </Text>
              </View>
              <View style={styles.passwordInstructionParent}>
                <Entypo
                  name={'checkmark-circle'}
                  size={moderateScale(22)}
                  color={Colors[theme]?.green901}
                />
                <Text style={styles.passwordInstruction}>
                  {Strings.mustNumber}
                </Text>
              </View>
              <View style={styles.passwordInstructionParent}>
                <Entypo
                  name={'checkmark-circle'}
                  size={moderateScale(22)}
                  color={Colors[theme]?.green901}
                />
                <Text style={styles.passwordInstruction}>
                  {Strings.mustSpecial}
                </Text>
              </View>
              <View style={styles.passwordInstructionParent}>
                <Entypo
                  name={'checkmark-circle'}
                  size={moderateScale(22)}
                  color={Colors[theme]?.green901}
                />
                <Text style={styles.passwordInstruction}>
                  {Strings.mustBeCharaters}
                </Text>
              </View>
              <TextInput
                secureTextEntry={!confirmPasswordVisible}
                mode={'outlined'}
                theme={{roundness:45}}
                label={Strings.confirmNewPass?.toUpperCase()}
                style={[styles.textInput, { marginTop: verticalScale(40) }]}
                activeOutlineColor={Colors[theme]?.black}
                onChangeText={(text) => {
                  setConfirmPassword(text)
                  setConfirmPasswordError('')
                }}
                right={
                  !confirmPasswordVisible ? (
                    <TextInput.Icon
                      name={'eye-off'}
                      onPress={() =>
                        setConfirmPasswordVisible(!confirmPasswordVisible)
                      }
                    />
                  ) : (
                    <TextInput.Icon
                      name={'eye'}
                      onPress={() =>
                        setConfirmPasswordVisible(!confirmPasswordVisible)
                      }
                    />
                  )
                }
              />
              {confirmPasswordError?.length > 0 && (
                <Text style={styles.errorText}>
                  {confirmPasswordError}
                </Text>
              )}
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
      <View style={styles.bottomView}>
        <CustomButton
          theme={theme}
          buttonTitle={Strings.continue}
          buttonStyle={styles.continueButton}
          onBtnPress={() => onLogin()}
        />
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
