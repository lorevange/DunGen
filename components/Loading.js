// components/Loading.js
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = ({ size = 'large' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={'#fff'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.3)'// You can change the background color here
  }
});

export default Loading;
