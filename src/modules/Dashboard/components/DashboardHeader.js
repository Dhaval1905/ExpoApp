import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { Strings } from '../../../constants/Strings';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../../theme';
import styling from './styles/DashboardHeaderStyle';
import { navigationStrings } from '../../../constants';

const DashboardHeader = ({
  theme,
  navigation
}) => {
  const styles = styling(theme);
  const accountInfo = useSelector(state => state?.user?.login)
  var names = [accountInfo?.data?.personDetail?.[0]?.first_name,accountInfo?.data?.personDetail?.[0]?.last_name],
  initials = names[0].substring(0, 1).toUpperCase();
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return (
    <View style={[styles.card,{paddingHorizontal:horizontalScale(15),marginTop:horizontalScale(20)}]}>
    <View style={styles.card}>
        <View style={styles.circleView}>
       {initials? <Text style={[styles.detailText,{color:'#6DD8FC',alignSelf:'center'}]} >{initials}</Text>
            :<Icon name='person' size={25} color={"#000"}></Icon>}
        </View>
        <View>
        <Text style={styles.helloStyle}>Hello</Text>
        <Text style={styles.headerText}>{accountInfo?.data?.personDetail?.[0]?.first_name} {accountInfo?.data?.personDetail?.[0]?.last_name}</Text>
        </View>
    </View>
        <Icon name='settings-outline' size={30} color={"#000"} onPress={()=>navigation.push(navigationStrings.SETTINGS)}/>
    </View>
  );
};

export default DashboardHeader;
