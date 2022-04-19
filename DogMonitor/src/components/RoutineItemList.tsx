  
import React from 'react';
import { Alert, View, StyleSheet, SafeAreaView, FlatList, Text, TouchableOpacity } from 'react-native';

  export const RoutineItem = ({ name }) => (
    <TouchableOpacity style={styleSheet.item}>
      <Text style={styleSheet.routine_name}>{name}</Text>
      <Text style={styleSheet.dog_name}>{name}</Text>
      <View style={styleSheet.date_container}>
          <Text style={styleSheet.dates}>Inicio: </Text>
          <Text style={styleSheet.dates}>01/01/1999 00:00:00</Text>
      </View>
      <View style={styleSheet.date_container}>
          <Text style={styleSheet.dates}>Fin: </Text>
          <Text style={styleSheet.dates}>01/01/1999 23:59:59</Text>
      </View>
    </TouchableOpacity>
  );

const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
 
  item: {
    marginTop:5,
    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor:"#60ADB7",
    borderRadius:10
  },
 
  dog_name: {
    fontSize: 15,
    color: 'white'
  },
  routine_name: {
    fontSize: 18,
    color: 'white',
    fontWeight:'bold'
  },
  dates:
  {
    fontSize: 15,
    color: 'white'
  },
  date_container:
  {
    flexDirection:'row'
  }
 
});