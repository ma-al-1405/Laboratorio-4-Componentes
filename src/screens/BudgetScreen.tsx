import React, { useState } from "react";
import MyButton from '../components/MyButton'
import { View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Icono from 'react-native-vector-icons/AntDesign';

const BudgetScreen = () =>{
    const tope = 0;
    const initialBudget = 1000;
    let [budget,setBudget] = useState(initialBudget);
    
    const increase = (value:number = 1) =>{
        setBudget(budget + value );
        if(budget < 0){
            
        }
    }
    const decrease = (value:number = 1) =>{
        setBudget(budget-value);
    }
    let colorText = "black";
    if(budget>initialBudget){
        colorText = "red";
    }else{
        colorText = "black";
    }
    const styles = StyleSheet.create({
        mainText:{
            fontWeight:'bold',
            textAlign: 'center',
            fontSize:40
        },
        secondaryText: {
            textAlign:'center',
            fontSize:20,
            color:colorText,
        }
    });
    
    return(
        
        <View style={{flex:1, marginTop:1,alignContent:'center'}}>
            <View style={{flex:1, alignSelf:"flex-start",justifyContent:"center",}}>
                <Icono name='up' />

            </View>
            <View style={{ flex:2 }}>
                <Text style = {styles.mainText}>Presupuesto: {initialBudget} </Text>
                <Text style={[styles.secondaryText]}>Mi presupesto actual { budget }</Text>

            </View>
            <View style={{ flex:2, flexDirection:"row"}}>
                <MyButton title="Sumar" onPress={() => increase(100)} color="blue"/>
                <MyButton title="Restar" onPress={() =>(budget<=0)? setBudget(budget = 0) : decrease(50)} color="red"/>
                
                

            </View>
        </View>
    )
    
}



export default BudgetScreen