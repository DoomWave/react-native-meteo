import { Text, View } from "react-native";
import  { s } from "./Home.style"
import { Txt } from "../../components/Txt/Txt";
export function Home(){
    return <>
    <View style={s.meteo_basic}>
        <Txt onPress={() => console.log("hello")} style={{fontSize: 70}}>Ze~</Txt>
    </View>
    <View style={s.meteo_searchbar_container}>
        <Txt style={s.txt}>SearchBar</Txt>
    </View>
    <View style={s.meteo_advanced}>
        <Txt style={s.txt}>Advance Weather info</Txt>
    </View>
    </>
}