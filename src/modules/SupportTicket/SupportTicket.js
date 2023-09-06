import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {CustomButton, CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import styling from './SupportTicketStyle';
import { horizontalScale } from '../../theme';
import { useDispatch } from 'react-redux';
import { showLoader } from '../../redux/actions/user';
import { showMessage } from 'react-native-flash-message';
import { supportTicketCreate } from '../../redux/actions/ach';

const SupportTicket = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
const dispatch=useDispatch()
  const [isDisable, setIsDisable] = useState(true);
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [msg, setMsg] = useState("");
  const [msgError, setMsgError] = useState("");

  const validation = () => {
    let isValid = false
    if (subject.length === 0) {
      isValid = true
      setSubjectError('Please enter subject.')
    }
    if (msg.length === 0) {
      isValid = true
      setMsgError('Please enter message.')
    }
    return isValid
  }

  submitTicket=async()=>{
    if (!validation()) {
      await dispatch(showLoader(true))
      let data = {
        title:subject,
        description:msg
      }
      let supportRes = await supportTicketCreate(data)
      console.log('-supportRes',supportRes)
      await dispatch(showLoader(false))
      if (supportRes?.status === 1) {
        showMessage({
          message: `your request submited successfully!get back you in 2 or 3 business days`,
          type: "success",
        });
      navigation.goBack()
      }else {
        showMessage({
          message: `${supportRes?.message}`,
          type: "danger",
        });
      }
    }
  }
  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={"Support Tickets"}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.textStyle}>{"Hello, I'm having trouble navigating the site and finding the information I need. Can you assist me"}</Text>
          <TextInput
          placeholder={"Subject"}
          placeholderTextColor={"#A8A8A8"}
      style={[styles.textInput,{marginTop:horizontalScale(26)}]}
            onChangeText={val => {
            setSubject(val)
            setSubjectError('')
            }}
          />
           {subjectError?.length > 0 && (
            <Text style={styles.errorText}>
              {subjectError}
            </Text>
          )}
        </View>
        <View style={[styles.card,{marginTop:horizontalScale(10)}]}>
          <TextInput
          placeholder={"Write your message"}
          multiline
          numberOfLines={4}
          placeholderTextColor={"#A8A8A8"}
            style={[styles.textInput,{height:horizontalScale(120),textAlignVertical:'top',borderWidth:0}]}
            onChangeText={val => {
              setMsg(val)
              setMsgError('')
              }}
          />
             {msgError?.length > 0 && (
            <Text style={styles.errorText}>
              {msgError}
            </Text>
          )}
        </View>
      </View>
      <CustomButton
        theme={theme}
        // buttonDisable={isDisable}
        buttonTitle={"Send"}
        buttonTitleStyle={styles.continue}
        buttonStyle={[
          styles.continueButtonStyle,
        ]}
        onBtnPress={() => {
          submitTicket()
        }}
      />
    </View>
  );
};

export default SupportTicket;
