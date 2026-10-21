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
    height: 90,
    backgroundColor: '#18122B',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#392859',
  },
  text: {
    color: '#E0AED0',
    fontSize: 42,
    fontWeight: '350',
  },
});

export default Display;
