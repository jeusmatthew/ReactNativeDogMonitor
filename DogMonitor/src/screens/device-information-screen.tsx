import * as React from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState,useEffect} from 'react';
import { DeviceService } from '../services';

export const DeviceInformationScreen = ({ navigation }) => {
    //Properties section
    const [loadingDeviceName,setLoadingDeviceName] = useState(true);
    const [loadingDeviceSensors,setLoadingDeviceSensors] = useState(true);
    const [loadingData,setLoadingData] = useState(true);
    const [deviceName,setDeviceName] = useState('');
    // functions sections
    useEffect( () => {
        // code to run on component mount
        async function getDeviceInformation() {
            try{
                console.log("loading data...");
                
                const device = await DeviceService.getDeviceInformation();
                const deviceSensors =  await  DeviceService.getDeviceSensorsInformation();
                console.log(device);
                console.log(deviceSensors);
                console.log("done...");
                setDeviceName(device.name);
                setLoadingData(false)
            }catch(_error)
            {   
                
            }
        }
        getDeviceInformation();
        },[])
    return (
        
        <SafeAreaView style={{flex: 1}}>
            {loadingData ? 
            (<View style={styles.loading_data_container}>
                  <ActivityIndicator size="large" color="#60ADB7" />
                  <Text>Cargando...</Text>
            </View>) :
            (<View style={{flex:1}}>
                <Text style={styles.dog_name_label}>Nombre del dispositivo</Text>
                <View style ={styles.text_input_view}>
                    <TextInput  placeholder="Nombre del dispositivo" value={deviceName}/>
                    <TouchableOpacity onPress={()=>{console.log("Edit device name...");}}>
                    <Image source={require('../../assets/pencil.png')} style={styles.edit_icon} />
                    </TouchableOpacity>
                </View>
                
                
                <View style={styles.device_sensors}>
                    <View style={styles.device_sensor_row}>
                        <Text style={styles.text}>IMU1</Text>
                        <View style={{backgroundColor:"red",borderRadius:20}}><Text style={styles.text_status}>Desconectado</Text></View>
                    </View>
                    <View style={styles.device_sensor_row}>
                        <Text style={styles.text}>IMU2</Text>
                        <View style={{backgroundColor:"red",borderRadius:20}}><Text style={styles.text_status}>Desconectado</Text></View>
                    </View>
                    <View style={styles.device_sensor_row}>
                        <Text style={styles.text}>Temperatura</Text>
                        <View style={{backgroundColor:"red",borderRadius:20}}><Text style={styles.text_status}>Desconectado</Text></View>
                    </View>
                    <View style={styles.device_sensor_row}>
                        <Text style={styles.text}>Microfono</Text>
                        <View style={{backgroundColor:"red",borderRadius:20}}><Text style={styles.text_status}>Desconectado</Text></View>
                    </View>
                    <View style={styles.device_sensor_row}>
                        <Text style={styles.text}>Polar OH1</Text>
                        <View style={{backgroundColor:"red",borderRadius:20}}><Text style={styles.text_status}>Desconectado</Text></View>
                    </View>
                </View>
            </View>)
            }
        </SafeAreaView>
    
    );
};

const styles = StyleSheet.create({
    loading_data_container:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
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
          marginTop:5,
          paddingLeft:10
      },
      text:
      {
          marginLeft:5,
          marginRight:5,
          color:"#717171"
      },
      dog_name_label:{
        marginLeft:10,
        marginRight:10,
        marginBottom:5,
        marginTop:10
      }
      ,
      text_status:
      {
          marginLeft:20,
          marginRight:20,
          marginTop:10,
          marginBottom:10,
          color:"#FFFFFF"
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
      edit_icon:
      {
        width:25,
        height:25,
        marginRight:10
      }
    });