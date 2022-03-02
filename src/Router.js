import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/login';
import Signup from './screen/signup';
import Home from './screen/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Detailvehicle from './screen/detailvehicle';
import { View } from 'react-native';
import Profile from './screen/profile';
import Updateprofile from './screen/updateprofile';
import Reservation from './screen/reservation';
import Payment2 from './screen/paymentsecondstep';
import Paymentfinish from './screen/paymentfinish';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
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
    <Stack.Screen name = "reservation" component={Reservation}/>
    <Stack.Screen name = "payment2" component={Payment2}/>
    <Stack.Screen name = "paymentfinish" component={Paymentfinish}/>
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
      // options={{
      //   tabBarShowLabel: false,
      //   tabBarIcon: ({focused}) => (
      //     <View>
      //       <Image
      //         source={require('./assets/home.png')}
      //         resizeMode="contain"
      //         style={{
      //           width: 55,
      //           height: 55,
      //           tintColor: focused ? '#ffcd61' : '#393939',
      //         }}
      //       />
      //     </View>
      //   ),
      // }}
      name="Home"
      component={HomeTab}
    />
    <Tab.Screen name="Profile" component={ProfileTab}/>
  </Tab.Navigator>
);

// const Vehicle = () => (
//   <Tab.Navigator screenOptions={{headerShown: false}}>
//     <Tab.Screen name="Home" component={Home} />
//   </Tab.Navigator>
// );





export default Router;
