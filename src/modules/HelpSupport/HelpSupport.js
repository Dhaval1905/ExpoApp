import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { CustomHeader } from '../../components';
import { navigationStrings, businessInformation, Strings } from '../../constants';
import { moderateScale } from '../../theme';
import styling from './HelpSupportStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

const HelpSupport = ({ navigation }) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)
  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={"Help Center"}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.card}>
                <View
                  style={styles.navigateButtons}>
                  <View style={styles.imageParent}>
                  <FeatherIcon name={"mail"} size={moderateScale(26)} color={'#A8A8A8'} />
                  </View>
                  <View style={styles.details}>
                    <Text style={styles.navigateButtonTitle}>{"Email"}</Text>
                    <Text style={styles.navigateButtonSubtitle}>
                      {"ReThink02@gmail.com"}
                    </Text>
                  </View>
                </View>
                <View
                  style={styles.navigateButtons}>
                  <View style={styles.imageParent}>
                  <FeatherIcon name={"smartphone"} size={moderateScale(26)} color={'#A8A8A8'} />
                  </View>
                  <View style={styles.details}>
                    <Text style={styles.navigateButtonTitle}>{"Mobile Phone"}</Text>
                    <Text style={styles.navigateButtonSubtitle}>
                      {"+1454354535"}
                    </Text>
                  </View>
                </View>
        </View>
      </View>
    </View>
  );
};

export default HelpSupport;
