import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Colors, horizontalScale, moderateScale} from '../../theme';
import styling from './DashboardCardStyle';

const DashboardCard = ({
  title,
  titleStyle,
  subTitle,
  subTitleStyle,
  navigationText,
  navigateTextStyle,
  navigationLogoColor,
  logo,
  backgroundImage,
  cardStyle,
  logoStyle,
  onPressNavigationButton,
  theme,
}) => {
  const styles = styling(theme);

  return (
    <TouchableOpacity style={[styles.card, cardStyle, backgroundImage && {paddingLeft: 0}]} onPress={onPressNavigationButton}>
      <ImageBackground
        source={backgroundImage}
        style={[
          styles.backgroundImage,
          backgroundImage && {},
        ]}>
          <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}} >
            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
        <View style={styles.cardLogoParent}>
          <Image source={logo} style={[styles.cardLogo, logoStyle]} />
        </View>
        <View style={{marginLeft:horizontalScale(25)}}>
            <Text style={[styles.cardTitle, titleStyle]}>{title}</Text>
            <Text style={[styles.cardSubTitle, subTitleStyle]}>{subTitle}</Text>
            </View>
            </View>
        <View style={styles.cardDetailParent}>
          <View style={styles.navigateTextParent}>
            <View
              style={styles.navigateButton}
              >
              <Icon
                name={'chevron-right'}
                size={moderateScale(20)}
                color={
                  navigationLogoColor
                    ? navigationLogoColor
                    : Colors[theme].black
                }
              />
            </View>
          </View>
        </View>
          </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default DashboardCard;
