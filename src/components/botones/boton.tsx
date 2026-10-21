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
          style={[
            styles.btn,
            label === '0' && styles.zero,
            ['÷', '×', '-', '+', '='].includes(label) && styles.op,
            ['C', '±', '%'].includes(label) && styles.action,
          ]}
          onPress={() => onButtonClick?.(label)}
          activeOpacity={0.7}
        >
          <Text style={[styles.text, ['÷', '×', '-', '+', '=', 'C', '±', '%'].includes(label) && styles.textOp]}>
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  btn: {
    width: '22%',
    height: 62,
    backgroundColor: '#3D2C58',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  zero: {
    width: '48%',
  },
  action: {
    backgroundColor: '#5C4380',
  },
  op: {
    backgroundColor: '#FF69B4',
  },
  text: {
    color: '#E0AED0',
    fontSize: 20,
    fontWeight: '500',
  },
  textOp: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Botones;