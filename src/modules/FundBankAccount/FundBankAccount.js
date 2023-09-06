import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, ScrollView, ImageBackground, TextInput } from 'react-native'
import { styling } from "./styles"
import { Strings } from "../../constants";
import { Colors, horizontalScale, moderateScale } from "../../theme";
import Icon from 'react-native-vector-icons/Ionicons';
import DownArrow from 'react-native-vector-icons/Entypo'
import { CustomButton } from "../../components";
import { Images } from "../../assets";

const FundBankAccount = () => {
    const route = useRoute();
    const isBank = route?.params?.isBank
    const navigation = useNavigation()
    const theme = route?.params?.theme;
    const styles = styling(theme);
    const bankData = [
        {
            label: "Amount Funded:",
            value: "99.00"
        },
        {
            label: "Fees:",
            value: "99.00"
        },
        {
            label: "Total Charges:",
            value: "99.00"
        }
    ]
    const [cardNumber, setCardNumber] = useState("")
    const [cardNumberError, setCardNumbeError] = useState("")
    const [expire, setExpire] = useState("")
    const [expireError, setExpireError] = useState("")
    const [cvc, setCVC] = useState("")
    const [cvcError, setCVCError] = useState("")
    const [country, setCountry] = useState("United State")

    const onBankPay = () => { }

    const onCardPay = () => {
        if (cardNumber === "" && expire === "" && cvc === "") {
            setCardNumbeError("Card number is required")
            setExpireError("Expire month/year is required")
            setCVCError("CVC is required")
        }
        else if (cardNumber === "") {
            setCardNumbeError("Card number is required")
        }
        else if (expire === "") {
            setExpireError("Expire month/year is required")
        }
        else if (cvc === "") {
            setCVCError("CVC is required")
        }
        else {
            // call API
        }
    }

    return (
        <View style={styles.screen}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
                <ImageBackground source={Images.backgroudImage} style={{ backgroundColor: '#000' }} resizeMode='cover' >
                    <View style={styles.balanceParent}>
                        <Text style={[styles.availableNow, { color: '#94B1FF' }]}>{Strings.Balance}</Text>
                        <Text style={styles.balance}>{"$ 12,000.00"}</Text>
                        <Text style={styles.availableNow}>{Strings.currentAccount}</Text>
                    </View>
                    <View style={styles.sub}>
                        {
                            isBank ?
                                <>
                                    <View style={styles.subDiv}>
                                        <Text style={styles.txt}>{Strings.funding}</Text>
                                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: moderateScale(4) }}>
                                            <Text style={styles.dollarTxt}>$</Text>
                                            <Text style={styles.blTxt}>99.00</Text>
                                        </View>
                                    </View>
                                    <View style={styles.dotLine} />
                                    <View style={styles.bankDiv}>
                                        <View style={{ ...styles.row, paddingTop: moderateScale(15), }}>
                                            <Text style={styles.txt2}>{Strings.confirm}</Text>
                                            <Icon
                                                name="close"
                                                size={moderateScale(24)}
                                                color={Colors[theme]?.black}
                                            />
                                        </View>
                                        {
                                            bankData.map((item, index) => (
                                                <>
                                                    <View style={{ ...styles.row, paddingTop: index === 0 ? moderateScale(25) : index === 2 ? moderateScale(25) : moderateScale(5), }}>
                                                        <Text style={styles.labelTxt}>{item.label}</Text>
                                                        <Text style={styles.txt2}>{item.value}</Text>
                                                    </View>
                                                    {
                                                        index === 1 && <View style={{ ...styles.dotLine, marginTop: moderateScale(15) }} />
                                                    }

                                                </>
                                            ))
                                        }
                                    </View>
                                </>
                                :
                                <View style={styles.subCard}>
                                    <View style={styles.close}>
                                        <Icon
                                            name="close"
                                            size={moderateScale(24)}
                                            color={Colors[theme]?.black}
                                        />
                                    </View>
                                    <View style={{ marginTop: "20%" }}>
                                        <Text style={styles.cardLbTxt}>{Strings.cardInformation}</Text>
                                        <TextInput
                                            value={cardNumber}
                                            onChangeText={(text) => {
                                                setCardNumbeError('')
                                                setCardNumber(text)
                                            }}
                                            style={styles.textInput}
                                            placeholder="Card Number"
                                            keyboardType="number-pad"
                                        />
                                        {cardNumberError?.length > 0 && (
                                            <Text style={styles.errorText}>
                                                {cardNumberError}
                                            </Text>
                                        )}
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: moderateScale(25) }}>
                                            <View style={{ width: "48%" }}>
                                                <Text style={styles.cardLbTxt}>{Strings.expire}</Text>
                                                <TextInput
                                                    value={expire}
                                                    onChangeText={(text) => {
                                                        setExpireError('')
                                                        setExpire(text)
                                                    }}
                                                    placeholder="MM/YY"
                                                    style={styles.textInput}
                                                    keyboardType="number-pad"
                                                />
                                                {expireError?.length > 0 && (
                                                    <Text style={styles.errorText}>
                                                        {expireError}
                                                    </Text>
                                                )}
                                            </View>
                                            <View style={{ width: "48%" }}>
                                                <Text style={styles.cardLbTxt}>{Strings.CVC}</Text>
                                                <TextInput
                                                    value={cvc}
                                                    onChangeText={(text) => {
                                                        setCVCError('')
                                                        setCVC(text)
                                                    }}
                                                    placeholder="CVC"
                                                    style={styles.textInput}
                                                    keyboardType="number-pad"
                                                />
                                                {cvcError?.length > 0 && (
                                                    <Text style={styles.errorText}>
                                                        {cvcError}
                                                    </Text>
                                                )}
                                            </View>
                                        </View>
                                        <Text style={{ ...styles.cardLbTxt, marginTop: moderateScale(25) }}>{Strings.country_or_region}</Text>
                                        <View
                                            style={{ ...styles.textInput, flexDirection: "row" }}
                                        >
                                            <View style={{ width: "95%", justifyContent: "center" }}>
                                                <Text style={styles.cnTxt}>{country}</Text>
                                            </View>
                                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                                <DownArrow
                                                    name="chevron-thin-down"
                                                    size={moderateScale(20)}
                                                    color={Colors[theme]?.black}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                        }
                    </View>
                </ImageBackground>
            </ScrollView>
            <CustomButton
                theme={theme}
                onBtnPress={() => isBank ? onBankPay() : onCardPay()}
                buttonTitle={Strings.payNow}
                buttonStyle={styles.loginBtn}
                buttonTitleStyle={styles.loginText}
            />
        </View>
    )
}

export default FundBankAccount


// 251824789

// 021000021