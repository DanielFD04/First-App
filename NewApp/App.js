import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <div>
        <button style={styles.topButton}> AC </button>
      </div>
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

  topButton: {
    // position: relative,
    // top: 33,
    // left: 5,
    alignItems: 'center',
    backgroundColor: '#1524ff',
    color: '#ffffff',
    padding: 10
  }
});
