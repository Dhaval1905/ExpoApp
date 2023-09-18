import { Platform, StyleSheet } from 'react-native';
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
            paddingHorizontal: Platform.OS === "web" ? 16 : horizontalScale(16),
            paddingVertical: Platform.OS === "web" ? 12 : verticalScale(12)
        },
        cardTitle: {
            fontFamily: Fonts.regular,
            color: Colors[theme].grey500,
            fontSize: Platform.OS === "web" ? 14 : horizontalScale(14),
            marginTop: Platform.OS === "web" ? 10 : horizontalScale(10)
        },
        card: {
            backgroundColor: Colors[theme].white,
            borderRadius: Platform.OS === "web" ? 16 : moderateScale(16),
            paddingHorizontal: Platform.OS === "web" ? 12 : horizontalScale(12),
            padding: Platform.OS === "web" ? 12 : verticalScale(12),
            marginTop: Platform.OS === "web" ? 10 : horizontalScale(10),
            elevation: 2
        },
        headTxt: { fontSize: Platform.OS === "web" ? 20 : horizontalScale(20), color: '#000', fontFamily: Fonts.medium },
        linkText: {
            fontSize: Platform.OS === "web" ? 14 : horizontalScale(14), color: Colors[theme].blue, fontFamily: Fonts.medium,
            paddingVertical: 6
        }
    })
export default styling;