import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TextInput, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';


const Track = ({navigation}) => {
    const [isModal, setIsModal] = useState(false);
    const [extendedModal, setExtendedModal] = useState(false);

    const handleShowModal = ()=>{
        setIsModal(true);
        setExtendedModal(true);
    }
    const handleCloseModal = ()=>{
        setIsModal(false);
        setExtendedModal(false);
    }
  return (
    <SafeAreaView style={styles.main} >
      <StatusBar style='auto' />
      <View style={styles.header} >
            <Ionicons onPress={()=>navigation.goBack()} style={styles.headicon} name="chevron-back-circle-sharp" size={24} />
            <Text style={styles.head} >Track</Text>
        </View>
        <View style={styles.container} >
        <Pressable onPress={handleShowModal} style={styles.searchIcon} >
            <AntDesign name="search1" size={30} color="black" />
        </Pressable>
       <Modal
        animationType='slide'
        transparent={true}
        visible={isModal}
        onRequestClose={()=>setIsModal(false)}
       >
        <Pressable onPress={()=>setIsModal(false)} style={styles.inModal} >
            <View style={[styles.mainModal, {height: extendedModal? '80%': 0}]} >
                <View style={{width:'100%', justifyContent:'center', paddingTop:5, alignItems:'center', flexDirection:'row', }} >
                    <Pressable onPress={()=>setExtendedModal(prev=> !prev)} style={styles.open} ></Pressable>
                    <Pressable onPress={handleCloseModal} style={{right:0, position:'absolute', padding:5, backgroundColor:'lightgrey', borderRadius:15}}>
                        <AntDesign  name="close" size={20} color="black" />
                    </Pressable>
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
            </View>

        </Pressable>
       </Modal>
            <View style={styles.mapContainer} >
                <Text>ShowMapHere</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Track

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
    mapContainer:{
        width:'100%',
        height:'100%',
        // backgroundColor:'red',
        borderWidth:1,
        zIndex:-1,
    },
    searchIcon:{
        position:'absolute',
        top:50,
        left:30,
        backgroundColor:'#e0dede',
        padding:10,
        borderRadius:25,
        zIndex:999,
    },
    open:{
        width:'50%',
        height:6,
        backgroundColor:'lightgrey',
        borderRadius:3,
        alignSelf:'center',
        zIndex:99,
    },
   mainModal:{
        backgroundColor:'#fff',
        alignItems:'center',
        // justifyContent:'center',
        flexDirection:'column',
        gap:30,
        paddingHorizontal:10,
        paddingVertical:8,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        width:'100%',
        alignSelf:'flex-end',
        // backgroundColor:'red'
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
   
   
   
    container:{
        alignItems:'center',
        justifyContent:'center',
        gap:30,
        width:'100%',
        marginTop:50,
    },
    inModal:{
        flexDirection:'row',
        position:'absolute',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#bebebe42'
    },
    main:{
        flex:1,
        width:'100%',
        // gap:30,
        alignItems:'center',
        // justifyContent:'center'
    }
})