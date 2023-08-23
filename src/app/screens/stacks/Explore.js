import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import LOGO from '../../../assets/images/logo.png';
import { Colours } from '../../miscellaneouses/utils/Colours';

const Explore = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main} >
        <StatusBar style='auto' />
      <View style ={styles.top} >
        <View style={styles.circles} >
            <View style={styles.circlebold} />
            <View style={styles.circlecent} />
            <View style={styles.circlelight} />
        </View>
        <View style={styles.shut} >
            <Image source={LOGO} style={styles.logo} />
            <View style={styles.shtText} >
                <Text style={styles.left} >Shuttle</Text>
                <Text style={styles.right} >Track</Text>
            </View>
        </View>
      </View>
      <View style ={styles.center} >
        <Text style={styles.title} >Explore the app</Text>
        <Text style={styles.text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maecenas quis interdum enim enim molestie faucibus. Pretium non non massa eros, nunc, urna. Ac laoreet sagittis donec vel. Amet, duis justo, quam quisque egestas. Quam enim at dictum condimentum. Suspendisse.</Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')} style ={styles.down} >
        <Text style={{fontWeight:'500', fontSize:16}} >Let's Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Explore

const styles = StyleSheet.create({
    down:{
        width:'80%',
        backgroundColor:Colours.yellow,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        borderRadius:8
    },
    text:{
        textAlign:'justify',
        width:'80%',
    },
    title:{
        fontSize:20,
        fontWeight:'500'
    },
    center:{
        marginVertical:30,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        gap:10
    },
    left:{
        // color:Colours.yellow,
        fontSize:35,
        fontWeight:'700'
    },
    right:{
        color:Colours.yellow,
        fontSize:35,
        fontWeight:'700'
    },
    shtText:{
        flexDirection:'row',
        gap:10
    },
    shut:{
        alignItems:'center',
        justifyContent:'center',
        gap:10
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
        gap: 50,
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
        // marginBottom:50
    },
})