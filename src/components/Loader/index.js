import { useRoute } from '@react-navigation/native';
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { useSelector } from 'react-redux';
import { Colors, horizontalScale, moderateScale } from '../../theme'
import { Image, Text, View } from 'react-native'
import { Fonts, Icons } from '../../assets';

export const Loader = ({ theme }) => {
    const loader = useSelector(state => state?.user?.loader)
    return (
        <>
            {loader ?
                <View style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                }}>
                    <View style={{
                        height: 150,
                        width: '85%',
                        backgroundColor: '#FFFFFF',
                        alignSelf: 'center',
                        borderRadius: horizontalScale(24),
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/* <Image source={Icons.bank_transfer} style={{
                            height:30,
                            width:30,
                            tintColor:Colors[theme].blue
                        }} /> */}
                        <Image source={require("../../assets/images/please_wait.gif")} style={{
                            height: moderateScale(70),
                            width: moderateScale(70),
                            // backgroundColor: Colors[theme].blue,
                        }} />
                        <Text style={{
                            color: '#000',
                            fontFamily: Fonts.medium,
                            fontSize: 18,
                            marginTop: horizontalScale(30)
                        }} >Please wait...</Text>
                    </View>
                </View>
                :
                <></>
            }
        </>
    )
}
