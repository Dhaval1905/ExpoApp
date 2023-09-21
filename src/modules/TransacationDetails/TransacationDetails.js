import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Linking, Text, View, ScrollView, Image, Platform, Modal, Dimensions, SafeAreaView, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomButton, CustomHeader } from '../../components';
import { Strings, navigationStrings } from '../../constants';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';
import styling from './TransacationDetailStyle';
import { useDispatch, useSelector } from 'react-redux';
import { showLoader } from '../../redux/actions/user';
import { getBankLetter, getProductCard } from '../../redux/actions/card';
import { showMessage } from 'react-native-flash-message';

// import RNFetchBlob from 'rn-fetch-blob';
import { getPdf } from '../../redux/actions/tansaction';
import { Fonts, Icons } from '../../assets';
import images from '../../assets/images';
import { TouchableOpacity } from 'react-native';
import moment from 'moment';
import { WebView } from '../../components/Webview/Webview';
// import Share from 'react-native-share';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from "expo-permissions"
import * as Sharing from 'expo-sharing'
import * as IntentLauncher from 'expo-intent-launcher';
import axios from 'axios';

const TransacationDetails = ({ navigation }) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const theme = route?.params?.theme;
  const transaction = route?.params?.item;
  const [isDisplay, setIsDisplay] = useState(false)
  const [url, setUrl] = useState("")
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)

  const downloadFile = async (url, fileName) => {
    let remoteUrl = url;
    let localPath = `${FileSystem.documentDirectory}/sample.pdf`;
    FileSystem.downloadAsync(remoteUrl, localPath).then(async ({ uri }) => {
      const contentURL = await FileSystem.getContentUriAsync(uri);
      try {
        if (Platform.OS == 'android') {
          // open with android intent
          await IntentLauncher.startActivityAsync(
            'android.intent.action.VIEW',
            {
              data: contentURL,
              flags: 1,
              type: 'application/pdf',
              // change this with any type of file you want
              // excel sample type
              // 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            }
          );
          // or
          // Sharing.shareAsync(localPath);
        } else if (Platform.OS == 'ios') {
          Sharing.shareAsync(localPath);
        }
      } catch (error) {
        console.log(":::::::::::", error)
        Alert.alert('INFO', JSON.stringify(error));
      }
    });

  }

  const downloadFileWeb = async (url, fileName) => {
    await Linking.openURL(url);
  };

  // const downloadFile = (url, fileName) => {
  //   const { config, fs } = RNFetchBlob;
  //   // const DownloadDir = fs.dirs.DownloadDir;
  //   // const options = {
  //   //   fileCache: true,
  //   //   addAndroidDownloads: {
  //   //     useDownloadManager: true,
  //   //     notification: true,
  //   //     path: `${DownloadDir}/${fileName}`,
  //   //     description: 'Downloading file',
  //   //   },
  //   // };
  //   // config(options)
  //   //   .fetch('GET', url)
  //   //   .then((res) => {
  //   //     if (Platform.OS === 'android') {
  //   //       // FileViewer.open(res.path())
  //   //       // .then(() => {
  //   //       //   console.log('File opened successfully');
  //   //       // })
  //   //       // .catch((error) => {
  //   //       //   console.error(`Error opening file: ${error}`);
  //   //       // });
  //   //     } else {
  //   //       console.log('The file saved to ', res?.respInfo?.redirects[0]);
  //   //       setIsDisplay(true)
  //   //       setUrl(url)
  //   //     }
  //   // You can now use the downloaded file by passing the file path to other functions or components
  //   // });
  // };

  const getLetter = async () => {
    await dispatch(showLoader(true))
    let data = {
      id: transaction?.uuid,
      transaction_type: "posted"
    }
    let res = await getPdf(data)
    await dispatch(showLoader(false))
    if (res?.data?.data["bank-letter"]?.status === 0) {
      showMessage({
        message: "There is no transaction details right now.",
        type: "danger",
      });
    } else {
      Platform.OS === "web" ?
        downloadFileWeb(res?.data?.data?.["pdf-url"], `tran_detail_${transaction?.uuid}.pdf`) :
        downloadFile(res?.data?.data?.["pdf-url"], `tran_detail_${transaction?.uuid}.pdf`);
    }
  }

  const getHeadText = (item) => {
    if (item?.type === 'ach') {
      return `${item?.front_user_name}`
    } else if (item?.type === 'INTERNAL_TRANSFER') {
      return `Transfer Free`
    } else if (item?.type === 'check') {
      return `Deposit Cheque`
    } else if (item?.type === 'CARD') {
      return `${item?.merchant?.name}`
    } else {
      return `${item?.front_user_name}`
    }
  }
  const getColor = (item) => {
    if (item?.type === 'ach') {
      return `#DFF7FF`
    } else if (item?.type === 'INTERNAL_TRANSFER') {
      return `#F9FEDA`
    } else if (item?.type === 'check') {
      return `#F9EFFF`
    } else {
      return `#DFF7FF`
    }
  }
  const getImage = (item) => {
    if (item?.type === 'ach') {
      return Icons.ach_transfer
    } else if (item?.type === 'INTERNAL_TRANSFER') {
      return Icons.dollor_transfer
    } else if (item?.type === 'check') {
      return Icons.bank_transfer
    } else if (item?.type === 'CARD') {
      return Icons.credit_card
    } else {
      return Icons.ach_transfer
    }
  }

  const openShare = async () => {
    let options = {
      type: 'pdf',
      url: Platform.OS === 'android' ? 'file://' + url : url // (Platform.OS === 'android' ? 'file://' + filePath)
    };
    const shareOptions = {
      title: 'Share via',
      message: 'Share Pdf',
      url: url,
      // social: Share.Social.WHATSAPP,
      // whatsAppNumber: "+91 8980386001",  // country code + phone number
      // filename: 'test', // only for base64 file in Android
    };
    // await Share.open(options);
    // Share.open(shareOptions)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     err && console.log(err);
    //   });
  }
  return (
    <View style={styles.screen}>
      <CustomHeader theme={theme} headerTitle={"Transaction"} onPressBack={() => navigation.goBack()} />
      {/* <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Text style={[styles.cardItemTitle, { fontSize: 16, color: '#000000' }]}>
            {"This transaction will include the following information."}
          </Text>
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"ACCOUNT OWNER"}
            </Text>
            <Text style={styles.amountText}>
              {userDetails?.data?.personDetail?.[0]?.first_name} {userDetails?.data?.personDetail?.[0]?.last_name}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"RECEIVER ACCOUNT NAME"}
            </Text>
            <Text style={styles.amountText}>
              {transaction?.front_user_name}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"AMOUNT"}
            </Text>
            <Text style={[styles.amountText, { color: transaction?.front_user_dc_sign !== 'debit' ? 'red' : 'green' }]}>
              {transaction?.amount_text}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"TYPE"}
            </Text>
            <Text style={styles.amountText}>
              {transaction?.front_user_dc_sign.toUpperCase()}ED
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"TRANSFER TYPE"}
            </Text>
            <Text style={styles.amountText}>
              {transaction?.type.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"Id"}
            </Text>
            <Text style={styles.amountText}>
              {transaction?.uuid}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <CustomButton
          theme={theme}
          buttonTitle={"Download Transacton"}
          buttonStyle={styles.continueButton}
          onBtnPress={() => getLetter()}
        />
      </View> */}
      <ScrollView style={styles.container}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardTTxt}>Transaction Summery</Text>
          <View style={styles.row}>
            <View style={styles.cardFirst}>
              <View style={[styles.cardImg, { backgroundColor: getColor(transaction) }]}>
                <Image source={getImage(transaction)} style={styles.img} resizeMode='contain' />
              </View>
              <View style={{ marginLeft: moderateScale(15) }}>
                <Text style={styles.txt}>{getHeadText(transaction)}</Text>
                <Text style={styles.txt2}>{moment(transaction?.transaction_time).format('LLLL')}</Text>
              </View>
            </View>
            <View style={styles.cardSecond}>
              <Text style={[styles.sTxt, { color: transaction?.front_user_dc_sign === 'credit' ? 'red' : 'green' }]}>{transaction?.amount_text}</Text>
            </View>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <Text style={styles.cardTTxt}>Other Details</Text>
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"TYPE"}
            </Text>
            <Text style={styles.amountText}>
              {transaction?.front_user_dc_sign.toUpperCase()}ED
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"TRANSFER TYPE"}
            </Text>
            <Text style={styles.amountText}>
              {transaction?.type.toUpperCase()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"Id"}
            </Text>
            <Text style={styles.amountText}>
              {transaction?.uuid}
            </Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <Text style={styles.cardTTxt}>Actions</Text>
          <TouchableOpacity style={styles.touch} onPress={() => getLetter()}>
            <Text style={styles.touchTxt}>View as PDF</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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

export default TransacationDetails;
