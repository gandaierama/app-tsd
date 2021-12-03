import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet,Vibration,Alert, ScrollView, Text,Platform, Dimensions, PermissionsAndroid,  View, ImageBackground, Image, SafeAreaView } from 'react-native';
import { Link,Button,Divider, SpeedDial, makeStyles, Input } from 'react-native-elements';
import logo from '../assets/logo.png';
import ts from '../assets/ts.jpeg';
import Icon from 'react-native-vector-icons/FontAwesome';
import  Header  from './components/Header';
import  Speed  from './components/Speed';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
export default function Teste({navigation}) {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [open, setOpen] = useState(null);

  const [region, setRegion] = useState ({
    region: {
      latitude: -23.78825,
      longitude: -46.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const regionFrom= (lat, lon, accuracy)=>{
    const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
    const circumference = (40075 / 360) * 1000;

    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const lonDelta = (accuracy / oneDegreeOfLongitudeInMeters);

    return {
    region: {
      latitude: lat,
      longitude: lon,
      latitudeDelta: Math.max(0, latDelta),
      longitudeDelta: Math.max(0, lonDelta),
      },
    };
  }


const getInitialState=() =>{
  return {
    region: {
      latitude: -23.78825,
      longitude: -46.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };
}

const onRegionChange=(region) => {
  setLocation(region );
}


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = location.coords.latitude;
    let lat =location.coords.latitude;
    let lon =location.coords.longitude;
    let accuracy =location.coords.accuracy;
    let reg=regionFrom(Number(lat), Number(lon), accuracy);
    text = JSON.stringify(reg);
    onRegionChange(reg);
  }



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
    <ScrollView>
    <SafeAreaView style={styles.container}>

      <Header title='TESTE GEO'/>

      <View style={styles.box}>
      <Text >{text}</Text>
      
      <MapView style={styles.map} region={location}
  onRegionChange={onRegionChange} />
      
      
 
     


      
      


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
    width: '100%',
    marginTop:40
  },
  map: {
    width: '100%',
    height: 300,
  }

});