import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "@style";
import Trash from "./../../../assets/Trash.svg";
import Check from "./../../../assets/Check.svg";
import { useEffect, useState } from "react";
import { TodoCardProps } from "./TodoCard.type";
import axios from "axios";

export default function TodoCard({todo,deleteTodo}: TodoCardProps) {

  const baseUrl = "http://10.0.2.2:3000/";

  const [todoCompleted,setTodoComleted] = useState(false);

function handleChangeComplete(){
    setTodoComleted((prev) => !prev);
}

function handleDeleteTodo(){
  deleteTodo(todo.id);
}

function changeComplete(){
  updateTodo(todo.id)
}

async function updateTodo(id:number){
  try {
    const response = await axios.patch(`${baseUrl}todos/${id}`,{completed:todoCompleted});
  } catch (error) {
    console.log(error);
  }
  
}

useEffect(() => {
  updateTodo(todo.id);
},[todoCompleted])


console.log(todoCompleted);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleChangeComplete} style={todoCompleted ? styles.complatedButton : styles.nonComplatedButton}>
        {todoCompleted  && <Check />}
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={todoCompleted ? styles.complatedText : styles.nonComplatedText }>
          {todo.content}
        </Text>
      </View>

      <TouchableOpacity onPress={handleDeleteTodo} style={styles.button}>
        <Trash width={60} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.gray_400,
    width: "100%",
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "space-between", 
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius:10,
    marginBottom:10
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  nonComplatedButton: {
    width: 30,
    height: 30,
    borderWidth:2,
    borderColor:color.blue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  complatedButton: {
    width: 30,
    height: 30,
    borderWidth:2,
    borderColor:color.purple,
    backgroundColor:color.purple,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  nonComplatedText: {
    fontSize: 14,
    color: "white"
  },
  complatedText: {
    fontSize: 14,
    color: "white",
    textDecorationLine: "line-through"
  },
});
