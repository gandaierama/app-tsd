import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, Vibration, Alert, View, ImageBackground, Image, SafeAreaView } from 'react-native';
import { Button, CheckBox, Input, SpeedDial, makeStyles } from 'react-native-elements';
import logo from '../assets/logo.png';
import ts from '../assets/ts.jpeg';
import  Header  from './components/Header';
import  Speed  from './components/Speed';
export default function Login({navigation}) {

  const cadastro = ()=>{
      Vibration.vibrate();

      Alert.alert(
        "Falha ao cadastrar",
        "Preencha todos os dados corretamente!!",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      console.log("entrar");
  }

  const [open, setOpen] = useState (false);
   const [check, setCheck] = useState (false);
  return (
        <>
        <ScrollView>
    <SafeAreaView style={styles.container}>

      <Header title='Cadastro Empresa'/>

      <View style={styles.box}>
      
      <Input
        placeholder='Nome'
        leftIcon={{ type: 'feather', name: 'user' }}
      />
      <Input
        placeholder='E-mail'
        leftIcon={{ type: 'feather', name: 'mail' }}
      />
      <Input
        placeholder='CNPJ'
        leftIcon={{ type: 'ant-design', name: 'idcard' }}
      />
      <Input
        placeholder='CEP'
        leftIcon={{ type: 'material-icons', name: 'place' }}
      />

      <CheckBox
        left
        title='Aceito os termos de uso'
        checked={check}
        onPress={() => setCheck({checked: !check})}
      />

      <Button
      style={styles.buttom}
        title="Cadastrar"
        onPress={() =>
            cadastro()
          }
      />



      </View>
      
      <StatusBar style="auto" />

    </SafeAreaView>
    </ScrollView>
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
    marginTop:10
  }

});