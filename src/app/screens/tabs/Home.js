import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Entypo } from '@expo/vector-icons';
import LOGO from '../../../assets/images/logo.png';


const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main} >
      <StatusBar style='auto' />
      <ScrollView style={{width:'100%'}} >
        <View style={styles.container} >
            <View style={styles.top}>
                <Text style={styles.title} >Get around campus with</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Track')} style={styles.topdwon} >
                    <Text style={styles.title} >Shuttle Track</Text>
                    <AntDesign  name="arrowright" size={24} color="#fff" />
                    <Image style={styles.logo} source={LOGO} />
                </TouchableOpacity>
            </View>
            <View style={styles.where} >
                <AntDesign name="search1" size={24} color="black" />
                <TextInput 
                    style={styles.search}
                    placeholder='Where to?'
                    
                />
            </View>
            <View style={styles.middle} >
                <View style={styles.loc} >
                    <Entypo name="location-pin" size={24} color="black" />
                    <Text style={styles.name} >Diaspora</Text>
                    <AntDesign style={styles.arrow} name="right" size={24} color="grey" />
                </View>
            </View>
            <View style={styles.map} >
                <Text>Add Map Here</Text>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    map:{
        width:'85%',
        height:150,
        borderWidth:1,
    },
    name:{
        fontSize:16,
        fontWeight:'500'
    },
    arrow:{
        position:'absolute',
        right:0
    },
    loc:{
        borderBottomWidth:1,
        borderBottomColor:'#a8a7a7',
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
        gap:7,
        paddingVertical:5
    },
    middle:{
        flexDirection:'column',
        gap:10,
        alignItems:'center',
        width:'85%'
    },
    search:{
        width:'85%',
        fontSize:15,
    },
    where:{
        width:'80%',
        flexDirection:'row',
        backgroundColor:'#ECECEC',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:20,
        alignItems:'center',
        gap:8
    },
    title:{
        fontWeight:'500',
        color:'#fff',
        fontSize:16,
    },
    topdwon:{
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        width:'100%',
    },
    logo:{
        width:50,
        height:50,
        resizeMode:'contain',
        right:0,
        position:'absolute'
    },
    top:{
        // alignItems:'center'
        flexDirection:'column',
        gap:8,
        width:'85%',
        backgroundColor:'#0F2E68',
        padding:20,
        borderRadius:20,
    },
    container:{
        alignItems:'center',
        justifyContent:'center',
        gap:30,
        width:'100%',
        marginTop:50,
    },
    main:{
        flex:1,
        width:'100%',
        // gap:30,
        alignItems:'center',
        // justifyContent:'center'
    }
})