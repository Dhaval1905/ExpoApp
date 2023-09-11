import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, useColorScheme, Text } from 'react-native';
import { navigationStrings } from '../constants';
import { SplashScreen } from "../modules/SplashScreen"
// import {
//   ActivateCard,
//   AddPayee,
//   AddUserRequest,
//   BankLetter,
//   BankTransfer,
//   BusinessInformation,
//   CaptureCheckNote,
//   ChangePassword,
//   ChangePin,
//   ConfirmPassword,
//   ConnectPayPlatforms,
//   DepositCheck,
//   DepositCheckAmount,
//   DepositCheckName,
//   EditBusinessAddress,
//   EditBusinessPhone,
//   EditDba,
//   EditEmail,
//   EditHomeAddress,
//   EditMailingAddress,
//   EditMobilePhone,
//   FundAccount,
//   MakeDeposit,
//   MakePayment,
//   MakeTravelNotice,
//   PaperCheck,
//   PersonalInformation,
//   PushFund,
//   Referrals,
//   ReportMissingCard,
//   RequestLimitChange,
//   RethinkCard,
//   RethinkPhysical,
//   ScanId,
//   SelectIdAdd,
//   SignEndorse,
//   SplashScreen,
//   Statements,
//   TransferLimits,
//   TransferVirtualCard,
//   TravelNotice,
//   UsDriverLicense,
//   Users,
//   VerifyIdentity,
//   VirtualCard,
//   VirtualCardDetail,
//   CardDetail,
//   IssueCard,
//   AddFundScreen,
//   TransacationDetails,
//   Settings,
//   Support,
//   HelpSupport,
//   SupportTicket,
//   License,
//   FundAccountCard,
//   FundBankAccount
// } from '../modules';
// import SelectTransfer from '../modules/AddPayee/selectTransfer';
// import SuccessScreen from '../modules/AddPayee/SuccessScreen';
// import TransferScreen from '../modules/AddPayee/TranferScreen/TranferScreen';
// import WireTranferScreen from '../modules/AddPayee/WireTranferScreen/WireTranferScreen';
// import OTPVerify from '../modules/OTPVerify';
import AuthStack from './AuthStack';
// import BottomTabsNav from './BottomTabsNav';
// import BankLetterDetails from '../modules/BankLetterDetails/BankLetterDetails';
import { _navigator, isReadyRef } from '../constants/NavigationService';
// import { TestLink } from '../modules/TestLinkScreen';
// import WebviewScreen from '../components/Webview/Webview';
// import OTPVerifyLogin from '../modules/OTPVerifyLogin';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const apptheme = useColorScheme();

  return (
    <NavigationContainer
      onReady={() => {
        isReadyRef.current = true;
      }}
      ref={_navigator}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={navigationStrings.SPLASHSCREEN}
          component={SplashScreen}
          initialParams={{ theme: apptheme }}
        />
        <Stack.Screen
          name={navigationStrings.AUTHSTACK}
          component={AuthStack}
          initialParams={{ theme: apptheme }}
        />
        {/* <Stack.Screen
          name={navigationStrings.BOTTOMTABSNAV}
          component={BottomTabsNav}
          initialParams={{ theme: apptheme }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )

  // return (
  //   <NavigationContainer
  //     onReady={() => {
  //       isReadyRef.current = true;
  //     }}
  //     ref={_navigator}
  //   >

  //     <Stack.Navigator
  //       screenOptions={{
  //         headerShown: false,
  //       }}>
  //       <Stack.Screen
  //         name={navigationStrings.SPLASHSCREEN}
  //         component={SplashScreen}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.AUTHSTACK}
  //         component={AuthStack}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.BOTTOMTABSNAV}
  //         component={BottomTabsNav}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.ADDPAYEE}
  //         component={AddPayee}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.MAKEPAYMENT}
  //         component={MakePayment}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.BANKTRANSFER}
  //         component={BankTransfer}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.TTRANFERSCREEN}
  //         component={TransferScreen}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.WIRETRANFERSCREEN}
  //         component={WireTranferScreen}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.PAPERCHECK}
  //         component={PaperCheck}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.FUNDACCOUNT}
  //         component={FundAccount}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.CONNECTEDPAYPLATFORMS}
  //         component={ConnectPayPlatforms}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.TRANSFERVIRTUALCARD}
  //         component={TransferVirtualCard}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.PUSHFUND}
  //         component={PushFund}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.DEPOSITCHECK}
  //         component={DepositCheck}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.VERIFYIDENTITY}
  //         component={VerifyIdentity}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.SELECTIDADD}
  //         component={SelectIdAdd}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.USDRIVERLICENSE}
  //         component={UsDriverLicense}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.SCANID}
  //         component={ScanId}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.DEPOSITCHECKAMT}
  //         component={DepositCheckAmount}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.SIGNENDORSE}
  //         component={SignEndorse}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.MAKEDEPOSIT}
  //         component={MakeDeposit}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.DEPOSITCHECKNAME}
  //         component={DepositCheckName}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.CAPTURECHECKNOTE}
  //         component={CaptureCheckNote}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.PERSONALINFORMATION}
  //         component={PersonalInformation}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.EDITEMAIL}
  //         component={EditEmail}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.EDITMOBILEPHONE}
  //         component={EditMobilePhone}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.EDITHOMEADDRESS}
  //         component={EditHomeAddress}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.BUSINESSINFORMATION}
  //         component={BusinessInformation}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.EDITMAILINGADDRESS}
  //         component={EditMailingAddress}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.EDITBUSINESSADDRESS}
  //         component={EditBusinessAddress}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.EDITBUSINESSPHONE}
  //         component={EditBusinessPhone}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.SelectTransfer}
  //         component={SelectTransfer}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.DBA}
  //         component={EditDba}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.USERS}
  //         component={Users}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.SuccessScreen}
  //         component={SuccessScreen}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.ADDUSERREQ}
  //         component={AddUserRequest}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.BANKLETTER}
  //         component={BankLetter}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.TRANSFERLIMITS}
  //         component={TransferLimits}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.CHANGEPASSWORD}
  //         component={ChangePassword}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.REQLIMITCHANGE}
  //         component={RequestLimitChange}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.RETHINKCARD}
  //         component={RethinkCard}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.RETHINKPHYSICAL}
  //         component={RethinkPhysical}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.ACTIVATECARD}
  //         component={ActivateCard}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.CHANGEPIN}
  //         component={ChangePin}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.TRAVELNOTICE}
  //         component={TravelNotice}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.MAKETRAVELNOTICE}
  //         component={MakeTravelNotice}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.REPORTMISSINGCARD}
  //         component={ReportMissingCard}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.STATEMENTS}
  //         component={Statements}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.REFERRALS}
  //         component={Referrals}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.VIRTAULCARD}
  //         component={VirtualCard}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.VIRTAULCARDDETAIL}
  //         component={VirtualCardDetail}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.CONFIRMPASSWORD}
  //         component={ConfirmPassword}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.OTPVERIFY}
  //         component={OTPVerify}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.OTPVERIFYLOGIN}
  //         component={OTPVerifyLogin}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.CARDDETAIL}
  //         component={CardDetail}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.IssueCard}
  //         component={IssueCard}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.BankLetterDetails}
  //         component={BankLetterDetails}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.AddFund}
  //         component={AddFundScreen}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.TransacationDeatils}
  //         component={TransacationDetails}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.SETTINGS}
  //         component={Settings}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.TESTLINK}
  //         component={TestLink}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.SUPPORT}
  //         component={Support}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.HELPSUPPORT}
  //         component={HelpSupport}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.SUPPORTTICKET}
  //         component={SupportTicket}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.WEBVIEWSCREEN}
  //         component={WebviewScreen}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.LICENSE}
  //         component={License}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.FUNDACCOUNTLIST}
  //         component={FundAccountCard}
  //         initialParams={{ theme: apptheme }}
  //       />
  //       <Stack.Screen
  //         name={navigationStrings.FUNDBANKACCOUNT}
  //         component={FundBankAccount}
  //         initialParams={{ theme: apptheme }}
  //       />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
};

export default MainStack;
