import React from 'react'
import { StyleSheet,Image, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
// import LOGO from '../../assets/images/logo.png';
import { Colours } from '../../miscellaneouses/utils/Colours';
import { Constants } from '../../miscellaneouses/utils/Constants';

const Login = ({navigation}) => {
  return (
    <View style={styles.main} >
      <View style ={styles.top} >
        <View style={styles.circles} >
            <View style={styles.circlebold} />
            <View style={styles.circlecent} />
            <View style={styles.circlelight} />
        </View>
        <Text style={styles.login} >Login</Text>
      </View>
      <View style={styles.inp} >
        <TextInput style={styles.type} 
            placeholder = 'Enter Student ID'
            keyboardType='numeric'
        />
        <TextInput style={styles.type} 
            placeholder = 'Enter pin'
            keyboardType='numeric'
        />
        <TouchableOpacity>
            <Text style={styles.forgot} >Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Tab')} style ={styles.down} >
        <Text style={{fontWeight:'500', fontSize:16}} >Login</Text>
      </TouchableOpacity>
      <View style={styles.extras} >
        <View style={styles.lines} >
            <View style={styles.line} />
            <Text style={styles.or} >Or sign in with</Text>
            <View style={styles.line} />
        </View>
        <TouchableOpacity style={styles.gcont} >
            <Image style={styles.google} source={{uri:Constants.google}} />
        </TouchableOpacity>
        <View style={{alignSelf:'center', flexDirection:'row', gap:3, marginTop:5}} >
            <Text style={{fontSize:14}} >Not registered yet?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Register')} >
                <Text style={{fontSize:14, fontWeight:'500', color:'#3e3ef7'}} >Create Account</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    
    google:{
        width:40,
        height:40,
        resizeMode:'contain'
    },
    gcont:{
        width:'100%',
        borderRadius:10,
        elevation:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f1f0f0',
        paddingVertical:5
    },
    or:{
        color:'#888585'
    },
    line:{
        width:'30%',
        height:1,
        backgroundColor:'#ccc7c7',
        alignSelf:'flex-end'
    },
    lines:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        gap:3
    },
    extras:{
        flexDirection:'column',
        alignItems:'center',
        gap:8,
        width:'70%',
    },
    forgot:{
        color:'#3e3ef7',
        alignSelf:'flex-end'
    },
    type:{
        width:'100%',
        fontSize:16,
        borderWidth:1,
        borderColor:'#aaa9a9',
        paddingHorizontal:6,
        paddingVertical:5,
        borderRadius:5,
    },
    inp:{
        width:'80%',
        gap:6
    },
    login:{
        fontWeight:'600',
        fontSize:35
    },
    down:{
        width:'80%',
        backgroundColor:Colours.yellow,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        borderRadius:8
    },
    
    
    circlecent:{
        height:'100%',
        width:'100%',
        backgroundColor:'#f1d363a4',
        borderBottomLeftRadius:165,
        borderBottomRightRadius:165,
        position:'absolute',
        right:-200,
        top:-30,
        zIndex:99,
    },
    circlelight:{
        height:'120%',
        width:'100%',
        backgroundColor:'#f3edd7a4',
        borderBottomLeftRadius:165,
        borderBottomRightRadius:165,
        position:'absolute',
        right:-200,
        top:-30,
        zIndex:-1,
        // borderRadius:160,
    },
    circlebold:{
        zIndex:10,
        height:'130%',
        width:'120%',
        backgroundColor:'#f3edd7a4',
        borderBottomLeftRadius:200,
        borderBottomRightRadius:200,
        alignSelf:'center',
        position:'absolute',
    },
    circles:{
        width:'100%',
        height:150
    },
    top:{
        flexDirection:'column',
        alignItems:'center',
        gap: 20,
        width:'100%'
    },
    logo:{
        width:120,
        height:120,
        resizeMode:'cover'
    },
    main:{
        flex:1,
        alignItems:'center',
        // justifyContent:'space-between',
        width:'100%',
        flexDirection:'column',
        gap:20,
        // marginBottom:50
    },
})