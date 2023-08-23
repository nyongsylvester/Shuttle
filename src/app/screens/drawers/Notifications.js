import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Ionicons, Feather } from '@expo/vector-icons';
<Feather name="trash" size={24} color="black" />

const Notifications = () => {
  return (
    <SafeAreaView style={styles.main}>
        <StatusBar style='auto' />
        <View style={styles.container} >
            <View style={styles.alert} >
                <Text style={{color:'#fff'}} >New messages (5)</Text>
            </View>
            <View style={styles.down} >
                <View style={styles.rate} > 
                    <Text style={styles.like} >Your shuttle will areive in 5 minutes</Text>
                    <View style={styles.icons} >
                        <Ionicons name="mail-open-outline" size={24} color="black" />
                        <Feather name="trash" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.rate} > 
                    <Text style={styles.like} >Your shuttle will areive in 5 minutes</Text>
                    <View style={styles.icons} >
                        <Ionicons name="mail-open-outline" size={24} color="black" />
                        <Feather name="trash" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.rate} > 
                    <Text style={styles.like} >Your shuttle is here</Text>
                    <View style={styles.icons} >
                        <Ionicons name="mail-open-outline" size={24} color="black" />
                        <Feather name="trash" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.rate} > 
                    <Text style={styles.like} >Your shuttle is here</Text>
                    <View style={styles.icons} >
                        <Ionicons name="mail-open-outline" size={24} color="black" />
                        <Feather name="trash" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.rate} > 
                    <Text style={styles.like} >Your shuttle will areive in 5 minutes</Text>
                    <View style={styles.icons} >
                        <Ionicons name="mail-open-outline" size={24} color="black" />
                        <Feather name="trash" size={24} color="black" />
                    </View>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Notifications

const styles = StyleSheet.create({
    alert:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#DB2F2F',
        paddingVertical:7,
        borderRadius:5,
        marginTop:15,
    },
    icons:{
        flexDirection:'row',
        gap:5,
    },
    like:{
        fontWeight:'500',
        fontSize:15,
        width:'83%',
    },
    rate:{
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBottomColor:'lightgrey',
        width:'100%',
        alignItems:'center',
       justifyContent:'space-between',
       paddingHorizontal:5,
        paddingBottom:10,
    },
    down:{
        gap:20,
        width:'100%',
    },
    container:{
        width:'85%',
        marginTop:50,
        gap:50
    },
    main:{
        flex:1,
        width:'100%',
        alignItems:'center'
    },
})