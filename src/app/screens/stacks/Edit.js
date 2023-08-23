import { StyleSheet, Pressable, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { EvilIcons,  Ionicons } from '@expo/vector-icons';
import { Constants } from '../../miscellaneouses/utils/Constants';
import { Colours } from '../../miscellaneouses/utils/Colours';

const Edit = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main} >
        <StatusBar style='auto' />
        <View style={styles.header} >
            <Ionicons onPress={()=>navigation.goBack()} style={styles.headicon} name="chevron-back-circle-sharp" size={24} />
            <Text style={styles.head} >Edit Account</Text>
        </View>
        <View style={styles.container} >
            <View style={styles.top} >
                <View style={styles.imgbox} >
                    <Pressable style={styles.pen} >
                        <EvilIcons name="pencil" size={30} color="black" />
                    </Pressable>
                    <Image source={{uri:Constants.user}} 
                        style={styles.img}
                    />
                </View>
            </View>
            <View style={styles.down} >
                <View style={styles.input} >
                    <Text style={styles.textinp} >First Name</Text>
                    <TextInput
                        placeholder='Sylvester'
                        style={styles.inp}
                        placeholderTextColor='black'
                    />
                </View>
                <View style={styles.input} >
                    <Text style={styles.textinp} >Last Name</Text>
                    <TextInput
                        placeholder='Nyong'
                        style={styles.inp}
                        placeholderTextColor='black'
                    />
                </View>
                <View style={styles.input} >
                    <Text style={styles.textinp} >Phone Number</Text>
                    <TextInput
                        placeholder='+233 4367348'
                        style={styles.inp}
                        placeholderTextColor='black'
                    />
                </View>
                <TouchableOpacity style={styles.butt} >
                    <Text style={{fontSize:16, fontWeight:'500'}} >Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Edit

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
    },

    butt:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:12,
        borderRadius:20,
        backgroundColor:Colours.yellow
    },
    inp:{
        fontSize:15,
        width:'100%'
    },
    textinp:{
        color:'#a3a2a2',
        fontSize:13,
    },
    input:{
        paddingVertical:2,
        paddingHorizontal:10,
        width:'100%',
        backgroundColor:'#ECECEC',
        borderRadius:8,
    },
    down:{
        width:'100%',
        alignItems:'center',
        gap:25,
    },
    pen:{
        position:'absolute',
        top:-5,
        right:-5,
        alignItems:'center',
        justifyContent:'center',
        width:25,
        height:25,
        backgroundColor:'green',
        borderRadius:20,
    },
    img:{
        height:70,
        width:70,
        resizeMode:'cover',
        position:'absolute',
    },
    imgbox:{
        backgroundColor:'#ECECEC',
        alignItems:'center',
        justifyContent:'center',
        elevation:5,
        padding:10,
        height:75,
        width:75,
        borderRadius:50,
    },
    top:{
        width:'100%',
        alignItems:'center',
    },
    container:{
        width:'85%',
        marginTop:70,
        alignItems:'center',
        gap:40,
    },
    main:{
        width:'100%',
        flex:1,
        alignItems:'center',
    },
})