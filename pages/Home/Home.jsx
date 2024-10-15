import { Text, View } from "react-native";
import  { s } from "./Home.style"
import { Txt } from "../../components/Txt/Txt";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
export function Home({weather}){
    const currentWeather = weather.current_weather
    return <>
    <View style={s.meteo_basic}>
        <MeteoBasic temperature={Math.round(currentWeather.temperature)}/>
    </View>
    <View style={s.meteo_searchbar_container}>
        <Txt style={s.txt}>SearchBar</Txt>
    </View>
    <View style={s.meteo_advanced}>
        <Txt style={s.txt}>Advance Weather info</Txt>
    </View>
    </>
}