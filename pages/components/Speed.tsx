import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {  SpeedDial, makeStyles } from 'react-native-elements';


export default function Speed ({navigation}) {
    const [open, setOpen] = useState (false);
    return (
   
      <SpeedDial
        isOpen={open}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title="Cadastrar Empresa"
          onPress={() =>
            navigation.navigate('CadastroEmp')
          }
        />
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title="Cadastrar Motoboy"
          onPress={() =>
            navigation.navigate('CadastroMoto')
          }
        />
        <SpeedDial.Action
          icon={{ name: 'login', color: '#fff' }}
          title="Login"
  
          onPress={() =>
            navigation.navigate('Login')
          }
        />

        <SpeedDial.Action
          icon={{ name: 'login', color: '#fff' }}
          title="Teste"
  
          onPress={() =>
            navigation.navigate('Teste')
          }
        />
      </SpeedDial>

    );

}

const styles = StyleSheet.create({
    

});