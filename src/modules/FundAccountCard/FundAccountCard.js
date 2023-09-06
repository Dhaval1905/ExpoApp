import React from "react";
import { Text, View, Image,TouchableOpacity } from 'react-native'
import { CustomHeader } from "../../components";
import {  useRoute } from "@react-navigation/native";
import { styling } from "./FundAccountCardStyle"
import { Strings, navigationStrings } from "../../constants";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors, moderateScale, verticalScale } from "../../theme";
import { Icons } from "../../assets";


const FundAccountCard = ({navigation}) => {
    const route = useRoute();
    // const navigation = useNavigation()
    const theme = route?.params?.theme;
    const styles = styling(theme);
    const fundData = [
        {
            image: Icons.bank_transfer,
            txt1: Strings.fundFrom,
            txt2: Strings.account,
            onPress: () => navigation.navigate(navigationStrings.PUSHFUND,{isFromAddAccount:true})
        },
        // {
        //     image: Icons.credit_card,
        //     txt1: Strings.fundBy,
        //     txt2: Strings.card,
        //     onPress: () =>  navigation.navigate(navigationStrings.FUNDBANKACCOUNT, {
        //         isBank: true
        //     })
        // }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.space} />
            <CustomHeader
                theme={theme}
                headerTitle={Strings.fundAccount}
                backButton={true}
                onPressBack={() => navigation.goBack()}
            />
            <View style={styles.subContainer}>
                {
                    fundData.map((item, index) => (
                        <TouchableOpacity activeOpacity={.9} onPress={() => item.onPress()} style={styles.box}>
                             <View style={{ height: verticalScale(58), width: verticalScale(58), backgroundColor: Colors[theme].lightYellow, borderRadius: verticalScale(80), justifyContent: 'center', alignItems: 'center' }} >
                        <Image source={item.image} resizeMode='contain' style={{
                             height: verticalScale(30), width: verticalScale(30)
                        }}></Image>
                      </View>
                            <View style={styles.txtContainer}>
                                <Text style={styles.txt}>{item.txt1}</Text>
                                <Text style={styles.txt}>{item.txt2}</Text>
                            </View>
                            <View style={styles.rightContainer}>
                                <Text style={styles.subtxt}>Get Inside</Text>
                                <FontAwesome
                                    name={'angle-right'}
                                    color={Colors[theme]?.black}
                                    size={moderateScale(20)}
                                />
                            </View>
                        </TouchableOpacity>
                    ))
                }

            </View>
        </View>
    )
}

export default FundAccountCard