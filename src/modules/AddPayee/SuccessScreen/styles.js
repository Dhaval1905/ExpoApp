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
            backgroundColor: Colors[theme]?.white,
            justifyContent: 'center',
            alignItems: 'center',
            elevation:4,
            marginTop:horizontalScale(30),
            borderRadius:horizontalScale(24),
            padding:horizontalScale(10)
        },
        title: {
            color: Colors[theme].black,
            fontSize: moderateScale(22),
            fontFamily: Fonts.medium,
            marginTop: verticalScale(20)
        },
        subTitle: {
            color: Colors[theme].black,
            fontSize: moderateScale(14),
            fontFamily: Fonts.regular,
            textAlign: 'center',
            width: '90%',
            marginTop: verticalScale(10)
        },
        subTitle1: {
            color: Colors[theme].grey500,
            fontSize: moderateScale(14),
            fontFamily: Fonts.medium,
            width: '45%'
        },
        subTitle2: {
            color: Colors[theme].black,
            fontSize: moderateScale(14),
            fontFamily: Fonts.medium,
            width:'54%',
            textAlign:'right'
        },
        boxView: {
            width: '90%',
            borderColor: Colors[theme].grey400,
            marginTop: verticalScale(30),
            paddingTop:verticalScale(20)
        },
        reviewButtonStyle: {
            backgroundColor: Colors[theme].blue,
            width: '100%',
            height: verticalScale(50),
            borderRadius: moderateScale(30),
        },
        review: {
            fontSize: moderateScale(18),
            fontFamily: Fonts.medium,
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
        rightParent: {
            flex: 0.1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        card: {
            width: '90%',
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
        detailParent: {
            flex: 0.7,
            justifyContent: 'center',
        },
        detailText: {
            color: Colors[theme].black,
            fontSize: moderateScale(18),
            fontFamily: Fonts.bold,
        },
    });

export default styling;
