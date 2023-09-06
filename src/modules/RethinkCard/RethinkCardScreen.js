import {useRoute} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import {Colors, horizontalScale, moderateScale} from '../../theme';
import styling from './RethinkCardStyle';
import { getProductCard } from '../../redux/actions/card';
import { useDispatch, useSelector } from 'react-redux';
import { showLoader } from '../../redux/actions/user';
import { Fonts } from '../../assets';

const RethinkCardScreen = ({navigation}) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)
  const [virtualCard,setVirtualCard] =useState([])
  const [physicalCard,setPhysicalCard] =useState([])

  useEffect(() => {
    (async () => {
      const unsubscribe = navigation.addListener('focus',async () => {
        // Place your code here to execute when the user navigates back to this screen
        await dispatch(showLoader(true))
        let body = {
           customer_id: userDetails?.data?.personDetail?.[0]?.id,
           limit:"100",
           page_token:"",
       }
        let res=await getProductCard(body)
       await dispatch(showLoader(false))
        if(res?.data?.data?.cards){
        const filteredData = res?.data?.data?.cards.filter(item => item.form === 'VIRTUAL');
        const filteredData1 = res?.data?.data?.cards.filter(item => item.form === 'PHYSICAL');
        setVirtualCard(filteredData)
        setPhysicalCard(filteredData1)
        }
      });
  
      return unsubscribe;
    
})()
  }, [])
  

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.rethinkCard}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text style={styles.cardT}>{Strings.virtualCard?.toUpperCase()}</Text>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate(navigationStrings?.CARDDETAIL,{virtualCard:virtualCard,isPhysical:false})}>
          <View style={styles.innerView}>
            <View style={{
              height:horizontalScale(50),
              width:horizontalScale(50),
              borderRadius:horizontalScale(90),
              backgroundColor:'#C3EBEE',
              justifyContent:'center',
              alignItems:'center'
            }}>
            <FontAwesome
              name={'credit-card'}
              color={Colors[theme]?.black}
              size={moderateScale(24)}
            />
            </View>
            <Text style={styles.cardTitle}>{Strings.virtualCard}</Text>
          </View>
          <TouchableOpacity style={{alignSelf:'flex-end',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            {/* <Text style={{color:'#000',fontFamily:Fonts.regular,lineHeight:20}}>{"Get Inside"}</Text> */}
          <FontAwesome
            name={'angle-right'}
            color={Colors[theme]?.black}
            size={moderateScale(20)}
            style={{marginLeft:8}}
          />
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.cardT}>{Strings.physicalCard?.toUpperCase()}</Text>
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate(navigationStrings?.CARDDETAIL,{virtualCard:physicalCard,isPhysical:true})
          }>
          <View style={styles.innerView}>
          <View style={{
              height:horizontalScale(50),
              width:horizontalScale(50),
              borderRadius:horizontalScale(90),
              backgroundColor:'#C3EBEE',
              justifyContent:'center',
              alignItems:'center'
            }}>
            <FontAwesome
              name={'credit-card'}
              color={Colors[theme]?.black}
              size={moderateScale(24)}
            />
            </View>
            <Text style={styles.cardTitle}>{Strings.physicalCard}</Text>
          </View>
          <TouchableOpacity style={{alignSelf:'flex-end',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <FontAwesome
            name={'angle-right'}
            color={Colors[theme]?.black}
            size={moderateScale(20)}
            style={{marginLeft:8}}
          />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate(navigationStrings.IssueCard)
          }>
          <View style={styles.innerView}>
          <View style={{
              height:horizontalScale(50),
              width:horizontalScale(50),
              borderRadius:horizontalScale(90),
              backgroundColor:'#C3EBEE',
              justifyContent:'center',
              alignItems:'center'
            }}>
            <FontAwesome
              name={'credit-card'}
              color={Colors[theme]?.black}
              size={moderateScale(24)}
            />
            </View>
            <Text style={styles.cardTitle}>{"Issue Card"}</Text>
          </View>
          <TouchableOpacity style={{alignSelf:'flex-end',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <FontAwesome
            name={'angle-right'}
            color={Colors[theme]?.black}
            size={moderateScale(20)}
            style={{marginLeft:8}}
          />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RethinkCardScreen;
