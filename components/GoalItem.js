import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function GoalItem(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
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
