import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView } from 'react-native';
import { Button,Divider, makeStyles } from 'react-native-elements';
import logo from '../assets/logo.png';
import ts from '../assets/ts.jpeg';
import  Speed  from './components/Speed';

export default function Home({navigation}) {

  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground source={ts} resizeMode="cover" style={styles.image}>
        <Image
          source={logo}   
            style={{ width: 200, height: 200 }}        
        />
      </ImageBackground>
      <Text style={styles.welcome} >Bem Vindo!</Text>
      <Button
      style={styles.buttom}
        title="Cadastrar empresa"
        onPress={() =>
            navigation.navigate('CadastroEmp')
          }
      />
      <Divider style={styles.dv} orientation="horizontal" />
      <Button
      style={styles.buttom}
        title="Cadastrar motoboy"
        onPress={() =>
            navigation.navigate('CadastroMoto')
          }
      />
      <Divider style={styles.dv} orientation="horizontal" />
      <Button
      style={styles.buttom}
        title="Acessar conta"
        onPress={() =>
            navigation.navigate('Login')
          }
      />
      <Speed navigation={navigation}/>
      <StatusBar style="auto" />

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  dv:{
    marginBottom: 10,
  },
  buttom: {
    marginBottom: 15,
    borderRadius:15,
    padding:15
  },
  welcome: {   
    fontSize: 33,
    marginTop:15,
    marginBottom:15
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    alignItems: 'center',
    maxHeight:'50%',
    top:0
  },

});