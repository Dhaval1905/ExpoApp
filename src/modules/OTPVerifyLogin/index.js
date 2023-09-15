import React, { useRef, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
// import OtpInputs from 'react-native-otp-inputs';
import { useDispatch, useSelector } from 'react-redux';
import { Icons } from '../../assets';
import { CustomButton, CustomHeader, MoveMoneyCard } from '../../components';
import { navigationStrings } from '../../constants';
import { Strings } from '../../constants/Strings';
import { Colors } from '../../theme';
import styling from './styles';
import { resendOTP, showLoader, verifyOtp } from '../../redux/actions/user';
import { showMessage } from 'react-native-flash-message';
import { save } from '../../utils/Storage';
// import OTPInputView from '@twotalltotems/react-native-otp-input'
import OTPTextView from 'react-native-otp-textinput';

const OTPVerifyLogin = ({ navigation }) => {
    const route = useRoute();
    let otpInput = useRef(null);
    const theme = route?.params?.theme;
    const styles = styling(theme);
    const userDetails = useSelector(state => state?.user?.login)
    const dispatch = useDispatch()
    const [otp, setOtp] = useState('')
    const [otpError, setOtpError] = useState('')
    const onLogin = async () => {
        if (otpInput.current === "") {
            setOtpError('Please enter otp.')
        } else {
            await dispatch(showLoader(true))
            let data = {
                // otp: otp
                otp: otpInput.current
            }
            let res = await verifyOtp(data)
            await dispatch(showLoader(false))
            if (res?.status === 0) {
                showMessage({
                    message: res?.message,
                    type: "danger",
                })
                await save('otpVerify', false)
            } else {
                await save('otpVerify', true)
                navigation.navigate(navigationStrings.BOTTOMTABSNAV)
            }
        }
    }
    const onPressResetPassword = async () => {
        await dispatch(showLoader(true))
        let res = await resendOTP()
        await dispatch(showLoader(false))
        if (res?.status === 0) {
            showMessage({
                message: res?.message,
                type: "danger",
            })
        } else {
            showMessage({
                message: "Please check your mail OTP resend successfully!",
                type: "success",
            })
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

                {/* <OtpInputs
                    handleChange={(code) => {
                        setOtp(code)
                        setOtpError('')
                    }}

                    numberOfInputs={6}
                    autoFocus
                    inputStyles={{ backgroundColor: 'white', width: 55, height: 70, borderRadius: 8, elevation: 2, margin: 1, fontSize: 20, alignItems: 'center', marginTop: 30, color: '#000' }}
                    textAlign='center'
                /> */}

                {/* <otpInput ref={e => (otpInput = e)} > */}
                <OTPTextView ref={e => (otpInput = e)} autoFocus={true} inputCount={6} inputCellLength={1} textInputStyle={{ backgroundColor: 'white', width: 55, height: 70, borderRadius: 8, elevation: 2, margin: 1, fontSize: 20, alignItems: 'center', marginTop: 30, color: '#000' }} />
                {otpError?.length > 0 && (
                    <Text style={styles.errorText}>
                        {otpError}
                    </Text>
                )}
                <TouchableOpacity onPress={() => onPressResetPassword()}>
                    <Text style={styles.resetPassword}>{"Resend verification code"}</Text>
                </TouchableOpacity>
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

export default OTPVerifyLogin;
