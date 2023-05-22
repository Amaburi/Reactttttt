import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import RoundButton from "../../components/button/btn";

import { white } from 'react-native-paper/lib/typescript/styles/colors';

const Login = ({navigation}) => {

    const loginsc = () => {
        navigation.navigate('loginsc');
    };

    return(
        <SafeAreaView style={styles.root}>
          <RoundButton title="PLAY" onPress={homesc} style={{left: 140, top: 20}} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root:{
        backgroundColor: white
    }
})

export default Login;