import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Login from './pages/Login';
import CadastroMoto from './pages/CadastroMoto';
import CadastroEmp from './pages/CadastroEmp';
import Esqueci from './pages/Esqueci';
import OneSignal from 'react-native-onesignal';
import Teste from './pages/Teste';

const Stack = createStackNavigator();


//OneSignal Init Code
OneSignal.setLogLevel(6, 0);
OneSignal.setAppId("63346be5-e1ef-4dfe-b1f7-567d03f096b0");
//END OneSignal Init Code

//Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse(response => {
  console.log("Prompt response:", response);
});

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  let notification = notificationReceivedEvent.getNotification();
  console.log("notification: ", notification);
  const data = notification.additionalData
  console.log("additionalData: ", data);
  // Complete with null means don't show a notification.
  notificationReceivedEvent.complete(notification);
});

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log("OneSignal: notification opened:", notification);
});

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name="CadastroMoto"
            options={{ title: 'Cadastro de Motoboy' }}
            component={CadastroMoto}
          />
          <Stack.Screen
            name="CadastroEmp"
            options={{ title: 'Cadastro de Empresa' }}
            component={CadastroEmp}
          />
          <Stack.Screen
            name="Esqueci"
            options={{ title: 'Esqueci a senha' }}
            component={Esqueci}
          />

          <Stack.Screen
            name="Teste"
            options={{ title: 'Teste' }}
            component={Teste}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;