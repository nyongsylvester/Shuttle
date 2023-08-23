import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const Support = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main} >
        <StatusBar style='auto' />
        <View style={styles.container} >

            <Text style={{fontSize:18, fontWeight:'500'}}>How can we help?</Text>
            <View style={styles.top} >
                <View style={styles.circle} >
                    <MaterialIcons name="message" size={24} color="black" />
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Inbox')} style={styles.box} >
                    <Text style={styles.inbox} >Inbox</Text>
                    <Text style={styles.texts} >View open chats</Text>
                </TouchableOpacity>
                <AntDesign style={styles.right} name="right" size={24} color="#a7a7a7" />
            </View>
            <View style={styles.down} >
                <Text style={{fontWeight:'500'}} >Get help with something else</Text>
                <View style={styles.helps} >
                    <Text style={styles.help} >About Shuttle Track</Text>
                    <AntDesign style={styles.right} name="right" size={24} color="#a7a7a7" />
                </View>
                <View style={styles.helps} >
                    <Text style={styles.help} >App and features Track</Text>
                    <AntDesign style={styles.right} name="right" size={24} color="#a7a7a7" />
                </View>
                <View style={styles.helps} >
                    <Text style={styles.help} >Account and data Track</Text>
                    <AntDesign style={styles.right} name="right" size={24} color="#a7a7a7" />
                </View>
                <View style={styles.helps} >
                    <Text style={styles.help} >Payment and pricing</Text>
                    <AntDesign style={styles.right} name="right" size={24} color="#a7a7a7" />
                </View>
                <View style={styles.helps} >
                    <Text style={styles.help} >Using Shuttle Track</Text>
                    <AntDesign style={styles.right} name="right" size={24} color="#a7a7a7" />
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Support

const styles = StyleSheet.create({
    help:{
        marginLeft:5,
    },
    helps:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'#a7a7a7',
        borderBottomWidth:1,
        paddingVertical:12,
    },
    down:{
        width:'100%',
        gap:15,
        marginTop:15,
    },
    right:{
        position:'absolute',
        right:10
    },
    inbox:{
        fontSize:16,
        fontWeight:'500',
    },
    box:{
        flexDirection:'column',
    },
    circle:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'lightgrey',
        padding:10,
        borderRadius:22,
    },
    top:{
        flexDirection:'row',
        alignItems:'center',
        gap: 15,
        width:'100%'
    },
    container:{
        marginTop:70,
        width:'85%',
        gap:20,
    },
    main:{
        width:'100%',
        flex:1,
        alignItems:'center'
    }
})