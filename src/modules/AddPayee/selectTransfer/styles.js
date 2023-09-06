import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets';
import {
    Colors,
    horizontalScale,
    moderateScale,
    verticalScale,
} from '../../../theme';

const styling = theme =>
    StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: Colors[theme]?.screenBackground,

        },
        screen1: {
            flex: 1,
            backgroundColor: Colors[theme]?.screenBackground,
            justifyContent: 'center',
            alignItems: 'center'
        },
        title: {
            color: Colors[theme].black,
            fontSize: moderateScale(28),
            fontFamily: Fonts.bold,
            marginTop: verticalScale(20)
        },
        subTitle: {
            color: Colors[theme].black50,
            fontSize: moderateScale(18),
            fontFamily: Fonts.regular,
            textAlign: 'center',
            width: '90%',
            marginTop: verticalScale(10)
        },
        subTitle1: {
            color: Colors[theme].black,
            fontSize: moderateScale(18),
            fontFamily: Fonts.medium,
            width: '28%'
        },
        subTitle2: {
            color: Colors[theme].black50,
            fontSize: moderateScale(18),
            fontFamily: Fonts.regular,
            marginLeft: horizontalScale(50)
        },
        boxView: {
            // height: verticalScale(50),
            width: '90%',
            borderWidth: 1,
            padding: 10,
            borderColor: Colors[theme].grey400,
            marginTop: verticalScale(50)
        },
        reviewButtonStyle: {
            backgroundColor: Colors[theme].blue,
            width: '100%',
            height: verticalScale(50),
            borderRadius: moderateScale(30),
        },
        review: {
            fontSize: moderateScale(18),
            fontFamily: Fonts.bold,
        },
        reviewButtonParent: {
            height: verticalScale(70),
            width: '100%',
            position: 'absolute',
            zIndex: 1,
            backgroundColor: Colors[theme].screenBackground,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: horizontalScale(30),
        },
        detailParent: {
            flex: 0.7,
            justifyContent: 'center',
        },
        detailText: {
            color: Colors[theme].black,
            fontSize: moderateScale(18),
            fontFamily: Fonts.medium,
            marginLeft:horizontalScale(15)
        },
        rightParent: {
            flex: 0.1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        card: {
            width: '100%',
            flexDirection: 'row',
            height: verticalScale(100),
            backgroundColor: Colors[theme].white,
            marginVertical: verticalScale(10),
            borderRadius: moderateScale(15),
        },
        leftParent: {
            flex: 0.2,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

export default styling;
