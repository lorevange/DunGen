// components/Loading.js
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = ({ size = 'large', color = '#0000ff' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // You can change the background color here
  },
});

export default Loading;
