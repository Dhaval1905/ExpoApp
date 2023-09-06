import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {horizontalScale, moderateScale, verticalScale} from '../../theme';
import styling from './MoveMoneyCardStyle';
import { Strings } from '../../constants';

const MoveMoneyCheck = ({
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
  viewBackground,
  isAdd,
  text1,
  text2
}) => {
  const styles = styling(theme);

  return (
    <>
    <View
      style={[
        styles.card,
        cardStyle,
      ]}
      onPress={onPressCard}>
      <View style={styles.container}>
          <View style={[styles.leftParent,{backgroundColor:viewBackground}]}>
            <Image source={icon} style={styles.icon} resizeMode='contain' />
          </View>
        <View style={styles.top}>
          <View style={{alignItems:'center'}}>
          <View style={styles.detailParent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        {tagOne || tagTwo ? (
          <View style={styles.bottom}>
            <View
              style={[styles.tagParent, {backgroundColor: tagOneBackground}]}>
              <Text style={[styles.tagOne, tagOneTextStyle]}>{tagOne}</Text>
            </View>
            <View
              style={[styles.tagParent, {backgroundColor: tagTwoBackground}]}>
              <Text style={[styles.tagTwo, tagTwoTextStyle]}>{tagTwo}</Text>
            </View>
          </View>
        ) : (
          <></>
        )}
        </View>
        </View>
      </View>
    </View>
        <View style={styles.divider} />
      {text1 && <Text style={styles.descriptionTitle}>
        {text1}
      </Text>}
      {text2 && <Text style={styles.descriptionSubtitle}>
        {text2}
      </Text>}
      {!isAdd&&<View style={styles.divider} />}
      </>
  );
};

export default MoveMoneyCheck;
