import React from 'react';
import { View, StyleSheet } from 'react-native';
import Display from '../components/botones/display';
import Rejilla from '../components/botones/rejilla';
import Botones from '../components/botones/boton';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Rejilla>
        <Display value="0" />
        <Botones />
      </Rejilla>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

