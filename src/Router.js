import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/login';
import Signup from './screen/signup';
import Home from './screen/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Detailvehicle from './screen/detailvehicle';
import Profile from './screen/profile';
import Updateprofile from './screen/updateprofile';
import Reservation from './screen/reservation';
import Payment2 from './screen/paymentsecondstep';
import Paymentfinish from './screen/paymentfinish';
import History from './screen/history';
import Chat from './screen/chat';
import Chatdetail from './screen/chatdetail';
import Vehicleall from './screen/vehicleall';
import Addvehicle from './screen/addvehicle';
import Updatevehicle from './screen/updatevehicle';
const iconHome = require('./assets/home.png');
const iconHistory = require('./assets/history.png');
const iconProfile = require('./assets/profile.png');
const iconChat = require('./assets/chat.png');
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Chat" component={Chat} /> */}
    <Stack.Screen name="Login" component={Login} />
    
    <Stack.Screen name="Home" component={TabsNav} />
    <Stack.Screen name="Signup" component={Signup} />
  </Stack.Navigator>
);
const HomeTab = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detailvehicle" component={Detailvehicle} />
    <Stack.Screen name="Allvehicle" component={Vehicleall}/>
    <Stack.Screen name = "reservation" component={Reservation}/>
    <Stack.Screen name = "payment2" component={Payment2}/>
    <Stack.Screen name = "paymentfinish" component={Paymentfinish}/>
    <Stack.Screen name='Vehicleadd'component={Addvehicle}/>
    <Stack.Screen name="vehicleupdate" component={Updatevehicle}/>
  </Stack.Navigator>
);
const ProfileTab = () => (
  <Stack.Navigator
  screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Update Profile" component={Updateprofile}/>
  </Stack.Navigator>
)
const HistoryTab = () => (
  <Stack.Navigator
  screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name="History" component={History} />
    {/* <Stack.Screen name="Update Profile" component={Updateprofile}/> */}
  </Stack.Navigator>
)
const ChatTab = () => (
  <Stack.Navigator
  screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name="Chat" component={Chat} />
    <Stack.Screen name="DetailChat" component={Chatdetail}/>
  </Stack.Navigator>
)

const TabsNav = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{headerShown: false}}
    // screenOptions={{
    //   headerShown: false,
    //   tabBarStyle: {
    //     height: 70,
    //     borderRadius: 10,
    //     ...styles.shadow,
    //   },
    // }}
    >
    <Tab.Screen
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <View
            style={{
              ...styles.tabIconWrapper,
              backgroundColor: focused && 'rgba(255, 199, 167, 0.2)',
            }}>
            <Image
              source={iconHome}
              resizeMode="contain"
              resizeMethod="scale"
              style={{
                tintColor: focused ? '#FFCD61' : '#DFDEDE',
                ...styles.tabIcon,
              }}
            />
          </View>
        ),
      }}
      name="HomeTab"
      component={HomeTab}
    />
    <Tab.Screen 
    options={{
      tabBarShowLabel: false,
      tabBarIcon: ({focused}) => (
        <View
          style={{
            ...styles.tabIconWrapper,
            backgroundColor: focused && 'rgba(255, 199, 167, 0.2)',
          }}>
          <Image
            source={iconHistory}
            resizeMode="contain"
            resizeMethod="scale"
            style={{
              tintColor: focused ? '#FFCD61' : '#DFDEDE',
              ...styles.tabIcon,
            }}
          />
        </View>
      ),
    }}
    name="Historytab" 
    component={HistoryTab}
    />
    <Tab.Screen 
    options={{
      tabBarShowLabel: false,
      tabBarIcon: ({focused}) => (
        <View
          style={{
            ...styles.tabIconWrapper,
            backgroundColor: focused && 'rgba(255, 199, 167, 0.2)',
          }}>
          <Image
            source={iconChat}
            resizeMode="contain"
            resizeMethod="scale"
            style={{
              tintColor: focused ? '#FFCD61' : '#DFDEDE',
              ...styles.tabIcon,
            }}
          />
        </View>
      ),
    }}
    name="Chattab" 
    component={ChatTab}
    />
    <Tab.Screen 
    options={{
      tabBarShowLabel: false,
      tabBarIcon: ({focused}) => (
        <View
          style={{
            ...styles.tabIconWrapper,
            backgroundColor: focused && 'rgba(255, 199, 167, 0.2)',
          }}>
          <Image
            source={iconProfile}
            resizeMode="contain"
            resizeMethod="scale"
            style={{
              tintColor: focused ? '#FFCD61' : '#DFDEDE',
              ...styles.tabIcon,
            }}
          />
        </View>
      ),
    }}
    name="Profiletab" 
    component={ProfileTab}
    />
  </Tab.Navigator>
);

// const Vehicle = () => (
//   <Tab.Navigator screenOptions={{headerShown: false}}>
//     <Tab.Screen name="Home" component={Home} />
//   </Tab.Navigator>
// );

const styles = StyleSheet.create({
  tabWrapper: {
    height: 60,
    borderRadius: 5,
  },
  tabIconWrapper: {
    position: 'relative',
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  tabIcon: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 5,
    height: 25,
    opacity: 1,
    width: 25,
  },
});




export default Router;
