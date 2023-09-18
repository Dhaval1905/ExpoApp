import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, FlatList, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CustomHeader } from '../../components';
import { navigationStrings, Strings } from '../../constants';
import { Colors, horizontalScale, moderateScale } from '../../theme';
import styling from './CardDetailStyle';
import { getCardById, getProductCard } from '../../redux/actions/card';
import { useDispatch, useSelector } from 'react-redux';
import { showLoader } from '../../redux/actions/user';
import { Fonts } from '../../assets';

const CardDetail = ({ navigation }) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)
  const [virtualCard, setVirtualCard] = useState(route?.params?.virtualCard || [])

  useEffect(() => {
    (async () => {
      const unsubscribe = navigation.addListener('focus', async () => {
        await dispatch(showLoader(true))
        let body = {
          customer_id: userDetails?.data?.personDetail?.[0]?.id,
          limit: "100",
          page_token: "",
        }
        let res = await getProductCard(body)
        await dispatch(showLoader(false))
        if (res?.data?.data?.cards) {
          const filteredData = res?.data?.data?.cards.filter(item => item.form === 'VIRTUAL');
          const filteredData1 = res?.data?.data?.cards.filter(item => item.form === 'PHYSICAL');
          setVirtualCard(route?.params?.isPhysical ? filteredData1 : filteredData)
        }
      });
      return unsubscribe;
    })()
  }, [])

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={'Card List'}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <FlatList
          data={virtualCard}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate(navigationStrings?.VIRTAULCARD, { item: item })}>
                <View style={styles.innerView}>
                  <View style={{
                    height: Platform.OS === "web" ? 40 : horizontalScale(40),
                    width: Platform.OS === "web" ? 40 : horizontalScale(40),
                    borderRadius: Platform.OS === "web" ? 90 : horizontalScale(90),
                    backgroundColor: '#C3EBEE',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <FontAwesome
                      name={'credit-card'}
                      color={Colors[theme]?.black}
                      size={Platform.OS === "web" ? 20 : moderateScale(20)}
                    />
                  </View>
                  <View>
                    <Text style={styles.cardTitle}>{`**** **** **** ${item?.last_four}`}</Text>
                    <Text style={[styles.cardTitle, { color: item?.card_status === 'ACTIVE' ? Colors[theme].green900 : Colors[theme].red, fontFamily: Fonts.regular }]}>{`${item?.card_status}`}</Text>
                  </View>
                </View>
                <FontAwesome
                  name={'angle-right'}
                  color={Colors[theme]?.black}
                  size={Platform.OS === "web" ? 24 : moderateScale(24)}
                />
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </View>
  );
};

export default CardDetail;
