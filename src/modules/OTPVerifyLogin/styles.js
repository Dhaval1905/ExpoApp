import { StyleSheet } from 'react-native';
import { Fonts } from '../../assets';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

const styling = theme =>
    StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: Colors[theme]?.screenBackground,
        },
        balanceParent: {
            flex: 0.3,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 2,
            borderBottomColor: Colors[theme].grey300,
        },
        balance: {
            color: Colors[theme].black,
            fontSize: moderateScale(40),
            fontFamily: Fonts.bold,
        },
        availableNow: {
            color: Colors[theme].black,
            fontSize: moderateScale(16),
            fontFamily: Fonts.regular,
        },
        scrollView: {
            flex: 0.7,
            paddingHorizontal: horizontalScale(12),
        },
        darkBlueText: {
            color: Colors[theme].blue900,
            fontFamily: Fonts.regular,
        },
        darkGreenText: {
            color: Colors[theme].green900,
            fontFamily: Fonts.regular,
        },
        greyText: {
            color: Colors[theme].grey500,
            fontFamily: Fonts.regular,
        },
        ConfirmParent: {
            // flex: 1,
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 10,
            alignSelf: 'center',
        },
        confirmBtn: {
            backgroundColor: Colors[theme].blue,
            width: '100%',
            height: verticalScale(50),
            borderRadius: moderateScale(30),
        },
        confirmText: {
            fontSize: moderateScale(18),
            fontFamily: Fonts.regular,
        },
        errorText: {
            color: Colors[theme].red,
            fontSize: moderateScale(14),
            marginTop: verticalScale(2),
            fontFamily: Fonts.regular,
        },
        errorText1: {
            color: Colors[theme].grey500,
            fontSize: moderateScale(16),
            marginTop: verticalScale(10),
            fontFamily: Fonts.regular,
        },
        resetPassword: {
            color: Colors[theme].black,
            fontSize: moderateScale(16),
            alignSelf: 'center',
            marginTop: verticalScale(26),
            fontFamily: Fonts.medium,
            textDecorationLine:'underline'
          },
    });

export default styling;
