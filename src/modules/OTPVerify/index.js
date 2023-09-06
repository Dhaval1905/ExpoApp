import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import { useSelector } from 'react-redux';
import { Icons } from '../../assets';
import { CustomButton, CustomHeader, MoveMoneyCard } from '../../components';
import { navigationStrings } from '../../constants';
import { Strings } from '../../constants/Strings';
import { Colors } from '../../theme';
import styling from './styles';

const OTPVerify = ({ navigation }) => {
    const route = useRoute();
    const theme = route?.params?.theme;
    const styles = styling(theme);
    const userDetails = useSelector(state => state?.user?.login)
    const [otp, setOtp] = useState('')
    const [otpError, setOtpError] = useState('')
    const onLogin = () => {
        if (otp.length === 0) {
            setOtpError('Please enter otp.')
        } else if (otp !== route?.params?.verification_code) {
            setOtpError('Please enter correct otp.')
        } else {
            navigation.navigate(navigationStrings.CONFIRMPASSWORD, { email: route?.params?.email })
        }
    }
    return (
        <View style={styles.screen}>
            <CustomHeader
                theme={theme}
                headerTitle={"Verification Code"}
                onPressBack={() => navigation.goBack()}
            />
            <ScrollView style={styles.scrollView}>
            <Text style={styles.errorText1}>
            Enter verification code sent to {userDetails?.data?.personDetail?.[0]?.email || ''} 
                    </Text>
                <OtpInputs
                    handleChange={(code) => {
                        setOtp(code)
                        setOtpError('')
                    }}
                    numberOfInputs={6}
                    autoFocus
                    inputStyles={{ backgroundColor: 'white', width: 55, height: 70, borderRadius: 8, elevation: 2, margin: 1, fontSize: 20, alignItems: 'center', marginTop: 30 }}
                    textAlign='center'
                />
                {otpError?.length > 0 && (
                    <Text style={styles.errorText}>
                        {otpError}
                    </Text>
                )}
            </ScrollView>
            <View style={styles.ConfirmParent}>
                <CustomButton
                    theme={theme}
                    onBtnPress={() => onLogin()}
                    buttonTitle={Strings.confirm}
                    buttonStyle={styles.confirmBtn}
                    buttonTitleStyle={styles.confirmText}
                />
            </View>
        </View>
    );
};

export default OTPVerify;
