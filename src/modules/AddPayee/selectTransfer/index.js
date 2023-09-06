import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import styling from './styles';
import { useRoute } from '@react-navigation/native';
import { CustomButton, CustomHeader } from '../../../components';
import { navigationStrings } from '../../../constants';
import { Colors, moderateScale, verticalScale } from '../../../theme';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { get_Platform_Fees } from '../../../redux/actions/ach';
import { Icons } from '../../../assets';

const SelectTransfer = ({ navigation }) => {
    const route = useRoute();
    const theme = route?.params?.theme;
    const styles = styling(theme);
    const [fees,setFees]=useState([])

    useEffect(() => {
        (async () => {
    let res=await get_Platform_Fees()
    setFees(res?.data?.data)
        })()
    }, [])

    return (
        <View style={styles.screen} >
            <CustomHeader
                theme={theme}
                headerTitle={"Select Type"}
                onPressBack={() => navigation.goBack()}
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
                {route?.params?.item?.routing_identifiers?.ach_routing_number && <TouchableOpacity
                    style={styles.card}
                    onPress={() => {
                        navigation.navigate(navigationStrings.TTRANFERSCREEN, { item: route?.params?.item,platform_fees:fees[0] })
                    }}>
                    <View style={styles.leftParent}>
                    <View style={{ height: verticalScale(60), width: verticalScale(60), backgroundColor: "#F9EFFF", borderRadius: verticalScale(80), justifyContent: 'center', alignItems: 'center' }} >
                        <Image source={Icons.bank_transfer} resizeMode='contain' style={{
height: verticalScale(35), width: verticalScale(35)
                        }}></Image>
                      </View>
                    </View>
                    <View style={styles.detailParent}>
                        <Text style={styles.detailText}>{"ACH"}</Text>
                    </View>
                    <View style={styles.rightParent}>
                        <FeatherIcon name={'chevron-right'} size={moderateScale(20)} color={'#000'} />
                    </View>
                </TouchableOpacity>}
                {route?.params?.item?.routing_identifiers?.wire_routing_number && <TouchableOpacity
                    style={styles.card}
                    onPress={() => {
                        navigation.navigate(navigationStrings.WIRETRANFERSCREEN, { item: route?.params?.item,platform_fees:fees[1] })
                    }}>
                    <View style={styles.leftParent}>
                    <View style={{ height: verticalScale(60), width: verticalScale(60), backgroundColor: "#DFF7FF", borderRadius: verticalScale(80), justifyContent: 'center', alignItems: 'center' }} >
                        <Image source={Icons.ach_transfer} resizeMode='contain' style={{
height: verticalScale(35), width: verticalScale(35)
                        }}></Image>
                      </View>
                    </View>
                    <View style={styles.detailParent}>
                        <Text style={styles.detailText}>{"Wire"}</Text>
                    </View>
                    <View style={styles.rightParent}>
                        <FeatherIcon name={'chevron-right'} size={moderateScale(20)} color={'#000'}/>
                    </View>
                </TouchableOpacity>}
            </ScrollView>
            <View style={styles.reviewButtonParent}>
                <CustomButton
                    theme={theme}
                    buttonTitle={"Submit"}
                    buttonTitleStyle={styles.review}
                    buttonStyle={styles.reviewButtonStyle}
                    onBtnPress={() => navigation.navigate(navigationStrings.BOTTOMTABSNAV)}
                />
            </View>
        </View>
    )
}

export default SelectTransfer