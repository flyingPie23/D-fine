import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TextInput, Text, TouchableHighlight, KeyboardAvoidingView, View } from 'react-native';

type Props = {
    onSubmit?: (text: string) => void;
}

export default function InputField({ onSubmit }: Props) {
  const [input, setInput] = useState('');

  return (
    <KeyboardAvoidingView behavior='padding'>
      <View style={styles.searchBar}>
        <TextInput value={input} onChangeText={setInput}  style={styles.inputField} placeholder="Look for the definition here:" />
        <TouchableHighlight onPress={() => onSubmit?.(input)}  style={styles.submitBtn} >
          <Text style={{color: '#fff'}}>Search</Text>
        </TouchableHighlight>
        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    paddingTop: 10,
    borderTopWidth:1,
    marginTop:15
  },

  inputField: {
    marginRight: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 25,
    width: 300,
  },

  submitBtn: {
    backgroundColor: '#1A2A80',
    padding: 10,
    borderRadius: 25
  }
});
