import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback
} from 'react-native';
import { Switch, TextInput } from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton, CustomHeader, ModalButton } from '../../../components';
import { Strings, navigationStrings, type } from '../../../constants';
import { externalAccountAdd, externalAccountGet, transferAch, transferWire } from '../../../redux/actions/ach';
import { showLoader } from '../../../redux/actions/user';
import { Colors, moderateScale } from '../../../theme';
import styling from './WireTranferScreenStyle';
import { showMessage, hideMessage } from "react-native-flash-message";


const WireTranferScreen = ({ navigation }) => {
    const route = useRoute();
    const dispatch = useDispatch();
    const userDetails = useSelector(state => state?.user?.login)
    const theme = route?.params?.theme;
    const styles = styling(theme);
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [isVisibleType, setIsVisibleType] = useState(false);
    const [selectedType, setSelectedType] = useState(false);
    const [selectName, setSelectName] = useState(false);
    const [externalAccount, setExternalAccount] = useState([]);
    const [amount, setAmount] = useState('');
    const [memo, setMemo] = useState('');
    const [amountError, setAmountError] = useState('');
    const [accountTypeError, setAccountTypeError] = useState('');

    const validation = () => {
        let isValid = false
        if (amount.length === 0) {
            isValid = true
            setAmountError('Please enter amount.')
        }
        // if (!selectedType) {
        //     isValid = true
        //     setAccountTypeError('Please select receiver account.')
        // }

        return isValid
    }
    const addAccountPress = async () => {
        if (!validation()) {
            await dispatch(showLoader(true))
            let data = {
            amount:JSON.parse(amount)*100,
    currency :"USD",
    customer_id: userDetails?.data?.personDetail?.[0]?.id,
    originating_account_id: userDetails?.data?.accountDetail?.[0]?.id,
    receiving_account_id: route?.params?.item?.id,
    recipient_message :memo,
    platform_fee:JSON.parse(route?.params?.platform_fees?.fees)*100
            }
            let res = await transferWire(data)
            await dispatch(showLoader(false))
            if (res?.response?.data?.status === 0) {
                showMessage({
                    message: res?.response?.data?.message,
                    type: "danger",
                });
            } else {
                navigation.navigate(navigationStrings.SuccessScreen, { amount: amount, item: route?.params?.item, isFromAddPayee: false })
            }
        }
    }

    // useEffect(() => {
    //     (async () => {
    //         let data = {
    //             customer_id: userDetails?.data?.personDetail?.[0]?.id,
    //             identifiers_type: "ach"
    //         }
    //         let externalAccountList = await externalAccountGet(data)
    //         console.log('----data', externalAccountList?.data?.data)
    //         setExternalAccount(externalAccountList?.data?.data)
    //     })()
    // }, [])


    return (
        <View style={styles.screen}>
        <CustomHeader
            theme={theme}
            headerTitle={"Transfer Money"}
            onPressBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}>
            <View style={styles.card}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                        style={{ flex: 1 }}
                        enabled>
                        <TextInput
                            mode={'outlined'}
                            theme={{roundness:45}}
                            label={"Enter amount"}
                            style={styles.textInput}
                            activeOutlineColor={Colors[theme]?.black}
                            value={amount}
                            onChangeText={(text) => {
                                setAmount(text)
                                setAmountError('')
                            }}
                            keyboardType='decimal-pad'

                        />
                        {amountError?.length > 0 && (
                            <Text style={styles.errorText}>
                                {amountError}
                            </Text>
                        )}
                         {amount?.length > 0 && (
                            <>
                             <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                                <Text style={styles.subTitle1} >Amount</Text>
                                <Text style={styles.subTitle3}>: ${amount}</Text>
                            </View>
                             <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                                <Text style={styles.subTitle1} >Platform fees</Text>
                                <Text style={styles.subTitle3}>: ${route?.params?.platform_fees?.fees}</Text>
                            </View>
                             <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                                <Text style={styles.subTitle1} >Total</Text>
                                <Text style={[styles.subTitle3,{color:'#008A00'}]}>: ${JSON.parse(amount)+JSON.parse(route?.params?.platform_fees?.fees)}</Text>
                            </View>
                            </>
                        )}
                        <TextInput
                            mode={'outlined'}
                            theme={{roundness:45}}
                            label={"Memo (optional)"}
                            style={styles.textInput}
                            activeOutlineColor={Colors[theme]?.black}
                            value={memo}
                            onChangeText={(text) => {
                                setMemo(text)
                            }}
                        />
                        <View style={styles.boxView}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 2 }}>
                                <Text style={styles.subTitle1} >Account Owner Name</Text>
                                <Text style={styles.subTitle2}>{route?.params?.item?.account_owner_names}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                                <Text style={styles.subTitle1} >Account Number</Text>
                                <Text style={styles.subTitle2}>{route?.params?.item?.account_identifiers?.number}</Text>
                            </View>
                            {route?.params?.item?.routing_identifiers?.ach_routing_number && <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                                <Text style={styles.subTitle1} >Ach Routing Number</Text>
                                <Text style={styles.subTitle2}>{route?.params?.item?.routing_identifiers?.ach_routing_number}</Text>
                            </View>}
                            {route?.params?.item?.routing_identifiers?.wire_routing_number && <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                                <Text style={styles.subTitle1} >Wire Routing Number</Text>
                                <Text style={styles.subTitle2}>{route?.params?.item?.routing_identifiers?.wire_routing_number}</Text>
                            </View>}
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                                <Text style={styles.subTitle1} >Bank Name</Text>
                                <Text style={styles.subTitle2}>{route?.params?.item?.routing_identifiers?.bank_name}</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <CustomButton
                                theme={theme}
                                buttonTitle={"Edit Payee"}
                                buttonTitleStyle={styles.review}
                                buttonStyle={[styles.reviewButtonStyle,{width:'60%',alignSelf: 'center'}]}
                                onBtnPress={() => navigation.navigate(navigationStrings.BANKTRANSFER, { item: route?.params?.item })}
                            />
                        </View>
                    </KeyboardAvoidingView>
            </View>
                </ScrollView>
        </View>
        <View style={styles.reviewButtonParent}>
            <CustomButton
                theme={theme}
                buttonTitle={"Submit"}
                buttonTitleStyle={styles.review}
                buttonStyle={styles.reviewButtonStyle}
                onBtnPress={() => addAccountPress()}
            />
        </View>
        <Modal visible={isVisibleType} onTouchCancel={() => setIsVisibleType(false)} onRequestClose={() => setIsVisibleType(false)} transparent>
            <TouchableWithoutFeedback onPress={() => setIsVisibleType(false)}>
                <SafeAreaView style={styles.modalParent}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>{Strings.type}</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.modalList}>
                            {externalAccount?.map((item, index) => {
                                const isSelected = item?.id === selectedType;
                                return (
                                    <View key={index}>
                                        <TouchableOpacity
                                            style={styles.itemParent}
                                            onPress={() => {
                                                setSelectedType(item?.id);
                                                setSelectName(item?.account_owner_names?.[0]);
                                                setIsVisibleType(false);
                                            }}>
                                            <Text
                                                style={[
                                                    styles.modalItem,
                                                    isSelected && styles.selectedModalItem,
                                                ]}>
                                                {item?.account_owner_names}
                                            </Text>
                                            {isSelected ? (
                                                <Icon
                                                    name="checkmark"
                                                    size={moderateScale(24)}
                                                    color={Colors[theme]?.blue}
                                                />
                                            ) : (
                                                <></>
                                            )}
                                        </TouchableOpacity>
                                        <View style={styles.divider} />
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </Modal>
    </View>
    );
};

export default WireTranferScreen;
