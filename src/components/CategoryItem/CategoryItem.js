import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, moderateScale} from '../../theme';
import styling from './CategoryItemStyle';

const CategoryItem = ({
  isSelected,
  categoryName,
  iconSource,
  onPressCategory,
  theme,
}) => {
  const styles = styling(theme);

  return (
    <TouchableOpacity style={styles.container} onPress={onPressCategory}>
      <View style={styles.iconParent}>
        <Image style={styles.logo} source={iconSource} />
      </View>
      <Text style={styles.categoryName}>{categoryName?.toUpperCase()}</Text>
      <View style={styles.iconParent}>
        <Icon
          name={isSelected ? 'check-circle' : 'checkbox-blank-circle-outline'}
          color={Colors[theme]?.blue}
          size={moderateScale(24)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
