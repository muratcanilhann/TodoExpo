import { Text,TextInput,View } from "react-native";
import styles from "./CustomInput.style";
import { CustomInputProps } from "./CustomInput.types";

export default function CustomInput({placeholder,setTodo}:CustomInputProps){

    function handleChange(text:string){
        setTodo(text);
    }

    return(
        <View style={styles.inputView}>
        <TextInput onChangeText={handleChange} style={styles.input} placeholder={placeholder} />
        </View>
    )
}


