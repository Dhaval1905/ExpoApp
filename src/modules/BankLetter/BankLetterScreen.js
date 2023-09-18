import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { Linking, Text, View, Image, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomButton, CustomHeader } from '../../components';
import { Strings, navigationStrings } from '../../constants';
import { Colors, horizontalScale, moderateScale } from '../../theme';
import styling from './BankLetterStyle';
import { useDispatch, useSelector } from 'react-redux';
import { showLoader } from '../../redux/actions/user';
import { getBankLetter, getProductCard } from '../../redux/actions/card';
import { showMessage } from 'react-native-flash-message';
// import FileViewer from "react-native-file-viewer";
// import RNFetchBlob from 'rn-fetch-blob';
import { Icons } from '../../assets';

const BankLetterScreen = ({ navigation }) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const theme = route?.params?.theme;
  const styles = styling(theme);
  const userDetails = useSelector(state => state?.user?.login)
  return (
    <View style={styles.screen}>
      <CustomHeader theme={theme} onPressBack={() => navigation.goBack()} />
      <View style={styles.container}>
        {/* <Ionicons
          name={'newspaper'}
          size={moderateScale(100)}
          color={Colors[theme]?.black}
        /> */}
        {/* <Text style={styles.bankLetter}>{Strings.bankLetter}</Text> */}
        <Image source={Icons.bankLetter} style={{ height: Platform.OS === "web" ? 150 : horizontalScale(150), width: Platform.OS === "web" ? 150 : horizontalScale(150) }} resizeMode='contain' />
        <Text style={styles.bankLetterNote}>{Strings.bankLetterNote}</Text>
      </View>
      <View style={styles.bottomView}>
        <CustomButton
          theme={theme}
          buttonTitle={Strings.continue}
          buttonStyle={styles.continueButton}
          onBtnPress={() => navigation.navigate(navigationStrings.BankLetterDetails)}
        />
      </View>
    </View>
  );
};

export default BankLetterScreen;
