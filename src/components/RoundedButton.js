import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { fontSizes, paddingSizes } from "../utils/sizes";

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 120,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]}>
    <Text style={[styles(size).text, textStyle]} onPress={ props.onPress }>{props.title}</Text>
    </TouchableOpacity>
  )
};

const styles = (size) => StyleSheet.create({
  radius: {
    borderRadius: size / 1.5,
    width: size,
    height: size,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2
  },
  text: {
    color: '#fff',
    fontSize: size / 3.5,
  }
})