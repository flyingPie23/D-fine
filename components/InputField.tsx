import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TextInput, Text, TouchableHighlight, KeyboardAvoidingView, View } from 'react-native';

export default function InputField() {
  return (
    <KeyboardAvoidingView behavior='padding'>
      <View style={styles.searchBar}>
        <TextInput style={styles.inputField} placeholder="Look for the definition here:" />
        <TouchableHighlight style={styles.submitBtn}>
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
    marginBottom: 20,
  },

  inputField: {
    marginRight: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 25
  },

  submitBtn: {
    backgroundColor: '#1A2A80',
    padding: 10,
    borderRadius: 25
  }
});
