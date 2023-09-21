import React from 'react';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { horizontalScale, moderateScale, verticalScale } from '../../theme';
import styling from './MoveMoneyCardStyle';

const MoveMoneyCard = ({
  title,
  subTitle,
  icon,
  tagOne,
  tagTwo,
  tagOneTextStyle,
  tagOneBackground,
  tagTwoTextStyle,
  tagTwoBackground,
  cardStyle,
  onPressCard,
  rightIcon = true,
  theme,
  viewBackground
}) => {
  const styles = styling(theme);

  return (
    <TouchableOpacity
      style={[
        styles.card,
        cardStyle,
      ]}
      onPress={onPressCard}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={[styles.leftParent, { backgroundColor: viewBackground }]}>
            <Image source={icon} style={styles.icon} resizeMode='contain' />
          </View>
          <View style={{ marginLeft: Platform.OS === "web" ? 20 : horizontalScale(20) }}>
            <View style={styles.detailParent}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
            {tagOne || tagTwo ? (
              <View style={styles.bottom}>
                <View
                  style={[styles.tagParent, { backgroundColor: tagOneBackground }]}>
                  <Text style={[styles.tagOne, tagOneTextStyle]}>{tagOne}</Text>
                </View>
                <View
                  style={[styles.tagParent, { backgroundColor: tagTwoBackground }]}>
                  <Text style={[styles.tagTwo, tagTwoTextStyle]}>{tagTwo}</Text>
                </View>
              </View>
            ) : (
              <></>
            )}
          </View>
        </View>
      </View>
      <View style={styles.rightParent}>
        {rightIcon ? (
          <Icon name={'chevron-right'} size={Platform.OS === "web" ? 20 : moderateScale(20)} color={'#000'} />
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MoveMoneyCard;
