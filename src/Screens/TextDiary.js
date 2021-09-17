import React, { useState } from 'react';
import { SafeAreaView, Text, View, ScrollView, TextInput, Button, TouchableOpacity, StyleSheet, TouchableOpacityBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AntDesign from 'react-native-vector-icons/AntDesign';
import TodoList from '../Components/TodoList';
import TodoInsert from '../Components/TodoInsert'

const TextDiary = ({navigation}) => {

    const [todos, setTodos] = useState([]);

    const addTodo = text => {
        setTodos([
            ...todos,
            { id: Math.random().toString(), textValue: text ,checked:false},
        ]);
    };

    const onRemove = id => e => {
        setTodos(todos.filter(todo => todo.id !== id));
      };


  const handelChecked =(id ,textValue,checked )=>e =>{
      let arr;
      let a ;
      console.log(todos.find(todo => todo.id  ===id).checked= !checked);
     arr=[...todos]
     console.log(todos)
    console.log(arr)
    setTodos([...arr])

}
      
    return (
       <View style={{flex:1,
            backgroundColor: '#EFBBFF'}}>
                
  <View style={{ backgroundColor:'#9e17f4', height:100,
  flexDirection:'row',justifyContent:'space-between',
  paddingHorizontal:25,marginBottom:18,borderBottomWidth:2,paddingTop:50}}>
               <TouchableOpacity 
               onPress ={()=>{navigation.navigate('My Diary')}}>
               <AntDesign name='home' style={{fontSize:30,color:'white',
               marginTop:3}}/>
               </TouchableOpacity>
              {/* <Text  style={{paddingVertical:10,fontWeight:'400',
              fontSize:18 ,color:'white'}}>Text Diary</Text> */}
              <TouchableOpacity style={{paddingTop:5}}>
            {/* <Button title='completed Notes' color="white"/> */}


            <AntDesign  name="checkcircleo" size={30} color='blue'
             onPress ={()=>{navigation.navigate('completed', {
                todo: todos,
                temp: 'anything you want here',
              })}}
            />


            
           </TouchableOpacity>
             </View>

           {/* <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
            */}
            <Text style={{
                color: 'black',
                fontSize: 36,
                marginTop: 2,
                marginBottom: 15,
                fontWeight: '400',
                textAlign: 'center',
                backgroundColor: '#EFBBFF',
            }}>My Note</Text>
            
         

             {/* </View> */}
            <View style={{
                backgroundColor: '#fff',
                flex: 1,
                borderRadius: 10,
                marginLeft: 8,
                marginRight: 8,
                marginBottom:25
            }}>

                <TodoInsert onAddTodo={addTodo} />
                <TodoList todos={todos}  onRemove={onRemove} handelChecked={handelChecked}/>
            </View>

        </View>

    )
}


export default TextDiary;