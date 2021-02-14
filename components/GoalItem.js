import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GoalItem(props) {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: 'lightblue',
    borderColor: 'black',
    borderWidth: 1,
  },
});
