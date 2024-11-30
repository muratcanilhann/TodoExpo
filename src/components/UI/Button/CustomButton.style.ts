import { StyleSheet, Dimensions } from "react-native";
import { color } from "@style";

const w = Dimensions.get("window").width;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: color.blue,
    width: w / 3, 
    height: 50, 
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop:10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default styles;
