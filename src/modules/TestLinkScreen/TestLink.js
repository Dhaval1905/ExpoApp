import { Text, View } from "react-native";
import styling from "./TestLinkStyle";
import { useRoute } from "@react-navigation/native";
import { navigationStrings } from "../../constants";
import { CustomButton, CustomHeader } from "../../components";
import { Colors } from "../../theme";

let linkData=[
    {
        name:'ACH Authorization Agreement Disclosure',
       key:"ach-authorization-agreement-disclosure"
    },
    {
        name:'Business Cardholder Agreement',
       key:"business-cardholder-agreement"
    },
    {
        name:'Commercial Checking Account Agreement - Regent Bank',
       key:"commercial-checking-account-agreement-regent-bank"
    },
    {
        name:'Error Resolution Disclosure',
       key:"error-resolution-disclosure"
    },
    {
        name:'E-Sign Consent Disclosure',
       key:"e-sign-consent-disclosure"
    },
    {
        name:'Personal Cardholder Agreement',
       key:"personal-cardholder-agreement"
    },
    {
        name:'Reg CC (Funds Availability) Disclosure',
       key:"reg-cc-funds-availability-disclosure"
    },
    {
        name:'Reg DD (Truth in Savings Act) Disclosure',
       key:"reg-dd-truth-in-savings-act-disclosure"
    },
    {
        name:'ReThink Terms of Use Agreement',
       key:"rethink-terms-of-use-agreement"
    },
    {
        name:'USA Patriot Act (KYC) Disclosure',
       key:"usa-patriot-act-kyc-disclosure"
    },
    {
        name:'Privacy Policy',
       key:"privacy-policy"
    },
    {
        name:'Owner Certification',
       key:"owner-certification"
    },
]

const TestLink = ({ navigation }) => {
    const route = useRoute();
    const theme = route?.params?.theme;
    const styles = styling(theme);
    return (
        <View style={{flex:1, backgroundColor: Colors[theme]?.screenBackground}}>
             <CustomHeader
        theme={theme}
        headerTitle={'Disclosures'}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.screen}>
            <Text style={styles.headTxt}>A few more things we need you to see:</Text>
            <View style={styles.card}>
            {linkData.map((item,index)=>{
                return(
                <Text style={styles.linkText} onPress={() => { navigation.navigate(navigationStrings.WEBVIEWSCREEN, { url: item?.key }) }}>
                    {item?.name}
                </Text>
                )
            })}
            </View>
        </View>
        </View>
    )
}

export default TestLink;