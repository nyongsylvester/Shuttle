import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {FontAwesome} from '@expo/vector-icons';
import { Colours } from '../../miscellaneouses/utils/Colours';
import { Ionicons } from '@expo/vector-icons';

const Card = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main} >
        <StatusBar style='auto' />
        <View style={styles.header} >
            <Ionicons onPress={()=>navigation.goBack()} style={styles.headicon} name="chevron-back-circle-sharp" size={24} />
            <Text style={styles.head} >Add Card</Text>
        </View>
        <View style={styles.container} >
            <View style={styles.cards}>
                <View style={styles.card} >
                    <FontAwesome name="credit-card-alt" size={20} color="black" />
                    <TextInput
                        placeholder='Card number'
                        style={styles.cardnum}
                    />
                </View>
                <View style={styles.date} >
                    <TextInput
                        style={styles.datenum}
                        placeholder='Expiry date' 
                    />
                    <TextInput
                        style={styles.datenum}
                        placeholder='Security card' 
                    />
                </View>
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate('Verify')} style={styles.butt} >
                <Text style={{fontWeight:'500', fontSize:18}}>Add card</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Card

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
        marginBottom:70,
        alignItems:'center',
        justifyContent:'center',
        width:'85%',
        backgroundColor:Colours.yellow,
        paddingVertical:8,
        borderRadius:20,
    },
    datenum:{
        width:'40%',
        paddingVertical:7,
        paddingHorizontal:10,
        borderRadius:8,
        backgroundColor:'#ECECEC',
        fontSize:16,
    },
    date:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    cardnum:{
        width:'85%',
        fontSize:16,
    },
    card:{
        width:'100%',
        flexDirection:'row',
        gap:7,
        backgroundColor:'#ECECEC',
        paddingVertical:7,
        paddingHorizontal:10,
        borderRadius:8,
        alignItems:'center'
    },
    cards:{
        width:'85%',
        alignItems:'center',
        gap:15,
    },
    container:{
        marginTop:50,
        alignItems:'center',
        width:'100%',
        flex:1,
        justifyContent:'space-between'
        // gap:200,
    },
    main:{
        flex:1,
        alignItems:'center',
        width:'100%',
    }
})