import React from 'react';
import { StyleSheet, View,Text,  ImageBackground, Image } from 'react-native';
import logo from '../../assets/logo.png';
import ts from '../../assets/ts.jpeg';


export default function Header ({title}) {

    return (
   
      <ImageBackground source={ts} resizeMode="cover" style={styles.image}>
        <View style={{ flex: 1, alignItems: 'center'}} >
          <Image
          source={logo}
          style={{ width: 70, height: 70,marginTop:40, marginBottom:40 }}
          />
        </View>
        <View style={{ flex: 2, color:'#000', overflow:'hidden', height:30 }} >
          <Text style={styles.text}>{title}</Text>

        </View>
      </ImageBackground>

    );

}

const styles = StyleSheet.create({
    image: {
    flex: 1,
    flexDirection: "row",
    width: '100%',
    alignItems: 'center',
    maxHeight:'20%',
    overflow:'hidden',
    position: 'relative',
    paddingTop:20,
    fontSize: 24,
    paddingBottom:20,
    top:0
  },
  text:{
    fontSize: 20,
    fontWeight:'bold'
  }

});