import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const DataScreen = ({ navigation }) => {
    return (
      <SafeAreaView style = {styles.safe_area}>
        <View style ={styles.text_input_view}>
          <TextInput style = {styles.text_input} placeholder="Nombre de la mascota"/>
          <Image source={require('../../assets/search.png')} style={styles.search_icon} />
        </View>
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
    }
  });