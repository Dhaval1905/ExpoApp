import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, Modal, SafeAreaView, TextInput } from 'react-native';
import { Fonts, Icons } from '../../assets';
import { CustomButton, CustomHeader, MoveMoneyCard } from '../../components';
import { Strings } from '../../constants/Strings';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';
import styling from './PushFundStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import { createToken, externalAccountGet, externalAccountUpdate, putToken } from '../../redux/actions/ach';
import PlaidLink from 'react-native-plaid-link-sdk';
import { useDispatch, useSelector } from 'react-redux';
import { showLoader } from '../../redux/actions/user';
import { navigationStrings } from '../../constants';
import { showMessage } from 'react-native-flash-message';
import { MoveMoneyCheck } from '../../components/MoveMoneyCheck';
import Clipboard from '@react-native-community/clipboard';
import { showToast } from '../../utils/constant';
import PenIcon from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/Ionicons';
import Search from 'react-native-vector-icons/AntDesign'
// import { TextInput } from 'react-native-paper';

const PushFundScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const [token, setToken] = useState('')
  const [isView, setIsView] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [editItem, setEditItem] = useState([])
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state?.user?.login)
  const [externalAccount, setExternalAccount] = useState([]);
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [isVisibleType, setIsVisibleType] = useState(false);
  const [searchTxt, setSearchTxt] = useState("")
  const isAdd = route?.params?.isFromAddAccount
  useEffect(() => {
    (async () => {
      const unsubscribe = navigation.addListener('focus',async () => {
        await getData()
      });
      return unsubscribe;
})();
  }, [])
