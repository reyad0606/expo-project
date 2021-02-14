import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [output, setOutput] = useState('Hello Azra. Want some love ??');
  return (
    <View style={styles.container}>
      <Text>{output}</Text>
      <Button
        title='Change Text'
        onPress={() => setOutput('Its changed. see !!')}
      />
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
});
