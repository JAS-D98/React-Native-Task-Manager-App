import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../Utils/Colors';

export default function Task(props) {
  return (
    <View style={[styles.item,styles.boxWithShadow]}>
        <View style={styles.itemLeft}>
            <View style={styles.square}>
            </View>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View><FontAwesome name="trash-o" size={24} color="gray" /></View>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor:Colors.PRIMARY_COLOR,
        padding:15,
        borderRadius: 10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
    itemLeft: {
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square: {
        width:24,
        height:24,
        backgroundColor:Colors.TERTIARY_COLOR,
        opacity: 0.4,
        borderRadius:5,
        marginRight:15,
    },
    boxWithShadow: {
        shadowColor:Colors.DEFAULT_COLOR,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    }
})