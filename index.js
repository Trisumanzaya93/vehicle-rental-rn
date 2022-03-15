import 'react-native-gesture-handler';
import Router from './src/Router';
import {AppRegistry, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {store, persistor} from './src/redux/store';
import PushNotification from "react-native-push-notification"

// FirebaseApp.initializeApp();

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);
  },
  onAction: function (notification) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);

    // process the action
  },
  popInitialNotification: true,
  requestPermissions: false,
})

PushNotification.createChannel({
  channelId:"123",
  channelName:"primary-notification"
}, created=>console.log(`create channel returned "${created}"`))


const AppWithNavAndRedux = () => (
    <Provider store={store}>
      <PersistGate
        loading={
          <View>
            <Text>Fetching</Text>
          </View>
        }
        persistor={persistor}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );


AppRegistry.registerComponent(appName, () => AppWithNavAndRedux);
