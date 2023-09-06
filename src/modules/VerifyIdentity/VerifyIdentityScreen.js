import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icons} from '../../assets';
import {CustomButton, CustomHeader} from '../../components';
import {navigationStrings, Strings} from '../../constants';
import {Colors, moderateScale} from '../../theme';
import styling from './VerifyIdentityStyle';

const VerifyIdentityScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.verifyIdentity}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <Image source={Icons.takePhoto} style={styles.userLogo} />
        <Text style={styles.title}>{Strings.addYourId}</Text>
        <Text style={styles.subTitle}>{Strings.verifyIdentitySubtitle}</Text>
        <View style={styles.yourIdentity}>
          <Text style={styles.verifyYourIdentity}>
            {Strings.verifyYourIdentity?.toUpperCase()}
          </Text>
          <MaterialCommunityIcons
            name={'information-outline'}
            size={moderateScale(24)}
            color={Colors[theme]?.blue}
          />
        </View>
        <Text style={styles.subInfo}>{`1. ${Strings.takePhotoId}`}</Text>
        <Text style={styles.subInfo}>{`2. ${Strings.takephotoYourself}`}</Text>
      </View>
      <View style={styles.verifyIdentityParent}>
        <CustomButton
          theme={theme}
          buttonTitle={Strings.verifyIdentity}
          buttonStyle={styles.verifyIdentityButton}
          buttonTitleStyle={styles.verifyIdentity}
          onBtnPress={() => navigation.navigate(navigationStrings.SELECTIDADD)}
        />
      </View>
    </View>
  );
};

export default VerifyIdentityScreen;
