import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface RejillaProps {
  children?: ReactNode;
}

export const Rejilla: React.FC<RejillaProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 340,
    padding: 20,
    backgroundColor: '#27183C',
    borderRadius: 28,
  },
});

export default Rejilla;