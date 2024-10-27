import { TouchableOpacity, View } from "react-native"
import { s } from "./Header.style.js"
import { Txt } from "../Txt/Txt.jsx"
import { useNavigation } from "@react-navigation/native";

export function Header({}) {
    const nav = useNavigation()
    return (
    <View>
        <TouchableOpacity onPress={()=> nav.goBack}>
            <Txt>{"<"}</Txt>
        </TouchableOpacity>
        <View>
           <Txt></Txt>
           <Txt></Txt>
        </View>
    </View>
    );
}
