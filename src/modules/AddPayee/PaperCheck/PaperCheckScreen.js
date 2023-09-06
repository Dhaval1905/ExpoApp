import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Switch, TextInput } from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton, CustomHeader, ModalButton } from '../../../components';
import { Strings, type } from '../../../constants';
import { externalAccountAdd } from '../../../redux/actions/ach';
import { showLoader } from '../../../redux/actions/user';
import { Colors, moderateScale } from '../../../theme';
import styling from './PaperCheckStyles';
import { showMessage, hideMessage } from "react-native-flash-message";

const PaperCheckScreen = ({ navigation }) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state?.user?.login)
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isVisibleType, setIsVisibleType] = useState(false);
  const [selectedType, setSelectedType] = useState(false);

  const [legalName, setLegalName] = useState("");
  const [nickName, setNickName] = useState("");
  // const [Type, setType] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [legalNameError, setLegalNameError] = useState("");
  const [bankNameError, setBankNameError] = useState("");
  const [accountNumberError, setAccountNumberError] = useState("");
  const [routingNumberError, setRoutingNumberError] = useState("");
  const [accountTypeError, setAccountTypeError] = useState("");
  const [country, setCountry] = useState("US");

  const validation = () => {
    let isValid = false
    if (legalName.length === 0) {
      isValid = true
      setLegalNameError('Please enter legal name.')
    }
    if (!selectedType) {
      isValid = true
      setAccountTypeError('Please select account type.')
    }
    if (bankName.length === 0) {
      isValid = true
      setBankNameError('Please enter bank name.')
    }
    if (accountNumber.length === 0) {
      isValid = true
      setAccountNumberError('Please enter account number.')
    }
    if (routingNumber.length === 0) {
      isValid = true
      setRoutingNumberError('Please enter routing number.')
    }
    return isValid
  }

  const addAccountPress = async () => {
    if (!validation()) {
      await dispatch(showLoader(true))
      let date = new Date()
      let data = {
        account_identifiers: {
          number: accountNumber
        },
        account_owner_names: [
          legalName
        ],
        metadata: {
          date: `created at ${date.getDate()} march by ${legalName}`
        },
        customer_type: selectedType,
        routing_identifiers: {
          bank_countries: [
            country
          ],
          wire_routing_number: routingNumber,
          bank_name: bankName
        },
        nickname: nickName,
        customer_id: userDetails?.data?.personDetail?.[0]?.id,
        type: userDetails?.data?.accountDetail?.[0]?.account_type
      }
      let res = await externalAccountAdd(data)
      await dispatch(showLoader(false))
      if (res?.response?.data?.status === 0) {
        showMessage({
          message: res?.response?.data?.message,
          type: "danger",
        });
      } else {
        navigation.goBack()
      }
    }
  }

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={""}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.titleParent}>
          <FontAwesomeIcon
            name={'bank'}
            size={moderateScale(22)}
            color={Colors[theme]?.blue}
          />
          <Text style={styles.title}>{"Wire Transfer"}</Text>
        </View>
        <View style={styles.card}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
              style={{ flex: 1 }}
              enabled>
              <TextInput
                mode={'outlined'}
                label={Strings.legalName?.toUpperCase()}
                style={styles.textInput}
                activeOutlineColor={Colors[theme]?.black}
                value={legalName}
                onChangeText={(text) => {
                  setLegalName(text)
                  setLegalNameError('')
                }}
              />
              {legalNameError?.length > 0 && (
                <Text style={styles.errorText}>
                  {legalNameError}
                </Text>
              )}
              <TextInput
                mode={'outlined'}
                label={Strings.nickname?.toUpperCase()}
                style={styles.textInput}
                activeOutlineColor={Colors[theme]?.black}
                value={nickName}
                onChangeText={(text) => setNickName(text)}
              />
              {/* <Text style={styles.onlyVisible}>{Strings.onlyVisible}</Text> */}
              <ModalButton
                theme={theme}
                buttonValue={selectedType ? selectedType : 'TYPE'}
                width={'100%'}
                onPressButton={() => {
                  setIsVisibleType(true)
                  setAccountTypeError('')
                }}
              />
              {accountTypeError?.length > 0 && (
                <Text style={styles.errorText}>
                  {accountTypeError}
                </Text>
              )}
              <TextInput
                mode={'outlined'}
                label={Strings.bankName?.toUpperCase()}
                style={styles.textInput}
                activeOutlineColor={Colors[theme]?.black}
                value={bankName}
                onChangeText={(text) => {
                  setBankName(text)
                  setBankNameError('')
                }}
              />
              {bankNameError?.length > 0 && (
                <Text style={styles.errorText}>
                  {bankNameError}
                </Text>
              )}
              <TextInput
                mode={'outlined'}
                label={Strings.accountNumber?.toUpperCase()}
                style={styles.textInput}
                activeOutlineColor={Colors[theme]?.black}
                value={accountNumber}
                keyboardType={'number-pad'}
                onChangeText={(text) => {
                  setAccountNumber(text)
                  setAccountNumberError('')
                }}
              />
              {accountNumberError?.length > 0 && (
                <Text style={styles.errorText}>
                  {accountNumberError}
                </Text>
              )}
              <TextInput
                mode={'outlined'}
                label={Strings.routingNumber?.toUpperCase()}
                style={styles.textInput}
                activeOutlineColor={Colors[theme]?.black}
                value={routingNumber}
                keyboardType={'number-pad'}
                onChangeText={(text) => {
                  setRoutingNumber(text)
                  setRoutingNumberError('')
                }}
              />
              {routingNumberError?.length > 0 && (
                <Text style={styles.errorText}>
                  {routingNumberError}
                </Text>
              )}
              <TextInput
                mode={'outlined'}
                label={"US"}
                // placeholderTextColor={"Black"}
                style={styles.textInput}
                activeOutlineColor={Colors[theme]?.black}
                disabled
              />
              {/* <View style={styles.checkingAccountParent}>
                <Text style={styles.checkingAccount}>
                  {Strings.checkingAccount}
                </Text>
                <Switch
                  value={isSwitchOn}
                  onValueChange={() => setIsSwitchOn(!isSwitchOn)}
                  color={Colors[theme]?.blue}
                />
              </View> */}
              {/* <TextInput
                mode={'outlined'}
                label={Strings.emailOptional?.toUpperCase()}
                style={styles.textInput}
                activeOutlineColor={Colors[theme]?.black}
              /> */}
              {/* <TextInput
                multiline
                mode={'outlined'}
                label={Strings.notes}
                placeholder={Strings.notes}
                defaultValue={' '}
                style={[styles.textInput, styles.textInputMulti]}
                textAlignVertical={'top'}
                activeOutlineColor={Colors[theme]?.black}
                maxLength={250}
              /> */}
              {/* <View style={styles.onlyVisibleParent}>
                <Text style={styles.onlyVisible}>{Strings.onlyVisible}</Text>
                <Text style={styles.rangeText}>0/250</Text>
              </View> */}
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
      <View style={styles.reviewButtonParent}>
        <CustomButton
          theme={theme}
          buttonTitle={Strings.review}
          buttonTitleStyle={styles.review}
          buttonStyle={styles.reviewButtonStyle}
          onBtnPress={() => addAccountPress()}
        />
      </View>
      <Modal visible={isVisibleType} transparent>
        <SafeAreaView style={styles.modalParent}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{Strings.type}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.modalList}>
              {type?.map((item, index) => {
                const isSelected = item === selectedType;
                return (
                  <View key={index}>
                    <TouchableOpacity
                      style={styles.itemParent}
                      onPress={() => {
                        setSelectedType(item);
                        setIsVisibleType(false);
                      }}>
                      <Text
                        style={[
                          styles.modalItem,
                          isSelected && styles.selectedModalItem,
                        ]}>
                        {item}
                      </Text>
                      {isSelected ? (
                        <Icon
                          name="checkmark"
                          size={moderateScale(24)}
                          color={Colors[theme]?.blue}
                        />
                      ) : (
                        <></>
                      )}
                    </TouchableOpacity>
                    <View style={styles.divider} />
                  </View>
                );
              })}
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default PaperCheckScreen;
