import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const Inbox = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar style='auto' />
      <View style={styles.header} >
            <Ionicons onPress={()=>navigation.goBack()} style={styles.headicon} name="chevron-back-circle-sharp" size={24} />
            <Text style={styles.head} >Inbox</Text>
        </View>
      <View style={styles.container} >
        <View style={styles.circle} >
            <FontAwesome5 name="mail-bulk" size={80} color="#5a5a5a" />
        </View>
        <Text>No open chats with Shuttle Track support </Text>
      </View>
    </SafeAreaView>
  )
}

export default Inbox

const styles = StyleSheet.create({
  headicon:{
    position:'absolute',
    left:0,
    fontSize:30,
    color:'grey'
},
head:{
    fontWeight:'500',
    fontSize:20,
},
header:{
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    marginTop:50,
    // alignSelf:'flex-start'
},
    circle:{
        alignItems:'center',
        justifyContent:'center',
        padding:30,
        backgroundColor:'#d3d3d3cc',
        borderRadius:90
    },
    container:{
        alignItems:'center',
        justifyContent:'center',
        gap:10,
        height:'90%'
    },
    main:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
})