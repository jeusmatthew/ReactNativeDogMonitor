  
import React from 'react';
import { Alert, View, StyleSheet, SafeAreaView, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { Routine } from '../models';

  export const RoutineItem = ({routine}) => (
    <View style={styleSheet.item}>
      <View style={styleSheet.MainContainer}>
        <Text style={styleSheet.routine_name}>{routine.name}</Text>
        <Text style={styleSheet.dog_name}>{routine.dog_name}</Text>
        <View style={styleSheet.date_container}>
          <Text style={styleSheet.dates}>Inicio: </Text>
          <Text style={styleSheet.dates}>01/01/1999 00:00:00</Text>
        </View>
        <View style={styleSheet.date_container}>
          <Text style={styleSheet.dates}>Fin: </Text>
          <Text style={styleSheet.dates}>01/01/1999 23:59:59</Text>
        </View>
      </View>
      <TouchableOpacity style={styleSheet.image_container} onPress={()=>{downloadDataPressed(routine)}}>
        <Image source={require('../../assets/download.png')} style={styleSheet.download_image}/>
      </TouchableOpacity>
    </View>
  );

  const downloadDataPressed = (routine:Routine)=>
  {
    console.log(routine.name);
    
  }
const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex:5,
  },
  image_container:
  {
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    marginRight:10
  },
  download_image:
  {
    width:30,
    height:30,
  },
  item: {
    flexDirection:'row',
    marginTop:5,
    paddingLeft: 10,
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