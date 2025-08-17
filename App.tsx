import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import InputField from './components/InputField';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hey what does this mean again ?</Text>

        <Text style={styles.paragraph}>why dont we find out now.</Text>
      </View>
      <ScrollView style={styles.scrollView}>

      </ScrollView>
      <InputField />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollView: {
    paddingTop: 150,
    padding: 18,
  },

  header: {
    margin: 50,
  },

  title: {
    color: '#1A2A80',
    fontSize: 35,
    marginBottom: 12,
    fontWeight: "500"
  },

  paragraph: {
    fontSize: 15,
    color: '#B1AB86'
  }
});
