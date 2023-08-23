import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

const About = () => {
  return (
    <SafeAreaView style={styles.main}>
        <StatusBar style='auto' />
        <View style={styles.container} >
            <Text>Version 1.0.0</Text>
            <View style={styles.down} >
                <View style={styles.rate} > 
                    <Ionicons name="star-half" size={24} color="black" />
                    <Text style={styles.like} >Rate this app</Text>
                </View>
                <View style={styles.rate} > 
                    <AntDesign name="like2" size={24} color="black" />
                    <Text style={styles.like} >Like us on Telegram</Text>
                </View>
                <View style={styles.rate} > 
                    <AntDesign name="hearto" size={24} color="black" />
                    <Text style={styles.like} >Careers at Shuttle Track</Text>
                </View>
                <View style={styles.rate} > 
                    <AntDesign name="home" size={24} color="black" />
                    <Text style={styles.like} >Legal</Text>
                </View>
                <View style={styles.rate} > 
                    <FontAwesome style={styles.ack} name="sticky-note-o" size={24} color="black" />
                    <Text style={styles.like} >Acknowledgements</Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({
    ack:{
        transform:[{rotate:'270deg'}]
    },
    like:{
        fontWeight:'500',
        fontSize:15,
    },
    rate:{
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBottomColor:'lightgrey',
        width:'100%',
        alignItems:'center',
        gap:10,
        paddingBottom:10,
    },
    down:{
        gap:20,
        width:'100%',
    },
    container:{
        width:'85%',
        marginTop:20,
        gap:50
    },
    main:{
        flex:1,
        width:'100%',
        alignItems:'center'
    },
})