import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function DemoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Demo Screen</Text>
      <Text>Welcome to your React Navigation setup. </Text>
      </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
});

export default DemoScreen;
