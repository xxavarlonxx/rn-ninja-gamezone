import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

const header = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTitle}>
        <Image
          style={styles.headerImage}
          source={require('../assets/heart_logo.png')}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
