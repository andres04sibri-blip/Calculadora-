import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface BotonesProps {
  onButtonClick?: (val: string) => void;
}

const buttons = ['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

export const Botones: React.FC<BotonesProps> = ({ onButtonClick }) => {
  return (
    <View style={styles.grid}>
      {buttons.map((label) => (
        <TouchableOpacity
          key={label}
          style={[styles.btn, label === '0' && styles.zero, ['÷', '×', '-', '+', '='].includes(label) && styles.op]}
          onPress={() => onButtonClick?.(label)}
        >
          <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  btn: {
    width: '22%',
    height: 60,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  zero: {
    width: '48%',
  },
  op: {
    backgroundColor: '#d97706',
  },
  text: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '600',
  },
});

export default Botones;