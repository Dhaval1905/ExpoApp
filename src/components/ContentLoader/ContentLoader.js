import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {horizontalScale, moderateScale, verticalScale} from '../../theme';
import { Dimensions,Platform,ScrollView } from 'react-native';
import ContentLoader, { Rect, Circle, Path } from 'react-content-loader/native';
const windowWidth = Dimensions.get('window').width;

const ContentLoader1 = () => {
  return (
    <>
    {Platform.OS==='ios'?
    <ScrollView
    style={{
        flex: 1,
        backgroundColor: 'white',
    }}
    showsVerticalScrollIndicator={false}
    bounces={false}>
    <ContentLoader
      width={windowWidth}
      height={220}
      viewBox={'0 0 400 220'}
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
      {...this.props}>
      <Rect x="4" y="8" rx="3" ry="3" width="8" height="570" />
      <Rect x="5" y="573" rx="3" ry="3" width="331" height="7" />
      <Rect x="329" y="9" rx="3" ry="3" width="8" height="570" />
      <Rect x="102" y="69" rx="3" ry="3" width="102" height="7" />
      <Rect x="92" y="47" rx="3" ry="3" width="178" height="6" />
      <Circle cx="48" cy="63" r="18" />
      <Rect x="95" y="95" rx="3" ry="3" width="178" height="6" />
      <Rect x="105" y="169" rx="3" ry="3" width="102" height="7" />
      <Rect x="95" y="147" rx="3" ry="3" width="178" height="6" />
      <Circle cx="51" cy="163" r="18" />
      <Rect x="5" y="8" rx="3" ry="3" width="331" height="7" />
    </ContentLoader>
  </ScrollView>
  :
    <SkeletonPlaceholder borderRadius={moderateScale(4)}>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        alignItems="center"
        marginTop={verticalScale(6)}>
        <SkeletonPlaceholder.Item
          width={moderateScale(40)}
          height={moderateScale(40)}
          borderRadius={moderateScale(10)}
        />
        <SkeletonPlaceholder.Item marginLeft={horizontalScale(20)}>
          <SkeletonPlaceholder.Item flexDirection="row">
            <SkeletonPlaceholder.Item
              width={horizontalScale(220)}
              height={verticalScale(20)}
            />
            <SkeletonPlaceholder.Item
              width={horizontalScale(30)}
              height={verticalScale(20)}
              marginLeft={horizontalScale(2)}
            />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            marginTop={verticalScale(6)}
            width={horizontalScale(250)}
            height={verticalScale(20)}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item
        height={verticalScale(3)}
        width={horizontalScale(350)}
        marginTop={verticalScale(8)}
      />
    </SkeletonPlaceholder>
}
    </>
  );
};

export default ContentLoader1;
