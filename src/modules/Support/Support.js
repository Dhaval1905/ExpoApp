import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, FlatList, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CustomHeader } from '../../components';
import { navigationStrings, Strings } from '../../constants';
import { Colors, horizontalScale, moderateScale } from '../../theme';
import styling from './SupportStyle';
import { getCardById, getProductCard } from '../../redux/actions/card';
import { useDispatch, useSelector } from 'react-redux';
import { showLoader } from '../../redux/actions/user';
import { Fonts } from '../../assets';

const Support = ({ navigation }) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)


  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={'Support'}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate(navigationStrings?.SUPPORTTICKET)}>
          <View style={styles.innerView}>
            <FontAwesome
              name={'user-o'}
              color={Colors[theme]?.black}
              size={Platform.OS === "web" ? 20 : moderateScale(20)}
            />
            <View>
              <Text style={styles.cardTitle}>{`Support Tickets`}</Text>
            </View>
          </View>
          <FontAwesome
            name={'angle-right'}
            color={Colors[theme]?.black}
            size={Platform.OS === "web" ? 24 : moderateScale(24)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate(navigationStrings?.HELPSUPPORT)}>
          <View style={styles.innerView}>
            <FontAwesome
              name={'question-circle-o'}
              color={Colors[theme]?.black}
              size={Platform.OS === "web" ? 20 : moderateScale(20)}
            />
            <View>
              <Text style={styles.cardTitle}>{`Help Center`}</Text>
            </View>
          </View>
          <FontAwesome
            name={'angle-right'}
            color={Colors[theme]?.black}
            size={Platform.OS === "web" ? 24 : moderateScale(24)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Support;
