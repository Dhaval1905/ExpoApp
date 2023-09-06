import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CustomHeader } from '../../components';
import { navigationStrings } from '../../constants';
import { manageRethinkCard, Strings } from '../../constants/Strings';
import { Colors, moderateScale } from '../../theme';
import styling from './RethinkPhysicalStyle';
import * as constants from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { getProductCard, issue_Card } from '../../redux/actions/card';

const RethinkPhysicalScreen = ({ navigation }) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  const [cardProductId, setCardProductId] = useState('')


  const issueCard = () => {
  
  }
  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.rethinkCard}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text style={styles.manageDebitCard}>
          {Strings.manageDebitCard?.toUpperCase()}
        </Text>
        <View style={styles.card}>
          {manageRethinkCard?.map((value, index) => {
            const onPress = async() => {
              if (value === 'Issue Card') {
   
                navigation.navigate(navigationStrings.IssueCard);
              }
            };
            return (
              <View key={index}>
                <TouchableOpacity style={styles.cardItem} onPress={onPress}>
                  <Text style={styles.cardItemName}>{value}</Text>
                  <FontAwesome
                    name={'angle-right'}
                    color={Colors[theme]?.grey500}
                    size={moderateScale(24)}
                  />
                </TouchableOpacity>
                {index !== manageRethinkCard?.length - 1 ? (
                  <View style={styles.divider} />
                ) : (
                  <></>
                )}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default RethinkPhysicalScreen;
