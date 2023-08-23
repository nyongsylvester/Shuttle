import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { FontAwesome, Entypo, AntDesign, Feather } from '@expo/vector-icons';
import {RadioButton} from 'react-native-paper';

const Payment = ({navigation}) => {
    const [card, setCard] = useState('visa');
  return (
    <SafeAreaView style={styles.main} >
      <StatusBar style='auto' />
      <ScrollView style={{width:'100%'}} >
        <View style={styles.container} >
            <View style={styles.top}>
                <Text >Shuttle Track balance</Text>
                <View style={styles.topdwon} >
                    <Text style={styles.balance} >GHC 0</Text>
                </View>
            </View>
            <View style={styles.help} >
                <View style={styles.oneHelp} >
                    <Feather name="help-circle" size={24} color="black" />
                    <Text>What is Shuttle Track balance?</Text>
                </View>
                <View style={styles.greyline} />
                <View style={styles.oneHelp} >
                    <Feather name="clock" size={24} color="black" />
                    <Text>See Shuttle Track transactions</Text>
                </View>
            </View>

            <View style={styles.darkline} />
            
            <View style={styles.pay} >
                <Text style={{fontWeight:'500', fontSize:16}} >Payment methods</Text>
                <View style={styles.payment} >
                    <TouchableOpacity style={styles.onepay} >
                        <FontAwesome name="cc-visa" size={24} color="#0000ffe8" />
                        <Text> ***489343</Text>
                        <View style={styles.card}>
                            <RadioButton 
                                value='visa'
                                color='teal'
                                status={card === 'visa'?'checked':'unchecked'}
                                onPress={()=>setCard('visa')}
                                style={styles.card}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.onepay} >
                        <Entypo name="wallet" size={24} color="crimson" />
                        <Text>Cash</Text>
                        <View style={styles.card}>
                            <RadioButton 
                                value='cash'
                                color='teal'
                                status={card === 'cash'?'checked':'unchecked'}
                                onPress={()=>setCard('cash')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Card')} style={styles.onepay} >
                        <FontAwesome name="credit-card-alt" size={24} color="teal" />
                        <Text>Add debit/credit card</Text>
                        <View style={styles.card}>
                            <AntDesign name="right" size={20} color="grey" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Payment

const styles = StyleSheet.create({
    card:{
        position:'absolute',
        right:10,
        width:30,
        alignItems:'center'
    },
    onepay:{
        width:'100%',
        borderBottomWidth:2,
        borderBottomColor:'lightgrey',
        flexDirection:'row',
        alignItems:'center',
        gap:7,
        paddingBottom:7,
    },
    payment:{
        width:'100%',
        alignItems:'center',
        gap:25
    },
    pay:{
        width:'85%',
        alignItems:'center',
        gap:25
    },
    darkline:{
        width:'100%',
        height:4,
        backgroundColor:'black'
    },
    greyline:{
        width:'100%',
        height:2,
        backgroundColor:'lightgrey'
    },

    oneHelp:{
        flexDirection:'row',
        alignItems:'center',
        gap: 7
    },
    help:{
        gap:5,
        width:'85%'
    },
  
  balance:{
    fontWeight:'500',
    fontSize:18
  },
    top:{
        // alignItems:'center'
        flexDirection:'column',
        gap:8,
        width:'85%',
        backgroundColor:'#ECECEC',
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