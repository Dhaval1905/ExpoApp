import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Icons } from '../../assets';
import { CustomHeader } from '../../components';
import { Strings } from '../../constants/Strings';
import { Colors, moderateScale } from '../../theme';
import styling from './TransferVirtualCardStyle';

const TransferVirtualCardScreen = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.fundAccount}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.card}>
        <Text style={styles.descriptionTitle}>{Strings.addFundsCard}</Text>
        <Text style={styles.descriptionSubtitle}>{Strings.copyPasteCard}</Text>
        <TouchableOpacity style={styles.socialCard}>
          <View style={styles.socialIconParent}>
            <Image source={Icons.venmo} style={styles.socialIcon} />
          </View>
          <View style={styles.socialNameParent}>
            <Text style={styles.appTitle}>{Strings.venmo}</Text>
            <Text style={styles.goToApp}>{Strings.goToApp}</Text>
          </View>
          <View style={styles.rightIcon}>
            <Icon
              name={'chevron-right'}
              size={moderateScale(24)}
              color={Colors[theme]?.grey400}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.socialCard}>
          <View style={styles.socialIconParent}>
            <Image source={Icons.paypal} style={styles.socialIcon} />
          </View>
          <View style={styles.socialNameParent}>
            <Text style={styles.appTitle}>{Strings.paypal}</Text>
            <Text style={styles.goToApp}>{Strings.goToApp}</Text>
          </View>
          <View style={styles.rightIcon}>
            <Icon
              name={'chevron-right'}
              size={moderateScale(24)}
              color={Colors[theme]?.grey400}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransferVirtualCardScreen;
