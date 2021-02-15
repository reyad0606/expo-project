import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSize}>
            <Button title='CANCEL' color='red' onPress={props.onCancel} />
          </View>
          <View style={styles.buttonSize}>
            <Button title='ADD' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

  buttonContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '70%',
  },
  buttonSize: {
    width: '40%',
  },
});
