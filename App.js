import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text, Button} from 'react-native';
import Header from './components/Header';

const App = () => {
  const [output, setOutput] = useState('');
  const [result, setResult] = useState('');
  const onChange = textValue => {
    if (result.length > 0) {
      setResult('');
    }
    setOutput(textValue);
  };
  const showOutput = () => {
    setResult(output);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <Text style={styles.taskTitle}>Enter a Text to Output</Text>
        <TextInput
          placeholder="Enter a text"
          style={styles.input}
          onChangeText={onChange}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Output text" onPress={showOutput} />
      </View>
      <View>
        <Text style={styles.output}>{result}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  taskTitle: {
    padding: 20,
    fontSize: 20,
  },
  inputContainer: {
    fontSize: 20,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    width: '80%',
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  output: {
    fontSize: 40,
    color: 'red',
    textAlign: 'center',
  },
});

export default App;
