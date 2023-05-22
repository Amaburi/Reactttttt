import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";


import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () =>{
    const [fontsLoaded] = useFonts({
        DMBold: require('./assets/fonts/DMSans-Bold.ttf'),
        DMMeduim: require('./assets/fonts/DMSans-Medium.ttf'),
        DMRegural: require('./assets/fonts/DMSans-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async ()=> {
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;
    return <Stack onLayout={onLayoutRootView}/>
}

export default Layout;