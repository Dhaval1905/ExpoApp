import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styling from './UsersStyle';

const UsersScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <View style={styles.headerParent}>
        <CustomHeader
          theme={theme}
          headerTitle={Strings.users}
          onPressBack={() => navigation.goBack()}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.ADDUSERREQ)}>
          <Feather
            name="user-plus"
            size={moderateScale(24)}
            color={Colors[theme]?.blue}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
          <View>
            <Text style={styles.username}>{'Username'}</Text>
            <Text style={styles.usermail}>{'User Email'}</Text>
          </View>
          <Text style={styles.userType}>{'User type'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UsersScreen;
