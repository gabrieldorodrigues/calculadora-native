import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Display from "./src/components/Display";
import Button from "./src/components/Button";

const BUTTONS = [
  ["C", "/", "*", "-"],
  ["7", "8", "9", "+"],
  ["4", "5", "6", "="],
  ["1", "2", "3", "0"],
];

const OPERATIONS = ["+", "-", "*", "/"];

const App = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  const handleTap = (value: string) => {
    if (OPERATIONS.includes(value)) {
      handleOperation(value);
    } else if (value === "=") {
      handleEquals();
    } else if (value === "C") {
      handleClear();
    } else {
      handleNumber(value);
    }
  };

  const handleOperation = (op: string) => {
    setPreviousValue(currentValue);
    setCurrentValue("0");
    setOperation(op);
  };

  const handleEquals = () => {
    if (!operation || !previousValue) return;
    const result = calculate(parseFloat(previousValue), parseFloat(currentValue), operation);
    setCurrentValue(result);
    setPreviousValue(null);
    setOperation(null);
  };

  const handleClear = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperation(null);
  };

  const handleNumber = (num: string) => {
    setCurrentValue(currentValue === "0" ? num : currentValue + num);
  };

  const calculate = (prev: number, curr: number, op: string): string => {
    const operationsMap: { [key: string]: number } = {
      "+": prev + curr,
      "-": prev - curr,
      "*": prev * curr,
      "/": prev / curr,
    };
    return String(operationsMap[op] || curr);
  };

  return (
    <View style={styles.container}>
      <Display value={currentValue} />
      <View style={styles.buttonContainer}>
        {BUTTONS.flat().map((item) => (
          <Button key={item} text={item} onPress={() => handleTap(item)} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default App;
