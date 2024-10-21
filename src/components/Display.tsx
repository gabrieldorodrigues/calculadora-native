import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  text: {
    color: "#fff",
    fontSize: 40,
  },
});

export default Display;
