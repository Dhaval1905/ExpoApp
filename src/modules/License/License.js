import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View, Modal, SafeAreaView } from "react-native";
import { CustomButton, CustomHeader } from "../../components";
import { Strings } from "../../constants";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../theme";
import { TextInput } from 'react-native-paper';
import { Fonts } from "../../assets";
import Icon from 'react-native-vector-icons/Ionicons';
import { updateLicense } from "../../redux/actions/ach";
import { showMessage } from "react-native-flash-message";
import { useDispatch, useSelector } from "react-redux";
import { showLoader } from "../../redux/actions/user";

const License = () => {
    const route = useRoute();
    const navigation = useNavigation()
    const theme = route?.params?.theme;
    const styles = styling(theme);
    const dispatch = useDispatch();
    const [licenseNumber, setLicenseNumber] = useState("")
    const [isVisibleType, setIsVisibleType] = useState(false);
    const [licenseNumberError, setLicenseNumberError] = useState("")
    const licenseData = useSelector(state => state?.user?.license)
    console.log('------',licenseData)
    const onUpdate = async() => {
        if (licenseNumber.length ===0) {
            setLicenseNumberError("License number is required")
        }else{
            // await dispatch(showLoader(true))
            let data={
                license_number:licenseNumber
            }
            let res =await updateLicense(data)
            // await dispatch(showLoader(false))
            setIsVisibleType(false)
            setLicenseNumber('')
            if (res?.response?.data?.status === 0) {
                showMessage({
                  message: res?.response?.data?.message,
                  type: "danger",
                });
              } else {
                showMessage({
                    message: "License update successfully",
                    type: "danger",
                  });
              }
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.space} />
            <CustomHeader
                theme={theme}
                headerTitle={Strings.licenseDetails}
                backButton={true}
                onPressBack={() => navigation.goBack()}
            />
            <View style={styles.subContainer}>
                <View style={styles.box}>
                    <Text style={styles.labelTxt}>{Strings.number}</Text>
                    <Text style={styles.valueTxt}>XXXXXXXXXX{licenseData?.license_number}</Text>
                    <View style={styles.space} />
                    {licenseData?.status==='ACCEPTED'?
                    <>
                    <Text style={styles.labelTxt}>{Strings.expireDate}</Text>
                    <Text style={styles.valueTxt}>{licenseData?.license_expiration_date}</Text>
                    </>:
                    <>
                    <Text style={[styles.labelTxt,{fontSize:16}]}>{"License Verification"}</Text>
                    <Text style={[styles.valueTxt,{color:'red'}]}>{"Pending"}</Text>
                    </>
                    }
                </View>
                <View style={styles.updateDiv}>
                    <Text onPress={() => setIsVisibleType(!isVisibleType)} style={styles.updateTxt}>{Strings.updateDetails}</Text>
                </View>
            </View>
            <Modal visible={isVisibleType} transparent>
                <SafeAreaView style={styles.modalParent}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>{Strings.updateDetails}</Text>
                            <Icon
                                name="close"
                                size={moderateScale(24)}
                                color={Colors[theme]?.black}
                                onPress={() => setIsVisibleType(false)}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <Text style={styles.txt}>{Strings.licenseNumber}</Text>
                            <TextInput
                                mode={'outlined'}
                                theme={{ roundness: 45, }}
                                label={Strings.licenseNumber}
                                style={styles.textInput}
                                activeOutlineColor={Colors[theme]?.black}
                                value={licenseNumber}
                                onChangeText={(text) => {
                                    setLicenseNumberError('')
                                    setLicenseNumber(text)
                                }}
                            />
                            {licenseNumberError?.length > 0 && (
                                <Text style={styles.errorText}>
                                    {licenseNumberError}
                                </Text>
                            )}
                        </View>
                        <CustomButton
                            theme={theme}
                            onBtnPress={() => onUpdate()}
                            buttonTitle={Strings.updateLicense}
                            buttonStyle={styles.loginBtn}
                            buttonTitleStyle={styles.loginText}
                        />
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    )
}

const styling = theme => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors[theme]?.screenBackground,
    },
    subContainer: {
        width: "90%",
        alignSelf: "center",
        marginTop: moderateScale(20)
    },
    inputView: {
        width: "90%",
        alignSelf: "center",
        marginTop: verticalScale(10),
    },
    textInput: {
        backgroundColor: Colors[theme].white,
    },
    errorText: {
        color: Colors[theme].red,
        fontSize: moderateScale(14),
        marginTop: verticalScale(5),
        marginLeft: verticalScale(10),
        fontFamily: Fonts.regular,
    },
    loginBtn: {
        width: "90%",
        alignSelf: "center",
        height: verticalScale(50),
        backgroundColor: Colors[theme].blue,
        borderRadius: moderateScale(30),
        marginTop: "15%",
        marginBottom: moderateScale(30),
    },
    loginText: {
        fontSize: moderateScale(18),
        fontFamily: Fonts.medium,
    },
    box: {
        height: Dimensions.get("screen").height / 5.5,
        width: "100%",
        borderRadius: moderateScale(16),
        backgroundColor: Colors[theme].white,
        padding: moderateScale(15)
    },
    txt: {
        fontSize: moderateScale(16),
        color: Colors[theme].grey700,
        fontFamily: Fonts.medium
    },
    labelTxt: {
        fontSize: moderateScale(12),
        color: Colors[theme].grey500,
        fontFamily: Fonts.medium
    },
    valueTxt: {
        fontSize: moderateScale(14),
        color: Colors[theme].black,
        fontFamily: Fonts.medium
    },
    space: {
        marginTop: moderateScale(15)
    },
    updateTxt: {
        fontSize: moderateScale(16),
        color: Colors[theme].blue,
        fontFamily: Fonts.medium
    },
    updateDiv: {
        marginTop: moderateScale(20),
        alignSelf: "center"
    },
    modalParent: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: Colors[theme].white,
        borderTopRightRadius: horizontalScale(32),
        borderTopLeftRadius: horizontalScale(32),
    },
    modalHeader: {
        marginVertical: verticalScale(20),
        marginHorizontal: horizontalScale(20),
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    modalTitle: {
        color: Colors[theme].black,
        fontSize: moderateScale(16),
        fontFamily: Fonts.medium,
    },
})

export default License