import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styling from './SelectIdAddStyle';

const SelectIdAddScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.selectIdAdd}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text style={styles.blackText}>{Strings.idMustBe}</Text>
        <Text style={styles.blackText}>{`\u25CF ${Strings.unexpired}`}</Text>
        <Text
          style={
            styles.blackText
          }>{`\u25CF ${Strings.includesYourPhoto}`}</Text>
        <Text
          style={[
            styles.blackText,
            styles.bottomSpace,
          ]}>{`\u25CF ${Strings.notTempId}`}</Text>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate(navigationStrings.USDRIVERLICENSE);
          }}>
          <FontAwesome
            name="drivers-license-o"
            size={moderateScale(28)}
            color={Colors[theme]?.black}
          />
          <Text style={styles.cardTitle}>{Strings.usDriverLicense}</Text>
          <Feather name={'chevron-right'} size={moderateScale(20)} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <FontAwesome5
            name="passport"
            size={moderateScale(28)}
            color={Colors[theme]?.black}
          />
          <Text style={styles.cardTitle}>{Strings.passport}</Text>
          <Feather name={'chevron-right'} size={moderateScale(20)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectIdAddScreen;
