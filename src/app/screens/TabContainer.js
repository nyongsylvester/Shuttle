import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import Home from './tabs/Home';
import { Colours } from '../miscellaneouses/utils/Colours';
import Settings from './tabs/Settings';
import DrawerContainer from './DrawerContainer';

const TabContainer = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            tabBarStyle: { 
              backgroundColor:'#fff',
              height:60,
              elevation:5,
              paddingBottom:5,
          },
          lazy:true,
          }}
          backBehavior='initialRoute'
    >
        <Tab.Screen
            options={{
                headerShown:false,
                tabBarIcon:({focused})=>(
                <Entypo name="home" size={24} color={focused? Colours.yellow: "#99999B"} />),
                tabBarActiveTintColor:'black',  
                tabBarLabel:'Home',
                tabBarLabelStyle:{fontWeight:'bold', fontSize:13},
                tabBarHideOnKeyboard:true,
                tabBarInactiveTintColor:'black',
            }} name="Home" component={Home}
            />
        <Tab.Screen
            options={{
                headerShown:false,
                tabBarIcon:({focused})=>(
                <Entypo name="menu" size={24} color={focused? Colours.yellow: "#99999B"} />),
                tabBarActiveTintColor:'black',  
                tabBarInactiveTintColor:'black',
                tabBarLabel:'Menu',
                tabBarLabelStyle:{fontWeight:'bold', fontSize:13},
                tabBarHideOnKeyboard:true,
            }} name="Drawer" component={DrawerContainer}
            />
        <Tab.Screen
            options={{
                headerShown:false,
                tabBarIcon:({focused})=>(
                <FontAwesome name="user" size={24} color={focused? Colours.yellow: "#99999B"} />),
                tabBarActiveTintColor:'black',  
                tabBarInactiveTintColor:'black',
                tabBarLabel:'Account',
                tabBarLabelStyle:{fontWeight:'bold', fontSize:13},
                tabBarHideOnKeyboard:true,
            }} name="Settings" component={Settings}
            />
    </Tab.Navigator>
  )
}

export default TabContainer