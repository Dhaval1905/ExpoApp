import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Icons} from '../../assets';
import {CustomButton, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {Colors, moderateScale, verticalScale} from '../../theme';
import styling from './ReferralsStyle';

const ReferralsScreens = ({navigation}) => {
  const route = useRoute();
  const theme = route?.params?.theme;
  const styles = styling(theme);

  const [isDisable, setIsdisable] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.headerParent}>
        <CustomHeader
          theme={theme}
          headerTitle={Strings.referralsDashboard}
          onPressBack={() => navigation.goBack()}
        />
        <TouchableOpacity>
          <Ionicons
            name={'share-outline'}
            color={Colors[theme]?.black}
            size={moderateScale(24)}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.earnCard}>
          <Text style={styles.earnCardTitle}>{`$0.00`}</Text>
          <Text style={styles.earnCardSubtitle}>{Strings.earned}</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.referNoteParent}>
            <Text style={styles.referNote}>{Strings.referNote}</Text>
            <TouchableOpacity style={styles.seeTermsParent}>
              <Text style={styles.seeTerms}>{Strings.seeTerms}</Text>
              <FeatherIcon
                name={'chevron-right'}
                size={moderateScale(20)}
                color={Colors[theme]?.blue}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.referBusinessParent}>
            <Image source={Icons.referBusiness} style={styles.referBusiness} />
          </View>
        </View>
        <View style={styles.sendInviteCard}>
          <View style={styles.nameRow}>
            <View style={{flex: 0.48}}>
              <Text style={styles.commonText}>
                {Strings.firstName?.toUpperCase()}
              </Text>
              <TextInput style={styles.textInput} />
            </View>
            <View style={{flex: 0.48}}>
              <Text style={styles.commonText}>
                {Strings.lastName?.toUpperCase()}
              </Text>
              <TextInput style={styles.textInput} />
            </View>
          </View>
          <Text style={[styles.commonText, {marginTop: verticalScale(10)}]}>
            {Strings.email?.toUpperCase()}
          </Text>
          <TextInput style={styles.textInput} />
          <View style={styles.sendInviteParent}>
            <CustomButton
              theme={theme}
              buttonTitle={Strings.sendInvite}
              buttonTitleStyle={styles.sendInvite}
              buttonStyle={[
                styles.sendInviteButtonStyle,
                isDisable && {opacity: 0.5},
              ]}
              buttonDisable={isDisable}
            />
            <TouchableOpacity style={styles.searchParent}>
              <FontistoIcon
                name="search"
                size={moderateScale(20)}
                color={Colors[theme]?.white}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Image source={Icons.referBusiness} style={styles.logo} />
        <Text style={styles.noInvite}>{Strings.noInvite}</Text>
      </View>
    </View>
  );
};

export default ReferralsScreens;