const getData=async()=>{
  await dispatch(showLoader(true))
  let data = {
    customer_id: userDetails?.data?.personDetail?.[0]?.id,
    vendor_type: "PLAID",
    take_from: "rethink"
  }
  let externalAccountList = await externalAccountGet(data)
  setExternalAccount(externalAccountList?.data?.data?.external_accounts)
  let res = await createToken({
    client_name: "ReThink Fi app",
    // vendor_institution_id: "ins_56",
    // vendor_access_token: "access-sandbox-23ac17ff-b4b7-4dce-8194-2e17f9656ccb"
  })
  setToken(res?.data?.data?.link_token)
  await dispatch(showLoader(false))
}
  const onUpdate =async () => {
    let data1={
      external_account_id : editItem?.[0]?.id,
      account_owner_names:[name]
    }
   let res = await externalAccountUpdate(data1)
   await getData()
   setIsVisibleType(!isVisibleType)
   setName('')
  }
  const onSumbit = (isEdit,item) => {
    setIsEdit(isEdit)
    setIsVisibleType(!isVisibleType)
    setEditItem([item])
    if(item){
      setName(item?.account_owner_names?.[0] || '')
    }
  }

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.fundAccount}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.card}>
        <MoveMoneyCheck
          theme={theme}
          title={isAdd ? 'Fund from a connected bank' : Strings.pushFundAnotherBank}
          subTitle={isAdd ? 'Deposit in 1-2 business days' : Strings.depositBusinessDayOneTwo}
          icon={Icons.bank_transfer}
          tagOne={isAdd ? 'For Small Deposits' : Strings.forLargeDeposits}
          tagTwo={Strings.fast}
          tagOneTextStyle={styles.greyText}
          tagOneBackground={Colors[theme]?.grey200}
          tagTwoTextStyle={styles.darkBlueText}
          tagTwoBackground={Colors[theme]?.blue10050}
          rightIcon={false}
          viewBackground={isAdd ? '#F9FEDA' : '#DFF7FF'}
          isAdd={isAdd}
        text1={isAdd ? "" : "A great option to make a\n large deposit "}
        text2={isAdd ? "" : "Initiate a transfer from an external bank account (no limits apply) "}
        />
       {/* {isAdd && <View style={styles.srContainer}>
          <Search
            name='search1'
            size={moderateScale(25)}
            color={Colors[theme].grey600}
          />
          <TextInput
            value={searchTxt}
            onChangeText={(txt) => setSearchTxt(txt)}
            style={styles.txtInput}
            placeholder='Search user'
            placeholderTextColor={Colors[theme].grey700}
          />
        </View>} */}
        {isAdd && <View style={{flex:1,marginBottom:horizontalScale(60)}}>
          <FlatList
            data={externalAccount}
            // horizontal
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              let initials;
              var names =item?.account_owner_names? item?.account_owner_names?.[0]?.split(' ') : ''
              initials = names?.[0]?.substring(0, 1).toUpperCase();
              if (names?.length > 1) {
                initials += names[names?.length - 1]?.substring(0, 1).toUpperCase();
              }
              return (
                <TouchableOpacity style={styles.flTouch} onPress={()=>navigation.navigate(navigationStrings.AddFund, { item: [item] })}>
                  <View style={styles.flSub}>
                    <View style={styles.nmContainer}>
                      <Text style={[styles.detailText, { color: '#6DD8FC' }]} >{initials || " "}</Text>
                    </View>
                    <View style={{ marginLeft: moderateScale(15) }}>
                      <View style={{ flexDirection: "row", }}>
                        <Text style={styles.nmTxt}>{item?.account_owner_names?.[0] || ''}</Text>
                        <TouchableOpacity onPress={() => onSumbit(true,item)} style={styles.icTouch}>
                          <PenIcon
                            name='pen'
                            size={moderateScale(10)}
                            color={Colors[theme].grey600}
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={{ paddingTop: moderateScale(3),justifyContent:'space-between',flexDirection:'row',width:'100%' }}>
                        <Text style={[styles.locTxt,{width:190}]}>{item?.routing_identifiers?.bank_name}</Text>
                    <Text style={{
      color:'#6B6B6B',
      fontFamily:Fonts.regular,
      textAlign:'right'
                    }}>*********{item?.account_identifiers?.number}</Text>
                      </View>
                    </View>
                  </View>
                  {/* <View style={styles.crTxt}>
                  </View> */}
                </TouchableOpacity>
              )
            }}
            contentContainerStyle={{ marginBottom: moderateScale(30) }}
          />
        </View>}
      {!isAdd && <View style={styles.routingAccountNumberParent}>
        <View style={styles.accountNumberParent}>
          <View>
            <Text style={styles.accountNumber}>
              {"Account Info"}
            </Text>
            <TouchableOpacity onPress={() => setIsView(!isView)}>
              <Text style={[styles.subTitle, { marginTop: verticalScale(4), }]}>{`${userDetails?.data?.accountDetail?.[0]?.account_number}`}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ height: horizontalScale(30), width: horizontalScale(30), borderRadius: horizontalScale(30), backgroundColor: '#F2F2F2', alignItems: 'center', justifyContent: 'center', marginLeft: 8 }} onPress={() => {
            Clipboard.setString(userDetails?.data?.accountDetail?.[0]?.account_number);
            showToast('Copied');
          }}>
            <MaterialCommunityIcons
              name="content-copy"
              size={moderateScale(16)}
              color={Colors[theme]?.black}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.routingNumberParent}>
          <View style={styles.subTitleParent}>
            <View>
              <Text style={styles.routingNumber}>
                {"ACH Routing No."}
              </Text>
              <Text style={styles.subTitle}>{userDetails?.data?.accountDetail?.[0]?.bank_routing}</Text>
            </View>
            <TouchableOpacity style={{ height: horizontalScale(30), width: horizontalScale(30), borderRadius: horizontalScale(30), backgroundColor: '#F2F2F2', alignItems: 'center', justifyContent: 'center', marginLeft: 8 }} onPress={() => {
              Clipboard.setString(userDetails?.data?.accountDetail?.[0]?.bank_routing);
              showToast('Copied');
            }}>
              <MaterialCommunityIcons
                name="content-copy"
                size={moderateScale(16)}
                color={Colors[theme]?.black}
              />
            </TouchableOpacity>
          </View>
        </View>

      </View>}
      </View>
      
      {/* BottomSheet Modal */}
      <Modal visible={isVisibleType} transparent>
        <SafeAreaView style={styles.modalParent}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{isEdit?Strings.updateDetails:'Add Details'}</Text>
              <Icon
                name="close"
                size={moderateScale(24)}
                color={Colors[theme]?.black}
                onPress={() => {
                  setIsVisibleType(false)
                  setName('')
                }}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.txt}>{"Name"}</Text>
              <TextInput
                placeholder={"Enter Name"}
                placeholderTextColor={Colors[theme]?.grey700}
                style={styles.textInput}
                activeOutlineColor={Colors[theme]?.black}
                value={name}
                onChangeText={(text) => {
                  setNameError('')
                  setName(text)
                }}
              />
              {nameError?.length > 0 && (
                <Text style={styles.errorText}>
                  {nameError}
                </Text>
              )}
            </View>
        {!isEdit ?<View style={{  alignSelf: 'center', width: '100%', justifyContent: 'center',marginTop:'10%',marginBottom:moderateScale(20) }} >
          <PlaidLink
            tokenConfig={{
              token: token,
            }}
            onSuccess={async (success) => {
              let vendor_account_id=[]
              success?.metadata?.accounts.forEach(element => {
                vendor_account_id.push(element?.id)
              });
              let data = {
                vendor_institution_id: success?.metadata?.institution?.id,
                vendor_public_token: success?.publicToken,
                vendor_account_ids: vendor_account_id
              }
              let res = await putToken(data)
              if (res?.response?.data?.status === 0) {
                showMessage({
                  message: res?.response?.data?.message,
                  type: "danger",
                });
              } else {
                setTimeout(async() => {
                  if(name.length>0){
                  let data1={
                    external_account_id : res?.data?.data?.added_accounts?.[0]?.id,
                    account_owner_names:[name]
                  }
                 let res1 = await externalAccountUpdate(data1)
                }
                setName('')
                  navigation.navigate(navigationStrings.AddFund, { item: res?.data?.data?.added_accounts });
                }, 100);
              }
            }}
            onExit={(exit) => {
              setIsVisibleType(!isVisibleType)
              setName('')
            }}
          >
            <Text style={{
              alignSelf: 'center',
              fontSize: 20,
              color: "white",
              backgroundColor: Colors[theme].blue,
              paddingHorizontal: horizontalScale(70),
              paddingVertical: horizontalScale(12),
              borderRadius: horizontalScale(90)
            }} >Add External Account</Text>
          </PlaidLink>
        </View>:
            <CustomButton
              theme={theme}
              onBtnPress={() => onUpdate()}
              buttonTitle={"Update Name"}
              buttonStyle={styles.loginBtn}
              buttonTitleStyle={styles.loginText}
            />}
          </View>
        </SafeAreaView>
      </Modal>
      {isAdd &&<CustomButton
              theme={theme}
              onBtnPress={() => onSumbit(false)}
              buttonTitle={"Add External Account"}
              buttonStyle={styles.loginBtn1}
              buttonTitleStyle={styles.loginText}
            />}
    </View>
  );
};

export default PushFundScreen;
