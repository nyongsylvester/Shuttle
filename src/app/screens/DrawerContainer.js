import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo, FontAwesome, Feather, AntDesign } from '@expo/vector-icons';
import TabContainer from './TabContainer';
import { Colours } from '../miscellaneouses/utils/Colours';
import Home from './tabs/Home';
import Payment from './drawers/Payment';
import Notifications from './drawers/Notifications';
import Support from './drawers/Support';
import About from './drawers/About';

const DrawerContainer = () => {
    const Drawer = createDrawerNavigator();
    const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
    detachInactiveScreens
    defaultStatus='open'
    screenOptions={{
        drawerStyle: { 
          backgroundColor:'#fff',
          height:'100%',
          elevation:5,
          drawerType: isLargeScreen ? 'permanent' : 'back',
          drawerStyle: isLargeScreen ? null : { width: '100%' },
          overlayColor: 'transparent',
      },
      
      lazy:true,
      }}
      backBehavior='none'
    >
        <Drawer.Screen
           options={{
               headerShown:true,
               drawerIcon:({focused})=>(
               <AntDesign name="wallet" size={24} color={focused? Colours.yellow: "#99999B"} />),
               drawerActiveTintColor:'black',  
               drawerLabel:'Payments',
               drawerLabelStyle:{fontWeight:'bold', fontSize:13},
               headerTitleAlign:'center',
               headerStyle:{
               height:80,
               }
               // drawerHideStatusBarOnOpen:true,
           }} name="Payment" component={Payment}
       />
         <Drawer.Screen
            options={{
                headerShown:true,
                drawerIcon:({focused})=>(
                <Feather name="bell" size={24} color={focused? Colours.yellow: "#99999B"} />),
                drawerActiveTintColor:'black',  
                drawerLabel:'Notifications',
                drawerLabelStyle:{fontWeight:'bold', fontSize:13},
                headerTitleAlign:'center',
                headerStyle:{
                height:80,
                }
                // drawerHideStatusBarOnOpen:true,
            }} name="Notifications" component={Notifications}
        />
         <Drawer.Screen
            options={{
                headerShown:true,
                drawerIcon:({focused})=>(
                <Feather name="help-circle" size={24} color={focused? Colours.yellow: "#99999B"} />),
                drawerActiveTintColor:'black',  
                drawerLabel:'Support',
                drawerLabelStyle:{fontWeight:'bold', fontSize:13},
                headerTitleAlign:'center',
                headerStyle:{
                height:80,
                }
                // drawerHideStatusBarOnOpen:true,
            }} name="Support" component={Support}
        />
         <Drawer.Screen
            options={{
                headerShown:true,
                drawerIcon:({focused})=>(
                <Feather name="info" size={24} color={focused? Colours.yellow: "#99999B"} />),
                drawerActiveTintColor:'black',  
                drawerLabel:'About',
                drawerLabelStyle:{fontWeight:'bold', fontSize:13},
                headerTitleAlign:'center',
                headerStyle:{
                height:80,
                }
                // drawerHideStatusBarOnOpen:true,
            }} name="About" component={About}
        />
    </Drawer.Navigator>
  )
}

export default DrawerContainer