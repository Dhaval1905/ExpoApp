import { Dimensions, Platform, StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../theme";
import { Fonts } from "../../assets";

export const styling = theme => StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors[theme]?.white,
    },
    balanceParent: {
        marginTop: Platform.OS === "web" ? 15 : Platform.OS === "ios" ? horizontalScale(35) : horizontalScale(15),
        paddingHorizontal: horizontalScale(14),
    },
    balance: {
        color: Colors[theme].white,
        fontSize: Platform.OS === "web" ? 32 : moderateScale(32),
        fontFamily: Fonts.bold,
    },
    availableNow: {
        color: Colors[theme].white,
        fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
        fontFamily: Fonts.regular,
    },
    scrollView: {
        flexGrow: 1,
    },
    sub: {
        width: '100%',
        paddingHorizontal: Platform.OS === "web" ? 14 : horizontalScale(14),
        backgroundColor: Colors[theme].white,
        borderTopRightRadius: Platform.OS === "web" ? 24 : horizontalScale(24),
        borderTopLeftRadius: Platform.OS === "web" ? 24 : horizontalScale(24),
        marginTop: Platform.OS === "web" ? 30 : horizontalScale(30)
    },
    subDiv: {
        marginTop: Platform.OS === "web" ? 20 : moderateScale(20),
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        fontSize: Platform.OS === "web" ? 16 : moderateScale(16),
        color: Colors[theme].grey500,
        fontFamily: Fonts.regular
    },
    dollarTxt: {
        fontSize: Platform.OS === "web" ? 26 : moderateScale(26),
        color: Colors[theme].grey500,
        fontFamily: Fonts.medium,
    },
    blTxt: {
        fontSize: Platform.OS === "web" ? 30 : moderateScale(30),
        color: Colors[theme].black,
        fontFamily: Fonts.medium,
        paddingLeft: Platform.OS === "web" ? 8 : moderateScale(8)
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
        borderRadius: Platform.OS === "web" ? 20 : moderateScale(20)
    },
    txt2: {
        fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
        color: Colors[theme].black,
        fontFamily: Fonts.medium
    },
    labelTxt: {
        fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
        color: Colors[theme].grey500,
        fontFamily: Fonts.regular
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: Platform.OS === "web" ? 20 : moderateScale(20),
        paddingRight: Platform.OS === "web" ? 10 : moderateScale(10)
    },
    loginBtn: {
        width: "90%",
        alignSelf: "center",
        height: Platform.OS === "web" ? 50 : verticalScale(50),
        backgroundColor: Colors[theme].blue,
        borderRadius: Platform.OS === "web" ? 30 : moderateScale(30),
        marginBottom: Platform.OS === "web" ? 30 : moderateScale(30)
    },
    loginText: {
        fontSize: Platform.OS === "web" ? 18 : moderateScale(18),
        fontFamily: Fonts.medium,
    },
    close: {
        position: "absolute",
        right: 0,
        top: Platform.OS === "web" ? 15 : moderateScale(15)
    },
    subCard: {
        width: "94%",
        alignSelf: "center"
    },
    cardLbTxt: {
        fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
        fontFamily: Fonts.medium,
        color: Colors[theme].black
    },
    textInput: {
        backgroundColor: Colors[theme].white,
        height: Platform.OS === "web" ? 50 : verticalScale(50),
        width: "100%",
        borderRadius: Platform.OS === "web" ? 50 : moderateScale(50),
        borderColor: Colors[theme]?.black,
        borderWidth: .6,
        fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
        fontFamily: Fonts.medium,
        marginTop: Platform.OS === "web" ? 5 : moderateScale(5),
        paddingLeft: Platform.OS === "web" ? 20 : moderateScale(20),
        paddingRight: Platform.OS === "web" ? 20 : moderateScale(20),
    },
    cnTxt: {
        fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
        color: Colors[theme].black,
        fontFamily: Fonts.medium
    },
    errorText: {
        color: Colors[theme].red,
        fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
        marginTop: Platform.OS === "web" ? 5 : verticalScale(5),
        marginLeft: Platform.OS === "web" ? 10 : verticalScale(10),
        fontFamily: Fonts.regular,
    },
})