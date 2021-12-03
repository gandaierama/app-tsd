import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Vibration, Alert, ImageBackground, Image, SafeAreaView } from 'react-native';
import { Link,Button, SpeedDial, makeStyles, Input } from 'react-native-elements';
import logo from '../assets/logo.png';
import ts from '../assets/ts.jpeg';
import Icon from 'react-native-vector-icons/FontAwesome';
import  Header  from './components/Header';
import  Speed  from './components/Speed';
export default function Esqueci({navigation}) {


  const [open, setOpen] = useState (false);

  const esqueci = ()=>{
      Vibration.vibrate();

      Alert.alert(
        "Recuperação de senha enviada!",
        "Verifique sua caixa de entrada!!",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      console.log("entrar");
  }
  return (
    <>
    <SafeAreaView style={styles.container} >

      <Header title='Esqueci a senha'/>

      <View style={styles.box}>
      <Input
        placeholder='E-mail'
        leftIcon={{ type: 'feather', name: 'mail' }}
      />
      


      
    <Text style={styles.text}>Digite seu email e verifique sua caixa de entrada. </Text>


    <Button
      style={styles.buttom}
        title="Lembrar"
        onPress={() =>
            esqueci()
          }
      />

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
    borderRadius: 15,
    marginTop: 15
  },
  text: {   
    fontSize: 18,
    color:'#006AFF',
    textAlign:'center',
    marginTop: 15,
    marginBottom: 25
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
    marginTop:50
  }

});