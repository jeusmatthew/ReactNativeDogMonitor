import React, { useEffect,useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View,FlatList, Touchable, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RoutineItem } from "../components";
import { Routine } from '../models';
import { RoutineService } from '../services/routine-service';

const routinesArray:Routine[] = []

export const DataScreen = ({ navigation }) => {
  const [routines,setRoutines] = useState(routinesArray);
  useEffect( () => {
    // code to run on component mount
    async function getRoutines() {
      console.log("loading routines...");
      const routinesList:Routine[] = await RoutineService.listRoutines();
      setRoutines(routinesList);
      console.log("routines: ",routines);
    }
    getRoutines();
    },[])
    return (
      <SafeAreaView style = {styles.safe_area}>
        <View style ={styles.text_input_view}>
          <TextInput style = {styles.text_input} placeholder="Nombre de la mascota"/>
          <TouchableOpacity onPress={()=>{console.log("Searching routines...");}}>
          <Image source={require('../../assets/search.png')} style={styles.search_icon} />
          </TouchableOpacity>
        </View>
        <FlatList
        style={{marginLeft:10,marginRight:10}}
        data={routines}
        renderItem={({item}) => <RoutineItem routine={item}/>}
      />
      </SafeAreaView>
      );
};

const styles = StyleSheet.create({
    safe_area:
    {
      marginLeft:10,
      marginRight:10,
      marginTop:20,
      flex:1,
      flexDirection:'column'
    },
    text_input:{
     
      marginTop:0,
      paddingLeft:10,
      marginBottom:0,
      width:'90%',
    },
    text_input_view:
    {
      borderColor:"#60ADB7E5",
      borderWidth:2,
      borderRadius:10,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginLeft:10,
      marginRight:10
    },
    search_icon:
    {
      width:25,
      height:25,
      marginRight:5
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });