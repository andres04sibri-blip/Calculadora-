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
    maxWidth: 360,
    padding: 16,
    backgroundColor: '#0f172a',
    borderRadius: 24,
  },
});

export default Rejilla;