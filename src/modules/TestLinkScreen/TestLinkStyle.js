import { StyleSheet } from 'react-native';
import { Fonts } from '../../assets';
import {
    Colors,
    horizontalScale,
    moderateScale,
    verticalScale,
} from '../../theme';

const styling = theme =>
    StyleSheet.create({
        screen: {
            flex: 1,
            paddingHorizontal: horizontalScale(16),
            paddingVertical:verticalScale(12)
        },
        cardTitle: {
            fontFamily: Fonts.regular,
            color: Colors[theme].grey500,
            fontSize: horizontalScale(14),
            marginTop: horizontalScale(10)
        },
        card: {
            backgroundColor: Colors[theme].white,
            borderRadius: moderateScale(16),
            paddingHorizontal: horizontalScale(12),
            padding: verticalScale(12),
            marginTop: horizontalScale(10),
            elevation:2
        },
        headTxt: { fontSize: horizontalScale(20), color: '#000',fontFamily:Fonts.medium },
        linkText:{
            fontSize: horizontalScale(14), color:Colors[theme].blue,fontFamily:Fonts.medium,
            paddingVertical:6
        }
    })
export default styling;