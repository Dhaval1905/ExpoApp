import { useRoute } from "@react-navigation/native";
import { Platform, ScrollView, View } from "react-native";
import WebView from "react-native-webview";
import { CustomHeader } from "../CustomHeader";
import { getDisclosureLink } from "../../redux/actions/user";
import { useEffect, useState } from "react";
// import HTMLView from "react-native-htmlview";
import { Fonts } from "../../assets";
import HTML from 'react-native-render-html';
import { Text } from "react-native";
import { Colors, horizontalScale } from "../../theme";

const WebviewScreen = ({ navigation }) => {
    const route = useRoute();
    const theme = route?.params?.theme;
    const { url } = route.params
    const [term, setTerm] = useState({})
    useEffect(() => {
        (async () => {
            let data = {
                key: url
            }
            let res = await getDisclosureLink(data)
            setTerm(res?.data)
        })()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                theme={theme}
                headerTitle={""}
                onPressBack={() => navigation.goBack()}
            />
            <ScrollView style={{ paddingHorizontal: 15, paddingTop: 10 }}>
                <Text style={{
                    fontSize: Platform.OS === "web" ? 16 : horizontalScale(16), color: Colors[theme].black, fontFamily: Fonts.medium,
                    textAlign: 'center'
                }}>{term?.name}</Text>
                {/* <HTMLView
        value={term?.description || '<p>no page found!</p>'}
        paragraphBreak={false}
        textComponentProps={{
            style: [{ color: '#000000',fontFamily:Fonts.medium }],
          }}
      /> */}
                <HTML source={{ html: term?.description || '<p>no page found!</p>' }} />
            </ScrollView>
        </View>
    )
}
export default WebviewScreen;