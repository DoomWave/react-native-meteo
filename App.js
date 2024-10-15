import { s } from "./App.style"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { Home } from "./pages/Home/Home"
import { ImageBackground } from "react-native"
import backgroundImg from "./assets/background.png"
import { useEffect, useState } from "react"
import { 
  getCurrentPositionAsync, 
  requestForegroundPermissionsAsync
} from "expo-location"
import { MeteoAPI } from "./api/meteo"
import {useFonts } from "expo-font"
export default function App() {
  const [ coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  })

  console.log(isFontLoaded);
  useEffect(()=>{
    getUserCoordinates();
  }, [])

  useEffect(()=>{
    if(coordinates){
      fetchWeatherByCoords(coordinates)
    }
  }, [coordinates])

  async function fetchWeatherByCoords(coords){
    const WeatherResponse = await MeteoAPI.fetchWeatherByCoords(coords)
    setWeather(WeatherResponse)
  }

  async function getUserCoordinates(){
    const {status} = await requestForegroundPermissionsAsync()
    if(status==="granted"){
      const location = await getCurrentPositionAsync()
      setCoordinates({
        lat : location.coords.latitude, 
        lng: location.coords.longitude
      })
    }else{
      setCoordinates({lat: "48.85", lng: "2.35"})
    }
  }
  console.log(coordinates)
  console.log(weather);

  return (
    <ImageBackground imageStyle={s.img} style={s.img_background} source={backgroundImg}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
         {isFontLoaded && weather && <Home weather={weather} />}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  )
}
