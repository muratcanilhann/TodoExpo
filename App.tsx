import React, { useEffect } from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions,FlatList,Button } from 'react-native';
import Logo from "./assets/Logo.svg";
import CustomInput from './src/components/UI/Input/CustomInput';
import CustomButton from 'src/components/UI/Button/CustomButton';
import {color} from "@style"
import axios from 'axios';
import { Todo } from 'src/types/todo';

import TodoCard from 'src/components/TodoCard/TodoCard';

  const w = Dimensions.get("window").width;

// json-server --watch db.json --host 0.0.0.0
// http://192.168.1.38:3000/

export default function App() {

  const [todo,setTodo] = useState<string>();
  const [todos,setTodos] = useState<Todo[]>([]);

  const baseUrl = "http://10.0.2.2:3000/";
  useEffect(() => {

    async function fetchTodos(){
      try {
        const response = await axios.get(`${baseUrl}todos`)
        setTodos(response.data);
      } catch (error) {
        console.log(error);
      }
      console.log(todos);
    }

    fetchTodos();
   
  },[])
 

  async function sendTodo(){
    try {
      const response = await axios.post(`${baseUrl}todos`,{id: null,content:todo,completed:false});
      setTodos((prevTodos) => [...prevTodos, response.data]);
    } catch (error) {
      console.log(error);
    }
    
  }

  async function deleteTodo(id:number){
    try {
      const response = await axios.delete(`${baseUrl}todos/${id}`);
      setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
    
  }
  

  return (

      <View style={styles.container}>
      <View>
      <Logo width={w/2} height={100} />
      </View>
      <CustomInput  setTodo ={setTodo} placeholder="Write your task"/>
      <CustomButton onPress={sendTodo}  />


      <FlatList
      style={styles.listContainer}
      data={todos}
      keyExtractor={(item) => item.id.toString()} 
      renderItem={({ item }) => <TodoCard deleteTodo={deleteTodo} todo={item}
      />}
      />
      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal:10,
    paddingVertical:20,
    backgroundColor: color.gray_500,
  },
  listContainer:{
    marginTop: "5%"
  }
  
});
