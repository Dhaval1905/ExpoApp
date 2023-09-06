import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomButton, CustomHeader} from '../../components';
import {navigationStrings} from '../../constants';
import {Strings} from '../../constants/Strings';
import {Colors, horizontalScale, moderateScale} from '../../theme';
import styling from './SignEndorseStyle';

const SignEndorseScreen = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  const [buttonDisable, setButtonDisable] = useState(true);

  return (
    <View style={styles.screen}>
      <CustomHeader
        theme={theme}
        headerTitle={Strings.depositCheck}
        onPressBack={() => navigation.goBack()}
      />
      <View style={{flex:1,paddingHorizontal:horizontalScale(8),alignItems:'center'}}>
      <Text style={styles.signEndorseCheck}>{Strings.signEndorseCheck}</Text>
      <Text style={[styles.commonText, styles.signEndorseNOne]}>
        {Strings.signEndorseNOne}
      </Text>
      <Text style={styles.commonText}>{Strings.signEndorseNTwo}</Text>
      <View style={styles.continueParent}>
        <View style={styles.signEndorseNThreeParent}>
          <TouchableOpacity style={{
            flexDirection:'row'
          }} onPress={() => setButtonDisable(!buttonDisable)}>
            <MaterialCommunityIcons
              name={
                buttonDisable
                  ? 'checkbox-blank-circle'
                  : 'check-circle'
              }
              size={moderateScale(24)}
              color={buttonDisable?"#E1E1E1":Colors[theme]?.blue}
            />
          <Text style={styles.signEndorseNThree}>
            {Strings.signEndorseNThree}
          </Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          theme={theme}
          buttonDisable={buttonDisable}
          buttonTitle={Strings.continue}
          buttonTitleStyle={styles.continue}
          buttonStyle={[
            styles.continueButtonStyle,
            buttonDisable && {backgroundColor: Colors[theme].blue50},
          ]}
          onBtnPress={() => {
            navigation.navigate(navigationStrings.DEPOSITCHECKNAME);
          }}
        />
      </View>
    </View>
    </View>
  );
};

export default SignEndorseScreen;
