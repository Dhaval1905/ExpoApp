import { Dimensions, StyleSheet } from "react-native";
import { Colors, moderateScale } from "../../theme";
import { Fonts } from "../../assets";

export const styling = theme => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors[theme]?.screenBackground,
    },
    space: {
        marginTop: moderateScale(15)
    },
    subContainer: {
        width: "94%",
        alignSelf: "center",
        marginTop: moderateScale(15)
    },
    box: {
        height: Dimensions.get("screen").height / 5,
        width: "96%",
        backgroundColor: Colors[theme].white,
        borderRadius: moderateScale(20),
        alignSelf: "center",
        marginTop: moderateScale(15),
        // shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        paddingTop: moderateScale(15),
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(10)
    },
    icon: {
        height: moderateScale(50),
        width: moderateScale(50),
        borderRadius: moderateScale(50),
        // backgroundColor: Colors[theme].lightYellow
    },
    txtContainer: {
        marginTop: moderateScale(15)
    },
    txt: {
        fontSize: moderateScale(14),
        color: Colors[theme].black,
        fontFamily: Fonts.medium
    },
    subtxt: {
        fontSize: moderateScale(12),
        color: Colors[theme].black,
        fontFamily: Fonts.regular,
        marginRight: moderateScale(10),
        textAlign: "center"
    },
    rightContainer: {
        position: "absolute",
        bottom: moderateScale(10),
        right: moderateScale(15),
        flexDirection: "row",
        alignItems: "center"
    }
})