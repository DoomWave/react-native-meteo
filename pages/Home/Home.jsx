import { Text, View } from "react-native";
import  { s } from "./Home.style"
export function Home(){
    return <>
    <View style={s.meteo_basic}>
        <Text style={s.txt}>Basic Weather info</Text>
    </View>
    <View style={s.meteo_searchbar_container}>
        <Text style={s.txt}>SearchBar</Text>
    </View>
    <View style={s.meteo_advanced}>
        <Text style={s.txt}>Advance Weather info</Text>
    </View>
    </>
}