import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import InputField from './components/InputField';

export default function App() {

  const [query, setQuery] = useState<string>("");
  const [definitions, SetDefinitions] = useState<string>("");

  const define = async (query: string) => {
    SetDefinitions("");
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/dictionary?word=${query}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'PAlItrTsiI0ZtJYUXslE/w==zYhuYLq3rBW5nLCY'
        }
      });
      const data = await response.json();
      if (data.valid === true) {
        SetDefinitions(data.definition);
      } else {
        SetDefinitions("No available definitions for the word.")
      }

    } catch (error) {
      SetDefinitions("Service Error.")
      console.log(error)
    }
  }


  const handleSubmit = (text: string) => {
    const trimmed = text.trim();
    if (trimmed !== "") {
      setQuery(trimmed);
      SetDefinitions("");
      define(trimmed);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hey what does this mean again ?</Text>

        <Text style={styles.paragraph}>why dont we find out now.</Text>
      </View>

      <View style={{alignSelf: 'stretch',}}>
        <Text style={styles.subTitle}>{query}</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.paragraph}>{definitions}</Text>
      </ScrollView>
      <InputField onSubmit={handleSubmit} />
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
    alignSelf: 'stretch',
    marginRight: 20,
    marginLeft: 20,
    borderTopWidth:1,

  },

  header: {
    margin: 15,
    marginTop:50,
  },

  title: {
    color: '#1A2A80',
    fontSize: 35,
    marginBottom: 12,
    fontWeight: "800"
  },

  subTitle:{
    color: '#1A2A80',
    fontSize: 25,
    fontWeight: "800",
    padding: 12,
    marginLeft:10,

  },

  paragraph: {
    fontSize: 15,
    color: '#B1AB86',
  }
});
