import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native'
import { Icons } from '../../assets'
import styling from './SplashScreenStyle'
import * as Animatable from 'react-native-animatable'
import { navigationStrings } from '../../constants'
import { get, save } from '../../utils/Storage'
import * as constants from '../../utils/constant'
import { setToken } from '../../httpClient/ClientHelper'
import { useDispatch } from 'react-redux'
import { showLoader } from '../../redux/actions/user'
import { moderateScale } from '../../theme'

const SplashScreenStyle = ({ navigation }) => {
  const route = useRoute()
  const dispatch = useDispatch()
  const theme = route?.params?.theme
  const styles = styling(theme)
  React.useEffect(() => {
    (async () => {
      await dispatch(showLoader(false))

      requestCameraAndAudioPermission()
      let login_res = await get(constants.LOGIN_TOKEN)
      let otpVerify = await get("otpVerify")
      setTimeout(async () => {
        if (login_res && otpVerify) {
          await setToken(login_res?.jwt_token)
          dispatch({
            type: constants.LOGIN,
            payload: login_res,
          })
          navigation.navigate(navigationStrings.BOTTOMTABSNAV)
        } else {
          await save('otpVerify', false)
          navigation.navigate(navigationStrings.AUTHSTACK)
        }
      }, 4000)
    })()
  }, [])

  const requestCameraAndAudioPermission = async () => {
    try {
      // if (Platform.OS === "android") {
      //   const granted = await PermissionsAndroid.requestMultiple([
      //     PermissionsAndroid.PERMISSIONS.CAMERA,
      //     PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      //   ])
      //   if (
      //     granted['android.permission.RECORD_AUDIO'] ===
      //     PermissionsAndroid.RESULTS.GRANTED &&
      //     granted['android.permission.CAMERA'] ===
      //     PermissionsAndroid.RESULTS.GRANTED
      //   ) {
      //     console.log('You can use the cameras & mic')
      //   } else {
      //     console.log('Permission denied')
      //   }
      // }
      // else {
      //   console.log("Not granted")
      // }
    } catch (err) {
      console.log('permission--->', err)
    }
  }


  return (
    <View style={styles.screen}>
      <Animatable.Image source={Icons.appLogo} animation='zoomIn' delay={50} iterationDelay={50} resizeMode={'contain'} style={styles.appLogo} />
      <Text style={styles.headText}>Welcome</Text>
      <Image source={require("../../assets/images/Loader.gif")} style={{ position: 'absolute', bottom: 30, height: moderateScale(40), width: moderateScale(40), alignSelf: 'center', }} resizeMode='contain' />
      {/* <Animatable.Text animation="fadeIn" duration={4000} style={[styles.secondText, { alignSelf: 'center', color: 'black', fontWeight: '700', position: 'absolute', bottom: 30 }]}>Loading...</Animatable.Text> */}
    </View>
  )
}

export default SplashScreenStyle
