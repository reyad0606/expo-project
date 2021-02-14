import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  // var uuid = require('react-native-uuid');

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // setCourseGoals([...courseGoals, enteredGoal]); // not 100% guranteed
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]); //100% guranteed it will give the current state
    // setEnteredGoal('');
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: 'lightblue',
    borderColor: 'black',
    borderWidth: 1,
  },
});
