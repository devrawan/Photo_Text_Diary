import React, { useState } from 'react';
import { SafeAreaView, Text, View, ScrollView, TextInput, Button, TouchableOpacity, StyleSheet, TouchableOpacityBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AntDesign from 'react-native-vector-icons/AntDesign';

import TodoListItem from '../Components/TodoListItem'
import TodoList from '../Components/TodoList'
const Completed=({navigation,route})=>{
    const {todo,temp} =route.params;
    let arr = {...todo}
    return(
        <View style={{flex:1}}>
         <Text>{temp} </Text>
        
      {/* {console.log(arr)}
        <TodoList  todos={todo} />
      */}
  
        </View>
    )
}



export default Completed;