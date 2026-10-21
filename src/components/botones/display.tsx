import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DisplayProps {
  value?: string;
}

export const Display: React.FC<DisplayProps> = ({ value = '0' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 16,
  },
  text: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Display;

//CAMBIADO