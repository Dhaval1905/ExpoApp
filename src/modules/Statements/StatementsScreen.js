import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, FlatList, Image, Modal, SafeAreaView, Platform, Dimensions } from 'react-native';
import { CustomHeader } from '../../components';
import { Strings } from '../../constants';
import styling from './StatementsStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';
import { useRoute } from '@react-navigation/native';
import { showLoader } from '../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { getStatement, getStatementById } from '../../redux/actions/ach';
import { showMessage } from 'react-native-flash-message';
import FileViewer from "react-native-file-viewer";
// import RNFetchBlob from 'rn-fetch-blob';
import { Icons } from '../../assets';
import { WebView } from 'react-native-webview';
// import Share from 'react-native-share';
const StatementsScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const [isDisplay, setIsDisplay] = useState(false)
  const [url, setUrl] = useState("")
  const dispatch = useDispatch()
  const userDetails = useSelector(state => state?.user?.login)
  const [statementData, setStatementData] = useState([])

  useEffect(() => {
    (async () => {
      await dispatch(showLoader(true))
      setTimeout(async () => {
        let data = {
          account_id: userDetails?.data?.accountDetail?.[0]?.id,
          tenant: "",
          limit: "100",
          page_token: ""
        }
        let res = await getStatement(data)
        setStatementData(res?.data?.data?.statements || [])
        await dispatch(showLoader(false))
      }, 1000);
    })()
  }, [])
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
  const downloadStatement = async (item) => {
    await dispatch(showLoader(true))
    const date = new Date(item?.start_date);
    const month = date.toLocaleString('default', { month: 'long' });
    let data = {
      statement_id: item?.id,
      statement_or_pdf: "pdf"
    }
    let res = await getStatementById(data)
    await dispatch(showLoader(false))
    if (res?.data?.status === 1) {
      downloadFile(res?.data?.data["pdf-url"], `statement_${month}.pdf`);
    } else {
      showMessage({
        message: "There is something went worng!",
        type: "danger",
      });
    }
  }


  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.statements}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        {statementData && statementData.length > 0 && <Text style={styles.statementPeriod}>
          {Strings.statementPeriod?.toUpperCase()}
        </Text>}
        {statementData && statementData.length > 0 ? <View style={styles.card}>
          <FlatList
            data={statementData}
            renderItem={({ item }) => {
              const date = new Date(item?.start_date);
              const month = date.toLocaleString('default', { month: 'long' });
              return (
                <TouchableOpacity style={styles.cardItem} onPress={() => downloadStatement(item)}>
                  <View style={{
                    height: verticalScale(60), width: verticalScale(60), backgroundColor: "#FFF9CB", borderRadius: verticalScale(80), justifyContent: 'center', alignItems: 'center'
                  }}>
                    <Image source={Icons.statement_pdf} style={{ height: horizontalScale(25), width: horizontalScale(25) }} resizeMode='contain' />
                  </View>
                  <Text style={[styles.cardItemTitle, { marginLeft: horizontalScale(16) }]}>{`${month} 2022`}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
          :
          <>
            <Image source={Icons.no_statement} style={{ alignSelf: 'center', height: horizontalScale(100), width: horizontalScale(100), marginTop: verticalScale(180) }} />
            <Text style={[styles.cardItemTitle, { alignSelf: 'center', fontSize: 24, }]}>No statement right now.</Text>
          </>
        }
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

export default StatementsScreen;
