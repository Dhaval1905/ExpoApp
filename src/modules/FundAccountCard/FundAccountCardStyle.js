import { Dimensions, Platform, StyleSheet } from "react-native";
import { Colors, moderateScale } from "../../theme";
import { Fonts } from "../../assets";

export const styling = theme => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors[theme]?.screenBackground,
    },
    space: {
        marginTop: Platform.OS === "web" ? 15 : moderateScale(15)
    },
    subContainer: {
        width: "94%",
        alignSelf: "center",
        marginTop: Platform.OS === "web" ? 15 : moderateScale(15)
    },
    box: {
        height: Dimensions.get("screen").height / 5,
        width: "96%",
        backgroundColor: Colors[theme].white,
        borderRadius: Platform.OS === "web" ? 20 : moderateScale(20),
        alignSelf: "center",
        marginTop: Platform.OS === "web" ? 15 : moderateScale(15),
        // shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        paddingTop: Platform.OS === "web" ? 15 : moderateScale(15),
        paddingLeft: Platform.OS === "web" ? 20 : moderateScale(20),
        paddingRight: Platform.OS === "web" ? 10 : moderateScale(10)
    },
    icon: {
        height: Platform.OS === "web" ? 50 : moderateScale(50),
        width: Platform.OS === "web" ? 50 : moderateScale(50),
        borderRadius: Platform.OS === "web" ? 50 : moderateScale(50),
        // backgroundColor: Colors[theme].lightYellow
    },
    txtContainer: {
        marginTop: Platform.OS === "web" ? 15 : moderateScale(15)
    },
    txt: {
        fontSize: Platform.OS === "web" ? 14 : moderateScale(14),
        color: Colors[theme].black,
        fontFamily: Fonts.medium
    },
    subtxt: {
        fontSize: Platform.OS === "web" ? 12 : moderateScale(12),
        color: Colors[theme].black,
        fontFamily: Fonts.regular,
        marginRight: Platform.OS === "web" ? 10 : moderateScale(10),
        textAlign: "center"
    },
    rightContainer: {
        position: "absolute",
        bottom: Platform.OS === "web" ? 10 : moderateScale(10),
        right: Platform.OS === "web" ? 15 : moderateScale(15),
        flexDirection: "row",
        alignItems: "center"
    }
})