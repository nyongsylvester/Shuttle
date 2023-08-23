import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { FontAwesome, AntDesign, Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants } from '../../miscellaneouses/utils/Constants';

const Settings = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
        <StatusBar style='auto' />
        <View style={styles.container} >
            <View style={styles.top} >
                <FontAwesome onPress={()=>navigation.navigate('Edit')} style={styles.pen} name="pencil-square-o" size={24} color="black" />
                <View style={styles.topdown} >
                    <View style={styles.user} >
                        <Image
                            style={styles.img}
                            source={{uri:Constants.user}} 
                        />
                    </View>
                    <Text style={styles.like} >Sylvester Nyong</Text>
                    <Text>+233 55 089 54401</Text>
                </View>
            </View>
            <ScrollView style={{width:'65%'}} >
                <View style={styles.inner} >

                    <View style={styles.down} >
                        {/* <TouchableOpacity style={styles.rate} > 
                            <AntDesign name="home" size={24} color="black" />
                            <Text style={styles.like} >Home</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity style={styles.rate} > 
                            <Feather name="mail" size={24} color="black" />
                            <Text style={styles.like} >sly@gmail.com</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.rate} > 
                            <MaterialCommunityIcons name="web" size={24} color="black" />
                            <Text style={styles.like} >Language</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.rate} > 
                            <Feather name="trash" size={24} color="black" />
                            <Text style={styles.like} >Delete account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Explore')} style={styles.rate} > 
                            <Entypo name="log-out" size={24} color="black" />
                            <Text style={[styles.like, {color:'crimson'}]} >Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
    img:{
        width:70,
        height:70,
        resizeMode:'cover',
    },
    user:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        backgroundColor:'#fff',
        width:80,
        height:80,
    },
    topdown:{
        alignItems:'center',
        justifyContent:'center',
    },
    pen:{
        position:'absolute',
        top:'20%',
        right:'15%'
    },
    top:{
        width:'120%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFEBA3',
        height:'40%',
        elevation:5,
        borderBottomLeftRadius:300,
        borderBottomRightRadius:300,
    },
   
    like:{
        fontWeight:'500',
        fontSize:14,
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
    inner:{
        width:'100%',
        marginTop:50,
        gap:50,
        alignItems:'center'
    },
    container:{
        width:'100%',
        gap:20,
        alignItems:'center'
    },
    main:{
        flex:1,
        width:'100%',
        alignItems:'center'
    },
})