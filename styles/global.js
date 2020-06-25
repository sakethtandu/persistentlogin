import React from 'react';
import { StyleSheet } from 'react-native';
export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems:"center",
    justifyContent:"center"
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    width:300
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },

});
