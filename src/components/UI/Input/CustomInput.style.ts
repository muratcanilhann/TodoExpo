import { StyleSheet,Dimensions } from "react-native";
import {color} from "@style";

const w = Dimensions.get("window").width;

const styles = StyleSheet.create({
    inputView:{
        borderColor: color.gray_700,
        borderWidth:1,
        width: "100%",
        borderRadius:10
    },
    input:{
        backgroundColor:color.gray_300,
        borderRadius:10,
        height:50,
    }
})

export default styles;