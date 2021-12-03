import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,Vibration,Alert,  View, ImageBackground, Image, SafeAreaView } from 'react-native';
import { Link,Button,Divider, SpeedDial, makeStyles, Input } from 'react-native-elements';
import logo from '../assets/logo.png';
import ts from '../assets/ts.jpeg';
import Icon from 'react-native-vector-icons/FontAwesome';
import  Header  from './components/Header';
import  Speed  from './components/Speed';

export default function Login({navigation}) {


  const [open, setOpen] = useState (false);

  const login = ()=>{
      Vibration.vibrate();

      Alert.alert(
        "Falha ao logar",
        "E-mail ou senha inválida!!",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      console.log("entrar");
  }
  return (
    <>
    <SafeAreaView style={styles.container}>

      <Header title='Login'/>

      <View style={styles.box}>
      
      <Input
        placeholder='E-mail'
        leftIcon={{ type: 'feather', name: 'mail' }}
      />
      
      <Input
        placeholder='Senha'
        type='password'
        leftIcon={{ type: 'feather', name: 'lock' }}
      />


      <Button
      style={styles.buttom}
        title="Entrar"
        onPress={() =>
            login()
          }
      />
    <Button title="Esqueci a senha"
    type='clear'
    style={styles.buttom2}
    onPress={() =>
            navigation.navigate('Esqueci')

          }/>
      <Button title="Não tem cadastro"
      type='clear'
      style={styles.buttom2}
      onPress={() =>
            navigation.navigate('Home')
          }/>


      </View>
      
      <StatusBar style="auto" />

    </SafeAreaView>
    <Speed navigation={navigation}/>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    minHeight:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'center'
  },
  buttom: {
    borderRadius:15,
    marginBottom:15
  },
  dv:{
    marginBottom: 10,
  },
  buttom2: {
    fontSize: 18,
    color:'#006AFF',
    borderRadius:15,
    marginBottom:15
  },
  welcome: {   
    fontSize: 38
  },
  image: {
    flex: 1,
    flexDirection: "row",
    width: '100%',
    alignItems: 'center',
    maxHeight:'40%',
    position: 'absolute',
    paddingTop:50,
    top:0
  },
  box: {
    justifyContent: "center",
    width: '70%',
    marginTop:40
  }

});