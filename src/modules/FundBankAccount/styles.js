import { Dimensions, Platform, StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../theme";
import { Fonts } from "../../assets";

export const styling = theme => StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors[theme]?.white,
    },
    balanceParent: {
        marginTop: Platform.OS === "ios" ? horizontalScale(35) : horizontalScale(15),
        paddingHorizontal: horizontalScale(14),
    },
    balance: {
        color: Colors[theme].white,
        fontSize: moderateScale(32),
        fontFamily: Fonts.bold,
    },
    availableNow: {
        color: Colors[theme].white,
        fontSize: moderateScale(16),
        fontFamily: Fonts.regular,
    },
    scrollView: {
        flexGrow: 1,
    },
    sub: {
        width: '100%',
        paddingHorizontal: horizontalScale(14),
        backgroundColor: Colors[theme].white,
        borderTopRightRadius: horizontalScale(24),
        borderTopLeftRadius: horizontalScale(24),
        marginTop: horizontalScale(30)
    },
    subDiv: {
        marginTop: moderateScale(20),
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        fontSize: moderateScale(16),
        color: Colors[theme].grey500,
        fontFamily: Fonts.regular
    },
    dollarTxt: {
        fontSize: moderateScale(26),
        color: Colors[theme].grey500,
        fontFamily: Fonts.medium,
    },
    blTxt: {
        fontSize: moderateScale(30),
        color: Colors[theme].black,
        fontFamily: Fonts.medium,
        paddingLeft: moderateScale(8)
    },
    dotLine: {
        borderStyle: 'dashed',
        borderWidth: .5,
        borderRadius: 1,
        width: "70%",
        alignSelf: "center",
        backgroundColor: Colors[theme].grey200,
    },
    bankDiv: {
        marginTop: "20%",
        height: Dimensions.get('screen').height / 4.2,
        width: "90%",
        alignSelf: "center",
        backgroundColor: Colors[theme].grey200,
        borderRadius: moderateScale(20)
    },
    txt2: {
        fontSize: moderateScale(14),
        color: Colors[theme].black,
        fontFamily: Fonts.medium
    },
    labelTxt: {
        fontSize: moderateScale(14),
        color: Colors[theme].grey500,
        fontFamily: Fonts.regular
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(10)
    },
    loginBtn: {
        width: "90%",
        alignSelf: "center",
        height: verticalScale(50),
        backgroundColor: Colors[theme].blue,
        borderRadius: moderateScale(30),
        marginBottom: moderateScale(30)
    },
    loginText: {
        fontSize: moderateScale(18),
        fontFamily: Fonts.medium,
    },
    close: {
        position: "absolute",
        right: 0,
        top: moderateScale(15)
    },
    subCard: {
        width: "94%",
        alignSelf: "center"
    },
    cardLbTxt: {
        fontSize: moderateScale(14),
        fontFamily: Fonts.medium,
        color: Colors[theme].black
    },
    textInput: {
        backgroundColor: Colors[theme].white,
        height: verticalScale(50),
        width: "100%",
        borderRadius: moderateScale(50),
        borderColor: Colors[theme]?.black,
        borderWidth: .6,
        fontSize: moderateScale(14),
        fontFamily: Fonts.medium,
        marginTop: moderateScale(5),
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20),
    },
    cnTxt: {
        fontSize: moderateScale(14),
        color: Colors[theme].black,
        fontFamily: Fonts.medium
    },
    errorText: {
        color: Colors[theme].red,
        fontSize: moderateScale(14),
        marginTop: verticalScale(5),
        marginLeft: verticalScale(10),
        fontFamily: Fonts.regular,
    },
})