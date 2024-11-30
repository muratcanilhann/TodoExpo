import { View, TouchableOpacity, Text } from "react-native";
import styles from "./CustomButton.style";
import { CustomButtonProps } from "./CustomButton.types";

export default function CustomButton({ onPress }: CustomButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>ADD</Text>
    </TouchableOpacity>
  );
}
