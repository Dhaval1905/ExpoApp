import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styling from './ReportMissingCardStyle';

const ReportMissingCardScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader theme={theme} onPressBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <FontAwesome
          name={'credit-card'}
          color={Colors[theme]?.black}
          size={moderateScale(72)}
        />
        <Text style={styles.reportMissingCard}>
          {Strings?.reportMissingCard}
        </Text>
        <Text style={styles.notes}>{Strings?.reportMissingCardNote}</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{Strings.callUS?.toUpperCase()}</Text>
          <View style={styles.cardItem}>
            <Text style={styles.cardItemTitle}>{Strings.inUnitedStates}</Text>
            <TouchableOpacity style={styles.cardItemLeftIcon}>
              <FontAwesome
                name={'phone'}
                color={Colors[theme]?.blue}
                size={moderateScale(24)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <View style={styles.cardItem}>
            <Text style={styles.cardItemTitle}>{Strings.international}</Text>
            <TouchableOpacity style={styles.cardItemLeftIcon}>
              <FontAwesome
                name={'phone'}
                color={Colors[theme]?.blue}
                size={moderateScale(24)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonParent}>
          <CustomButton
            theme={theme}
            buttonTitle={Strings.orderReplacementCard}
            buttonStyle={styles.buttonStyle}
            onBtnPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default ReportMissingCardScreen;
