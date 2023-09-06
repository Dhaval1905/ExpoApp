import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Icons} from '../../assets';
import {CustomButton, CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import {verticalScale} from '../../theme';
import styling from './TransferLimitsStyle';

const TransferLimitsScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.transferLimits}
        onPressBack={() => navigation.goBack()}
      />
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"ACH limits for business"}
            </Text>
            <Text style={styles.amountText}>
              {"$5000"}
            </Text>
          </View>
          {/* <View style={styles.divider} /> */}
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"ACH limit for customer"}
            </Text>
            <Text style={styles.amountText}>
              {"$1000"}
            </Text>
          </View>
          {/* <View style={styles.divider} /> */}
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"Card limit for business"}
            </Text>
            <Text style={styles.amountText}>
              {"$10000"}
            </Text>
          </View>
          {/* <View style={styles.divider} /> */}
          <View style={styles.cardItems}>
            <Text style={styles.cardItemTitle}>
              {"Card limit for customer"}
            </Text>
            <Text style={styles.amountText}>
              {"$1000"}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TransferLimitsScreen;
