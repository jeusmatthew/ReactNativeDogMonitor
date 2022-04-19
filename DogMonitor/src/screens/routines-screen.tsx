import React,{ useState }  from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput,Check, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const RoutinesScreen = ({ navigation }) => {
  const [minutesEnabled,setMinutesEnabled] = useState(false);
  let [minutes,setMinutes] =useState('0');
    return (
      <SafeAreaView style={styles.safe_area}>
        <Text style={styles.text}>Nombre de rutina</Text>
        <TextInput style={styles.text_input } placeholder="Nombre de la rutina"/>
        <Text style={styles.text}>Nombre del perro</Text>
        <TextInput style={styles.text_input } placeholder="Nombre del perro"/>
        <BouncyCheckbox
          size={25}
          fillColor="#60ADB7"
          unfillColor="#FFFFFF"
          text="Definir duración de rutina"
          iconStyle={{ borderColor: "#60ADB7" }}
          textStyle={{ fontFamily: "JosefinSans-Regular" }}
          onPress={(isChecked: boolean) => {setMinutesEnabled(isChecked)}}
          style={{marginBottom:10}}
        />
        {
          minutesEnabled ? (<View>
          <Text style={styles.text}>Tiempo</Text>
          <TextInput value={minutes} keyboardType='numeric' style={styles.text_input } placeholder="Tiempo en minutos de entrenamiento" onChangeText={(text)=>{
            const numbers =text.replace(/[^0-9]/g, '') 
            setMinutes(numbers);
          }}/>
        </View>) :null}
        <View style={styles.buttons_area} >
            <TouchableOpacity
                    style={styles.button_red}
                    onPress={async () => {
                      
            }}>
              <Text style={{color: '#FFFFFF'}}>Finalizar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                    style={styles.button_green}
                    onPress={async () => {
                      
            }}>
              <Text style={{color: '#FFFFFF'}}>Iniciar</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
      );
};

const styles = StyleSheet.create({
  device_name:{
      flexDirection:'column',
      flex:1,
      marginTop:20,
      marginLeft:10,
      marginRight:10,
      //backgroundColor:"#eaeaea"
  },
  device_sensors:{
      flexDirection:'column',
      flex:5,
      marginTop:10,
      marginLeft:5,
      marginRight:5,
      //backgroundColor:"#60adb7b8"
  },
  device_sensor_row:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginRight:20,
      marginLeft:20,
      marginTop:20,
  },
    button_red: {
      marginTop:20,
      alignItems: "center",
      backgroundColor: "#DF7985",
      paddingLeft: 30,
      paddingRight:30,
      paddingTop:10,
      paddingBottom:10,
      borderRadius:5,
      borderColor:"#FFFFFF",
      borderWidth:1
      
    },
    button_green: {
      marginTop:20,
      alignItems: "center",
      backgroundColor: "#60adb7b8",
      paddingLeft: 40,
      paddingRight:40,
      paddingTop:10,
      paddingBottom:10,
      borderRadius:5,
      borderColor:"#6DB77D",
      borderWidth:1
      
    },
    text_input:{
        borderColor:"#60ADB7E5",
        borderWidth:2,
        borderRadius:10,
        marginTop:5,
        paddingLeft:10,
        marginBottom:10
    },
    text:
    {
        marginLeft:5,
        marginRight:5,
        color:"#717171"
    },
    text_status:
    {
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        marginBottom:10,
        color:"#FFFFFF"
    },
    safe_area:
    {
      marginLeft:10,
      marginRight:10,
      marginTop:20,
      flex:1,
      flexDirection:'column'
    },
    buttons_area:
    {
      flexDirection:'row',
      justifyContent:'space-between',
      marginLeft:30,
      marginRight:30
    }

  });