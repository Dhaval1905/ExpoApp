import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Keyboard,
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
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton, CustomHeader, ModalButton } from '../../../components';
import { navigationStrings, Strings, type } from '../../../constants';
import { externalAccountAdd, externalAccountUpdate } from '../../../redux/actions/ach';
import { showLoader } from '../../../redux/actions/user';
import { Colors, moderateScale, verticalScale } from '../../../theme';
import styling from './BankTransferStyle';
import { showMessage, hideMessage } from "react-native-flash-message";
import DownArrow from 'react-native-vector-icons/Entypo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const BankTransferScreen = ({ navigation }) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state?.user?.login)
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isVisibleType, setIsVisibleType] = useState(false);
  const [isVisibleType1, setIsVisibleType1] = useState(false);
  const [selectedType, setSelectedType] = useState(route?.params?.item ? type[0] : false);
  const [selectedType1, setSelectedType1] = useState(route?.params?.item?.type ?? false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const [legalName, setLegalName] = useState(route?.params?.item?.account_owner_names?.[0] ?? "");
  const [nickName, setNickName] = useState(route?.params?.item?.nickname ?? "");
  // const [Type, setType] = useState("");
  const [accountNumber, setAccountNumber] = useState(route?.params?.item?.account_identifiers?.number ?? "");
  const [routingNumber, setRoutingNumber] = useState(route?.params?.item?.routing_identifiers?.ach_routing_number ?? "");
  const [routingNumber1, setRoutingNumber1] = useState(route?.params?.item?.routing_identifiers?.wire_routing_number ?? "");
  const [bankName, setBankName] = useState(route?.params?.item?.routing_identifiers?.bank_name ?? "");
  const [legalNameError, setLegalNameError] = useState("");
  const [bankNameError, setBankNameError] = useState("");
  const [accountNumberError, setAccountNumberError] = useState("");
  const [routingNumberError, setRoutingNumberError] = useState("");
  const [routingNumberError1, setRoutingNumberError1] = useState("");
  const [accountTypeError, setAccountTypeError] = useState("");
  const [accountTypeError1, setAccountTypeError1] = useState("");
  const [country, setCountry] = useState("US");

  const validation = () => {
    let isValid = false
    if (legalName.length === 0) {
      isValid = true
      setLegalNameError('Please enter legal name.')
    }
    if (!selectedType1) {
      isValid = true
      setAccountTypeError1('Please select account type.')
    }
    if (bankName.length === 0) {
      isValid = true
      setBankNameError('Please enter bank name.')
    }
    if (accountNumber.length === 0) {
      isValid = true
      setAccountNumberError('Please enter account number.')
    }
    if (routingNumber.length === 0 && routingNumber1.length === 0) {
      isValid = true
      setRoutingNumberError('Please enter ach routing number.')
      setRoutingNumberError1('Please enter wire routing number.')
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
        // customer_type: selectedType,
        routing_identifiers: {
          bank_countries: [
            country
          ],
          bank_name: bankName
        },
        customer_id: userDetails?.data?.personDetail?.[0]?.id,
        type: selectedType1
      }
      if (nickName) data.nickname = nickName || null
      if (routingNumber) data.routing_identifiers.ach_routing_number = routingNumber
      if (routingNumber1) data.routing_identifiers.wire_routing_number = routingNumber1
      let res;
      if (route?.params?.item) {
        data.external_account_id = route?.params?.item?.id
        res = await externalAccountUpdate(data)
      } else {
        res = await externalAccountAdd(data)
      }
      await dispatch(showLoader(false))
      if (res?.response?.data?.status === 0) {
        showMessage({
          message: res?.response?.data?.message,
          type: "danger",
        });
      } else {
        navigation.navigate(navigationStrings.SuccessScreen, {
          isFromAddPayee: true,
          item: res?.data?.data
        })
      }
    }
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.screen}>
        <CustomHeader
          theme={theme}
          headerTitle={Strings.addPayee}
          onPressBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            <TextInput
              theme={{ roundness: Platform.OS === "web" ? 25 : 45, }}
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
              theme={{ roundness: Platform.OS === "web" ? 25 : 45, }}
              label={Strings.nickname?.toUpperCase() + ' (optional)'}
              style={styles.textInput}
              activeOutlineColor={Colors[theme]?.black}
              value={nickName}
              onChangeText={(text) => setNickName(text)}
            />
            <TouchableOpacity activeOpacity={.8} onPress={() => {
              setIsVisibleType1(true)
              setAccountTypeError1('')
            }} style={{ width: "100%", marginTop: Platform.OS === "web" ? 20 : moderateScale(20), height: Platform.OS === "web" ? 55 : moderateScale(55), flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderColor: Colors[theme].grey700, borderWidth: 1, borderRadius: Platform.OS === "web" ? 40 : moderateScale(40), }}>
              {/* <ModalButton
                theme={theme}
                buttonValue={selectedType ? selectedType : 'CUSTOMER TYPE'}
                width={'100%'}
                marginTop={verticalScale((12))}
                marginBottom={verticalScale((12))}
                // marginTop={verticalScale((12))}
                showArrow
                onPressButton={() => {
                  setIsVisibleType(true)
                  setAccountTypeError('')
                }}
              /> */}
              <View style={{ width: "95%" }}>
                <Text style={{ fontSize: Platform.OS === "web" ? 16 : moderateScale(16), color: Colors[theme].grey700, paddingLeft: Platform.OS === "web" ? 15 : moderateScale(15) }}>{selectedType1 ? selectedType1 : 'ACCOUNT TYPE'}</Text>
              </View>
              <View style={{ width: "5%" }}>
                <DownArrow name='chevron-thin-down' size={Platform.OS === "web" ? 20 : moderateScale(20)} color={Colors[theme].grey500} />
              </View>
            </TouchableOpacity>
            {accountTypeError1?.length > 0 && (
              <Text style={styles.errorText}>
                {accountTypeError1}
              </Text>
            )}
            <TextInput
              mode={'outlined'}
              theme={{ roundness: Platform.OS === "web" ? 25 : 45, }}
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
              theme={{ roundness: Platform.OS === "web" ? 25 : 45, }}
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
              theme={{ roundness: Platform.OS === "web" ? 25 : 45, }}
              label={Strings.routingNumber?.toUpperCase()}
              style={styles.textInput}
              activeOutlineColor={Colors[theme]?.black}
              value={routingNumber}
              disabled={route?.params?.item ? !route?.params?.item?.routing_identifiers?.ach_routing_number : false}
              keyboardType={'number-pad'}
              onChangeText={(text) => {
                setRoutingNumber(text)
                setRoutingNumberError('')
                setRoutingNumberError1('')
              }}
            />
            {routingNumberError?.length > 0 && (
              <Text style={styles.errorText}>
                {routingNumberError}
              </Text>
            )}
            <TextInput
              mode={'outlined'}
              theme={{ roundness: Platform.OS === "web" ? 25 : 45, }}
              label={Strings.routingNumber1?.toUpperCase()}
              style={styles.textInput}
              activeOutlineColor={Colors[theme]?.black}
              value={routingNumber1}
              disabled={route?.params?.item ? !route?.params?.item?.routing_identifiers?.wire_routing_number : false}
              keyboardType={'number-pad'}
              onChangeText={(text) => {
                setRoutingNumber1(text)
                setRoutingNumberError1('')
                setRoutingNumberError('')
              }}
            />
            {routingNumberError1?.length > 0 && (
              <Text style={styles.errorText}>
                {routingNumberError1}
              </Text>
            )}
            <TextInput
              mode={'outlined'}
              label={"US"}
              theme={{ roundness: Platform.OS === "web" ? 25 : 45, }}
              // placeholderTextColor={"Black"}
              style={styles.textInput}
              activeOutlineColor={Colors[theme]?.black}
              disabled
            />
          </ScrollView>
        </View>
        <CustomButton
          theme={theme}
          buttonTitle={Strings.submit}
          buttonTitleStyle={styles.review}
          buttonStyle={{ ...styles.reviewButtonStyle, marginBottom: isKeyboardVisible ? Platform.OS === 'ios' ? moderateScale(45) : moderateScale(10) : moderateScale(10) }}
          onBtnPress={() => addAccountPress()}
        />
        <Modal visible={isVisibleType} transparent>
          <SafeAreaView style={styles.modalParent}>
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{Strings.type}</Text>
                <Icon
                  name="close"
                  size={Platform.OS === "web" ? 24 : moderateScale(24)}
                  color={Colors[theme]?.black}
                  onPress={() => setIsVisibleType(false)}
                />
              </View>
              <View style={styles.modalList}>
                {type?.map((item, index) => {
                  const isSelected = item === selectedType;
                  return (
                    <View key={index} style={{ width: '45%' }}>
                      <TouchableOpacity
                        style={[styles.itemParent, { backgroundColor: isSelected ? Colors[theme].blue : '#F2F2F2' }]}
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
                      </TouchableOpacity>
                      <View style={styles.divider} />
                    </View>
                  );
                })}
              </View>
            </View>
          </SafeAreaView>
        </Modal>
        <Modal visible={isVisibleType1} transparent>
          <SafeAreaView style={styles.modalParent}>
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{Strings.type}</Text>
                <Icon
                  name="close"
                  size={Platform.OS === "web" ? 24 : moderateScale(24)}
                  color={Colors[theme]?.black}
                  onPress={() => setIsVisibleType1(false)}
                />
              </View>
              <View style={styles.modalList}>
                {['CHECKING', 'SAVINGS']?.map((item, index) => {
                  const isSelected = item === selectedType1;
                  return (
                    <View key={index} style={{ width: '45%' }}>
                      <TouchableOpacity
                        style={[styles.itemParent, { backgroundColor: isSelected ? Colors[theme].blue : '#F2F2F2' }]}
                        onPress={() => {
                          setSelectedType1(item);
                          setIsVisibleType1(false);
                        }}>
                        <Text
                          style={[
                            styles.modalItem,
                            isSelected && styles.selectedModalItem,
                          ]}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
};

export default BankTransferScreen;