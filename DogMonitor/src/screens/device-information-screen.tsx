import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Component } from 'react';

// export const DeviceInformationScreen = ({ navigation }) => {
//     return (
//       <Text>This is the data screen</Text>
//       );
// };
export class DeviceInformationScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
    render(){
        return (
            // <View>
            //     <Text>asdasd</Text>
            // </View>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.device_name}>
                    <Text style={styles.text}>Nombre del dispositivo</Text>
                    <TextInput placeholder='Escribe el nombre del dispositivo' style={styles.text_input}></TextInput>
                </View>
                <View style={styles.device_sensors}>
                    <View style={styles.device_sensor_row}>
                        <Text style={styles.text}>IMU1</Text>
                        <View style={{backgroundColor:"red",borderRadius:20}}><Text style={styles.text_status}>asd</Text></View>
                    </View>
                    <View style={styles.device_sensor_row}>
                        <Text style={styles.text}>IMU2</Text>
                        
                    </View>
                    <View style={styles.device_sensor_row}>
                        <Text style={styles.text}>Temperatura</Text>
                        
                    </View>
                    <View style={styles.device_sensor_row}>
                        <Text style={styles.text}>Microfono</Text>
                        
                    </View>
                    <View style={styles.device_sensor_row}>
                        <Text style={styles.text}>Polar OH1</Text>
                        
                    </View>
                </View>
            </SafeAreaView>
        
        );
    }
}

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
        marginLeft:10,
        marginRight:10,
        //backgroundColor:"#60adb7b8"
    },
    device_sensor_row:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginRight:20,
        marginLeft:20,
        marginTop:20,
    },
      button: {
        marginTop:20,
        alignItems: "center",
        backgroundColor: "#60adb7b8",
        paddingLeft: 20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:5,
        borderColor:"#FFFFFF",
        borderWidth:1
        
      },
      text_input:{
          borderColor:"#60ADB7E5",
          borderWidth:2,
          borderRadius:10,
          marginTop:5
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
      }
    });