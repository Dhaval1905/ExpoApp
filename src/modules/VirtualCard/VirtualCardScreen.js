import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { Icons } from '../../assets';
import { CustomHeader } from '../../components';
import { navigationStrings, Strings } from '../../constants';
import { getCard, getCardById, update_Card } from '../../redux/actions/card';
import { showLoader } from '../../redux/actions/user';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';
import styling from './VirtualCardStyle';
import { BASE_URL } from '../../utils/constant';
import WebView from 'react-native-webview';
import { showMessage } from 'react-native-flash-message';


const VirtualCardScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  // const cardDetails = route?.params?.item;
  const styles = styling(theme);
  const dispatch = useDispatch()
  const userDetails = useSelector(state => state?.user?.login)
  const [isWebOpen, setIsWebOpen] = useState(false)
  const [cardDetails, setCardDetails] = useState({})
  const [url, setUrl] = useState("")

  useEffect(() => {
    //link-sandbox-44f6a20f-6bf3-4452-96f0-49939f9e0fd5
    (async () => {
      await getCard()
    })()
  }, [])

  const getCard = async () => {
    await dispatch(showLoader(true))
    let res = await getCardById({
      card_id: route?.params?.item?.id
    })
    setCardDetails(res?.data?.data)
    await dispatch(showLoader(false))
  }

  const updateCard = async (cardStatus, reason) => {
    let data = {
      card_id: cardDetails?.id,
      card_status: cardStatus,
      reason: reason,
    }
    await dispatch(showLoader(true))
    let res = await update_Card(data)
    if (res?.response?.data?.status === 0) {
      await dispatch(showLoader(false))
      showMessage({
        message: res?.response?.data?.message,
        type: "danger",
      });
    } else {
      showMessage({
        message: cardStatus === 'ACTIVE' ? "Card activate successfully!" : "Card freeze successfully!",
        type: "success",
      });
      await getCard()
      await dispatch(showLoader(false))
      // navigation.navigate(navigationStrings.RETHINKCARD)
    }
  }
  return (
    <>
      {!isWebOpen ? <View style={styles.screen}>
        <View style={styles.headerParent}>
          <CustomHeader
            theme={theme}
            headerTitle={Strings.virtualCard}
            onPressBack={() => navigation.goBack()}
          />
        </View>
        <View style={styles.container}>
          <LinearGradient
            start={{ x: 0.5, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={userDetails?.data?.accountDetail?.[0]?.customer_type === 'PERSONAL' ? ['#FBD665', '#FBD665'] : ['#E1EBFF', '#E1EBFF']}
            style={styles.virtualCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingHorizontal: 15, paddingVertical: 8 }}>
              <Image source={Icons.appLogo} style={styles.appLogo} resizeMode='contain' />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingBottom: 5 }}>
              <View style={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <View>
                  <Text style={[styles.cardNumber, { fontSize: Platform.OS === 'web' ? 20 : horizontalScale(20) }]}>{`**** **** **** ${cardDetails?.last_four}`}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10, width: '89%' }}>
                  <View>
                    <Text style={styles.cardHolder}>Card Holder</Text>
                    <Text style={styles.cardNumber}>{userDetails?.data?.personDetail?.[0]?.first_name + ' ' + userDetails?.data?.personDetail?.[0]?.last_name}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View >
                      <Text style={styles.cardHolder}>CVC</Text>
                      <Text style={styles.cardNumber}>{`***`}</Text>
                    </View>
                    <View style={{ marginLeft: Platform.OS === 'web' ? 30 : horizontalScale(30) }}>
                      <Text style={styles.cardHolder}>Valid Thru</Text>
                      <Text style={styles.cardNumber}>{`**/**`}</Text>
                    </View>
                  </View>
                </View>
                <Image source={Icons.masterCard} style={styles.masterCard} resizeMode='contain' />
              </View>
              <View style={styles.rightSide}>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.buttonRow}>
            {cardDetails?.card_status === 'ACTIVE' && <TouchableOpacity style={[styles.card, { flex: 0.48 }]} onPress={() => updateCard('SUSPENDED', 'SUS')}>
              <Text style={styles.freezCard}>{Strings.freezCard}</Text>
            </TouchableOpacity>}
            <TouchableOpacity style={[styles.card, { flex: 0.48 }]} onPress={() => {
              setIsWebOpen(true)
              setUrl(`http://dev.rethinkfi.com/get-card-widgets?card_id=${cardDetails?.id}`)
            }} >
              <Text
                style={styles.cardDetails}
              >
                {Strings.cardDetails}
              </Text>
            </TouchableOpacity>
            {cardDetails?.card_status !== 'ACTIVE' && <TouchableOpacity style={[styles.card, { flex: 0.48 }]} onPress={() => {
              // setIsWebOpen(true)
              updateCard('ACTIVE', 'OTH')
              // setUrl(`http://dev.rethinkfi.com/set-pin-widgets?card_id=${cardDetails?.id}&account_id=${cardDetails?.account_id}&customer_id=${cardDetails?.customer_id}`)
            }} >
              <Text style={[styles.freezCard, {}]}>{cardDetails?.card_status === 'ACTIVE' ? "Set Pin" : "Active Card"}</Text>
            </TouchableOpacity>}
          </View>
          {!cardDetails?.is_pin_set && cardDetails?.card_status === 'ACTIVE' && <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.card, { flex: 0.48 }]} onPress={() => {
              setIsWebOpen(true)
              setUrl(`http://dev.rethinkfi.com/set-pin-widgets?card_id=${cardDetails?.id}&account_id=${cardDetails?.account_id}&customer_id=${cardDetails?.customer_id}`)
            }} >
              <Text style={[styles.freezCard, {}]}>{cardDetails?.card_status === 'ACTIVE' ? "Set Pin" : "Active Card"}</Text>
            </TouchableOpacity>
          </View>}
        </View>
      </View> :
        <View style={styles.screen}>
          <TouchableOpacity style={{ position: 'absolute', zIndex: 1, right: 10, top: 10 }} onPress={async () => {
            await getCard()
            setIsWebOpen(false)
          }}>
            <Feather
              name="x-circle"
              color={Colors[theme]?.blue}
              size={moderateScale(25)}
            />
          </TouchableOpacity>
          <WebView source={{ uri: url }} style={{ flex: 1 }} />
        </View>
      }
    </>
  );
};

export default VirtualCardScreen;
