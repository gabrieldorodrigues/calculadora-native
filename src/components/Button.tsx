import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const screenWidth = Dimensions.get("window").width;
const buttonWidth = screenWidth / 4 - 10;

const Button: React.FC<ButtonProps> = ({ onPress, text }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { width: buttonWidth }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: buttonWidth,
    margin: 5,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    color: "#fff",
  },
});

export default Button;
