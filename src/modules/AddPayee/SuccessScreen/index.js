import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import styling from './styles';
import { useRoute } from '@react-navigation/native';
import { CustomButton } from '../../../components';
import { navigationStrings } from '../../../constants';
import { useSelector } from 'react-redux';
import { Colors, horizontalScale, moderateScale } from '../../../theme';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { get_Platform_Fees } from '../../../redux/actions/ach';

const SuccessScreen = ({ navigation }) => {
    const route = useRoute();
    const theme = route?.params?.theme;
    const styles = styling(theme);
    const accountInfo = useSelector(state => state?.user?.login)
    const [fees,setFees]=useState([])

    useEffect(() => {
        (async () => {
    let res=await get_Platform_Fees()
    setFees(res?.data?.data)
        })()
    }, [])
    return (
        <View style={styles.screen} >
            <ScrollView contentContainerStyle={{ flexGrow: 1,paddingHorizontal:horizontalScale(12) }}>
                {!route?.params?.isFromAddPayee ? 
                <View style={styles.screen1}>
                    <Text style={styles.title}>${route?.params?.amount} Paid</Text>
                    <Text style={styles.subTitle}>Your payment has been initiated the funds will available in 1 to 2 days</Text>
                    <View style={[styles.boxView,{borderTopWidth:1,borderStyle:'dashed'}]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 2 }}>
                            <Text style={styles.subTitle1} >Source</Text>
                            <Text style={styles.subTitle2}>{accountInfo?.data?.personDetail?.[0]?.first_name} {accountInfo?.data?.personDetail?.[0]?.last_name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                            <Text style={styles.subTitle1} >Destination</Text>
                            <Text style={styles.subTitle2}>{route?.params?.item?.account_owner_names}</Text>
                        </View>
                    </View>
                    <View style={styles.boxView}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
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
                </View> :
                    <View style={styles.screen1}>
                        <Icon
                            name='checkmark-circle'
                            size={80}
                            color={'green'}
                        />
                        <Text style={styles.title}>Payee added successfully!</Text>
                        {route?.params?.item?.routing_identifiers?.ach_routing_number && <TouchableOpacity
                            style={styles.card}
                            onPress={() => {
                                navigation.navigate(navigationStrings.TTRANFERSCREEN, { item: route?.params?.item,platform_fees:fees[0] })
                            }}>
                            <View style={styles.leftParent}>
                                <FontAwesomeIcon
                                    name={'bank'}
                                    size={moderateScale(26)}
                                    color={Colors[theme]?.blue}
                                />
                            </View>
                            <View style={styles.detailParent}>
                                <Text style={styles.detailText}>{"ACH"}</Text>
                            </View>
                            <View style={styles.rightParent}>
                                <FeatherIcon name={'chevron-right'} size={moderateScale(18)} />
                            </View>
                        </TouchableOpacity>}
                        {route?.params?.item?.routing_identifiers?.wire_routing_number && <TouchableOpacity
                            style={styles.card}
                            onPress={() => {
                                navigation.navigate(navigationStrings.WIRETRANFERSCREEN, { item: route?.params?.item,platform_fees:fees[1] })
                            }}>
                            <View style={styles.leftParent}>
                                <FontAwesomeIcon
                                    name={'nfc'}
                                    size={moderateScale(26)}
                                    color={Colors[theme]?.blue}
                                />
                            </View>
                            <View style={styles.detailParent}>
                                <Text style={styles.detailText}>{"Wire"}</Text>
                            </View>
                            <View style={styles.rightParent}>
                                <FeatherIcon name={'chevron-right'} size={moderateScale(18)} />
                            </View>
                        </TouchableOpacity>}
                    </View>
                }
            </ScrollView>
            <View style={styles.reviewButtonParent}>
                <CustomButton
                    theme={theme}
                    buttonTitle={"GO BACK"}
                    buttonTitleStyle={styles.review}
                    buttonStyle={styles.reviewButtonStyle}
                    onBtnPress={() => navigation.navigate(navigationStrings.BOTTOMTABSNAV)}
                />
            </View>
        </View>
    )
}

export default SuccessScreen