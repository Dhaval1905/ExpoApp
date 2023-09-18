import React, { useEffect, useState } from 'react';
import { Linking, Text, View, ScrollView, Platform, SafeAreaView, Modal, Dimensions, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomButton, CustomHeader } from '../../components';
import { Strings } from '../../constants';
import { Colors, moderateScale } from '../../theme';
import styling from './BankLetterDetailsStyle';
import { useDispatch, useSelector } from 'react-redux';
import { showLoader } from '../../redux/actions/user';
import { getBankLetter, getProductCard } from '../../redux/actions/card';
import { showMessage } from 'react-native-flash-message';
// import FileViewer from "react-native-file-viewer";
// import RNFetchBlob from 'rn-fetch-blob';
import { WebView } from 'react-native-webview';
// import Share from 'react-native-share';

const BankLetterDetails = ({ navigation }) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const [isDisplay, setIsDisplay] = useState(false)
  const [url, setUrl] = useState("")
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)

  // const downloadFile = (url, fileName) => {
  //   const { config, fs } = RNFetchBlob;
  //   const DownloadDir = fs.dirs.DownloadDir;
  //   const options = {
  //     fileCache: true,
  //     addAndroidDownloads: {
  //       useDownloadManager: true,
  //       notification: true,
  //       path: `${DownloadDir}/${fileName}`,
  //       description: 'Downloading file',
  //     },
  //   };
  //   config(options)
  //     .fetch('GET', url)
  //     .then((res) => {
  //       if(Platform.OS==='android'){
  //         FileViewer.open(res.path())
  //         .then(() => {
  //           console.log('File opened successfully');
  //         })
  //         .catch((error) => {
  //           console.error(`Error opening file: ${error}`);
  //         });
  //       }else{
  //         setIsDisplay(true)
  //         setUrl(url)
  //       }
  //       // You can now use the downloaded file by passing the file path to other functions or components
  //     });
  // };
  const openShare = async () => {
    let options = {
      type: 'pdf',
      url: Platform.OS === 'android' ? 'file://' + url : url // (Platform.OS === 'android' ? 'file://' + filePath)
    };
    // const shareOptions = {
    //   title: 'Share via',
    //   message: 'Share Pdf',
    //   url: url,
    //   // social: Share.Social.WHATSAPP,
    //   // whatsAppNumber: "+91 8980386001",  // country code + phone number
    //   // filename: 'test', // only for base64 file in Android
    // };
    // await Share.open(options);
    // Share.open(shareOptions)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     err && console.log(err);
    //   });
  }
  const getLetter = async () => {
    await dispatch(showLoader(true))
    let res = await getBankLetter()
    await dispatch(showLoader(false))
    if (res?.data?.data["bank-letter"]?.status === 0) {
      showMessage({
        message: "There is no bank letter right now.",
        type: "danger",
      });
    } else {
      downloadFile(res?.data?.data["bank-letter"]?.["pdf-url"], 'bank_letter.pdf');
    }
  }
  return (
    <View style={styles.screen}>
      <CustomHeader theme={theme} headerTitle={"Create Bank Letter"} onPressBack={() => navigation.goBack()} />
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Text style={[styles.cardItemTitle, { fontSize: 16, color: '#000000', alignSelf: 'flex-start' }]}>
            {"The bank letter will include the following information."}
          </Text>
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"ACCOUNT OWNER"}
            </Text>
            <Text style={styles.amountText}>
              {userDetails?.data?.personDetail?.[0]?.first_name} {userDetails?.data?.personDetail?.[0]?.last_name}
            </Text>
          </View>
          {/* <View style={styles.divider} /> */}
          {userDetails?.data?.businessDetail?.entity_name && <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"BUSINESS NAME"}
            </Text>
            <Text style={styles.amountText}>
              {userDetails?.data?.businessDetail?.entity_name}
            </Text>
          </View>}
          {/* <View style={styles.divider} /> */}
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"ACCOUNT NUMBER"}
            </Text>
            <Text style={styles.amountText}>
              {userDetails?.data?.accountDetail?.[0]?.account_number}
            </Text>
          </View>
          {/* <View style={styles.divider} /> */}
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"ROUTING NUMBER"}
            </Text>
            <Text style={styles.amountText}>
              {userDetails?.data?.accountDetail?.[0]?.bank_routing}
            </Text>
          </View>
          {/* <View style={styles.divider} /> */}
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"BUSINESS ADDRESS"}
            </Text>
            <Text style={styles.amountText}>
              {userDetails?.data?.personDetail?.[0]?.legal_address?.address_line_1 + ',' + userDetails?.data?.personDetail?.[0]?.legal_address?.city + ',' + userDetails?.data?.personDetail?.[0]?.legal_address?.country_code}
            </Text>
          </View>
          {/* <View style={styles.divider} /> */}
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"ACCOUNT OPENING DATE"}
            </Text>
            <Text style={styles.amountText}>
              {userDetails?.data?.accountDetail?.[0]?.open_date}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <CustomButton
          theme={theme}
          buttonTitle={Strings.continue}
          buttonStyle={styles.continueButton}
          onBtnPress={() => getLetter()}
        />
      </View>
      {
        url &&
        <Modal visible={isDisplay} transparent>
          <SafeAreaView>
            <View style={{ backgroundColor: Colors[theme].white, height: Dimensions.get("screen").height, width: "100%" }}>
              <View style={{ paddingLeft: "2%", paddingRight: "2%", flexDirection: "row" }}>
                <TouchableOpacity onPress={() => setIsDisplay(false)} style={{ width: "15%", justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ fontSize: moderateScale(16), color: "#035efc", fontWeight: "600" }}>Done</Text>
                </TouchableOpacity>
                <View style={{ width: "70%", justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ fontSize: moderateScale(16), color: "#000", fontWeight: "600" }}>PDF</Text>
                </View>
                <View style={{ width: "15%", justifyContent: "center", alignItems: "center" }}>
                  <TouchableOpacity onPress={() => openShare()} activeOpacity={.9}>
                    <Ionicons name='share-outline' size={moderateScale(25)} color={'#035efc'} />
                  </TouchableOpacity>
                </View>
              </View>
              <WebView source={{ uri: url }} androidLayerType={'hardware'} style={{ backgroundColor: Colors[theme].white, marginTop: moderateScale(20) }} />
            </View>
          </SafeAreaView>
        </Modal>
      }
    </View>
  );
};

export default BankLetterDetails;
