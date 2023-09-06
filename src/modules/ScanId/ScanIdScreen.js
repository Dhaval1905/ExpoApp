import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Dimensions, Modal, SafeAreaView, Text, TouchableOpacity, View,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CustomButton, CustomHeader, MoveMoneyCard} from '../../components';
import {Strings, navigationStrings} from '../../constants';
import {Colors, horizontalScale, moderateScale} from '../../theme';
import styling from './ScanIdStyles';
import {launchCamera} from 'react-native-image-picker';
import { Icons } from '../../assets';
import { createDocument, setCheque } from '../../redux/actions/ach';
import { showLoader } from '../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

const ScanIdScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const dispatch=useDispatch()
  const userDetails = useSelector(state => state?.user?.login)

  const [isFlashOn, setIsFlashOn] = useState(false);
  const [exitModal, setExitModal] = useState(false);
  const [frontSide, setFrontSide] = useState("");
  const [backSide, setBackSide] = useState("");
  const [frontImage,setFrontImage]=useState('')
  const [backImage,setBackImage]=useState('')

 const takePhoto = async (type) => {
   launchCamera({
    mediaType:'photo'
  })
    .then(async image => {
      await dispatch(showLoader(true))
      const formData = new FormData();
      formData.append('file', {
        uri: image?.assets?.[0]?.uri,
        type: 'image/jpeg',
        name: image?.assets?.[0]?.fileName  
      });
      formData.append('encryption',"REQUIRED");
      let res=await createDocument(formData)
      await dispatch(showLoader(false))
      if(res?.data?.status===1){
        if(type==='front'){
          setFrontSide(res?.data?.data?.id)
          setFrontImage(image?.assets?.[0]?.uri)
        }else{
          setBackSide(res?.data?.data?.id)
          setBackImage(image?.assets?.[0]?.uri)
        }
      }else{
        showMessage({
          message: "Something went worng!",
          type: "danger",
      });
      }
    })
    .catch(error => {
      console.log('onSelectCamera_error--->', error);
    });
  };

  const submitCheck=async()=>{
    await dispatch(showLoader(true))
    let data={
      account_id: userDetails?.data?.accountDetail?.[0]?.id,
      back_image_id: backSide,
      deposit_currency :"USD",
      check_amount: JSON.parse(route?.params?.amount),
      front_image_id: frontSide,
      person_id: userDetails?.data?.personDetail?.[0]?.id
    }
    let res=await setCheque(data)
    await dispatch(showLoader(false))
    navigation.goBack()
    if(res?.response?.data?.status===0){
      showMessage({
        message: res?.response?.data?.message,
        type: "danger",
    });
    }else{
      showMessage({
        message: "Cheque submited successfully!",
        type: "success",
    });
    navigation.reset({
      index: 0,
      routes: [{ name: navigationStrings.BOTTOMTABSNAV }],
    });
  }
  }
  return (
    <View style={styles.screen}>
      <View style={styles.headerParent}>
        <CustomHeader
          theme={theme}
          headerTitle={Strings.scanId}
          headerTitleStyle={styles.headerTitle}
          backBtnStyle={styles.backBtnStyle}
          onPressBack={() =>navigation.goBack()}
        />
      </View>
      <View style={styles.container}>
      <MoveMoneyCard
          theme={theme}
          title={"Front Side"}
          subTitle={"Click photo of front side of cheque."}
          icon={Icons.deposit_check}
          onPressCard={() => takePhoto("front")}
          cardStyle={{height:horizontalScale(120)}}
          viewBackground="#FFE8EC"
        />
        {frontImage &&
        <Image 
        source={{uri:frontImage}}
        style={styles.image}
        />
        }
        <MoveMoneyCard
          theme={theme}
          title={"Back Side"}
          subTitle={"Click photo of back side of cheque."}
          icon={Icons.deposit_check}
          onPressCard={() => takePhoto('back')}
          cardStyle={{height:horizontalScale(120)}}
          viewBackground="#FFE8EC"
        />
         {backImage &&
        <Image 
        source={{uri:backImage}}
        style={styles.image}
        />
        }
      </View>
      <Modal visible={exitModal} transparent>
        <SafeAreaView style={styles.modalParent}>
          <View style={styles.modalCard}>
            <View style={styles.cardTitleParent}>
              <Text style={styles.cardTitle}>{Strings.cancelCapture}</Text>
            </View>
            <View style={styles.cardSubtitleParent}>
              <Text style={styles.exitNote}>{Strings.exitNote}</Text>
            </View>
            <View style={styles.cardButtonsParent}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setExitModal(false);
                  navigation.goBack();
                }}>
                <Text style={styles.modalButtonText}>
                  {Strings.positiveNote}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setExitModal(false);
                }}>
                <Text style={styles.modalButtonText}>
                  {Strings.nagativeNote}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
      <CustomButton
          theme={theme}
          buttonTitle={"Submit Cheque"}
          buttonStyle={styles.continueButton}
          onBtnPress={()=>submitCheck()}
        />
    </View>
  );
};

export default ScanIdScreen;
