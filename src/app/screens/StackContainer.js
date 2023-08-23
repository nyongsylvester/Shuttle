import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Explore from './stacks/Explore';
import Login from './auth/Login';
import Register from './auth/Register';
import TabContainer from './TabContainer';
import Card from './stacks/Card';
import Inbox from './stacks/Inbox';
import Edit from './stacks/Edit';
import EmailVerify from './stacks/EmailVerify';
import Track from './stacks/Track';

const StackContainer = () => {
    const Stack = createStackNavigator();
  return (
   <Stack.Navigator
   initialRouteName={'Explore'}
     backBehavior='initialRoute'
   >
        <Stack.Screen name='Explore' options={ {
            headerShown:false,
            headerTitleAlign:'center',
        }} component={Explore} />
        <Stack.Screen name='Login' options={ {
            headerShown:true,
            headerTitleAlign:'center',
            headerStyle:{
                height:70
            }
        }} component={Login} />

        <Stack.Screen name='Register' options={ {
            headerShown:true,
            headerTitleAlign:'center',
            headerStyle:{
                height:70
            }
        }} component={Register} />
        <Stack.Screen name='Tab' options={ {
            headerShown:false,
            headerTitleAlign:'center',
            
        }} component={TabContainer} />
        <Stack.Screen name='Card' options={ {
            headerShown:false,
            headerTitleAlign:'center',
            
        }} component={Card} />
        <Stack.Screen name='Inbox' options={ {
            headerShown:false,
            headerTitleAlign:'center',
            
        }} component={Inbox} />
        <Stack.Screen name='Edit' options={ {
            headerShown:false,
            headerTitleAlign:'center',
            
        }} component={Edit} />
        <Stack.Screen name='Verify' options={ {
            headerShown:false,
            headerTitleAlign:'center',
            
        }} component={EmailVerify} />
        <Stack.Screen name='Track' options={ {
            headerShown:false,
            headerTitleAlign:'center',
            
        }} component={Track} />
   </Stack.Navigator>
  )
}

export default StackContainer