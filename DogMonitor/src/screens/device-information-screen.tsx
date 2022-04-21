import * as React from 'react';
import { ActivityIndicator, Image, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useState,useEffect} from 'react';
import { DeviceService } from '../services';
import { DeviceSensors } from '../models';
const deviceSensorsObject:DeviceSensors = {
    imu1:false,
    imu2:false,
    microphone:false,
    polar:false,
    temperature:false
} 
export const DeviceInformationScreen = ({ navigation }) => {
    //Properties section
    const [loadingDeviceName,setLoadingDeviceName] = useState(true);
    const [loadingDeviceSensors,setLoadingDeviceSensors] = useState(true);
    const [loadingData,setLoadingData] = useState(true);
    const [deviceName,setDeviceName] = useState('');
    const [deviceSensors,setDeviceSensors] = useState(deviceSensorsObject);
    const [isModalVisible,setModalVisibility] = useState(false);
    const [isSendingDeviceName,setSendingDeviceNmae] =useState(false)
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
                setDeviceSensors(deviceSensors);
                setLoadingData(false)
            }catch(_error)
            {   
                
            }
        }
        getDeviceInformation();
        },[])
    return (
        
        <SafeAreaView style={{flex: 1}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            //Alert.alert("Modal has been closed.");
            setModalVisibility(false);
            console.log("close  modal...");
            
          }}
        >
            <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={(()=>{setModalVisibility(false);})} >
            <View style={styles.modal_container}>
                <TouchableWithoutFeedback>
                 <View style={styles.modal_card_container}>
                        <View style={{alignItems:'flex-end'}}>
                            <TouchableOpacity onPress={()=>{setModalVisibility(false)}}>
                            <Image source={require('../../assets/close.png')} style={styles.close_icon}  />
                            </TouchableOpacity>
                        </View>
                        <View>
                        <Text style={styles.modal_text_label} >Nombre del dispositivo</Text>
                        <TextInput value={deviceName} style={styles.modal_text_input} onChangeText={(text)=>{
                            setDeviceName(text)
                        }}/>
                        </View>
                        <View style={styles.modal_buttons_container}>
                            <TouchableOpacity  disabled={isSendingDeviceName} style={styles.cancel_button} onPress={(()=>{setModalVisibility(false);})} >
                                <Text style={styles.button_text}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity disabled={isSendingDeviceName} style={styles.save_button} onPress={async ()=>{
                             setSendingDeviceNmae(true);
                             await DeviceService.updateDeviceInformation({name:deviceName});
                             setSendingDeviceNmae(false);
                             setModalVisibility(false);
                            }}>
                                <Text style={styles.button_text}>Guardar</Text>
                                
                            </TouchableOpacity>
                        </View>
                        { isSendingDeviceName ? <ActivityIndicator   style={{marginBottom:20}}></ActivityIndicator> : null}
                </View>
                </TouchableWithoutFeedback>
            </View>
            </TouchableOpacity>
            {/* <TouchableOpacity style={{flex:1, backgroundColor:'blue',alignItems:'center',justifyContent:'center'}} onPress={(()=>{setModalVisibility(false);})} >
                <TouchableWithoutFeedback>
                    <View style={styles.modal_container}>
                        <View>
                        <Text style={styles.modal_text_label} >Nombre del dispositivo</Text>
                        <TextInput value={deviceName} style={styles.modal_text_input}/>
                        </View>
                        <View style={styles.modal_buttons_container}>
                            <TouchableOpacity style={styles.save_button}>
                                <Text style={styles.button_text}>Guardar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cancel_button}>
                                <Text style={styles.button_text}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </TouchableWithoutFeedback>
            </TouchableOpacity> */}
        </Modal>
            {loadingData ? 
            (<View style={styles.loading_data_container}>
                  <ActivityIndicator size="large" color="#60ADB7" />
                  <Text>Cargando...</Text>
            </View>) :
            (<View style={{flex:1}}>
                <Text style={styles.dog_name_label}>Nombre del dispositivo</Text>
                <View style ={styles.text_input_view}>
                    <TextInput editable={false} placeholder="Nombre del dispositivo" value={deviceName}/>
                    <TouchableOpacity onPress={()=>{setModalVisibility(true)}}>
                    <Image source={require('../../assets/pencil.png')} style={styles.edit_icon}  />
                    </TouchableOpacity>
                </View>
                
                
                <View style={styles.device_sensors}>
                    <View style={styles.device_sensor_row}>
                        
                        {
                        deviceSensors.imu1 ? (
                            <><Text style={styles.text}>IMU1</Text><View style={styles.green_tag}><Text style={styles.text_status}>Conectado</Text></View></>
                        ):(
                            <><Text style={styles.text}>IMU1</Text><View style={styles.red_tag}><Text style={styles.text_status}>Desconectado</Text></View></>
                        )
                        }
                    </View>
                    <View style={styles.device_sensor_row}>
                        {
                        deviceSensors.imu2 ? (
                            <><Text style={styles.text}>IMU2</Text><View style={styles.green_tag}><Text style={styles.text_status}>Conectado</Text></View></>
                        ):(
                            <><Text style={styles.text}>IMU2</Text><View style={styles.red_tag}><Text style={styles.text_status}>Desconectado</Text></View></>
                        )
                        }
                    </View>
                    <View style={styles.device_sensor_row}>
                        {
                        deviceSensors.temperature ? (
                            <><Text style={styles.text}>Temperatura</Text><View style={styles.green_tag}><Text style={styles.text_status}>Conectado</Text></View></>
                        ):(
                            <><Text style={styles.text}>Temperatura</Text><View style={styles.red_tag}><Text style={styles.text_status}>Desconectado</Text></View></>
                        )
                        }
                        
                    </View>
                    <View style={styles.device_sensor_row}>
                        {
                        deviceSensors.microphone ? (
                            <><Text style={styles.text}>Microfono</Text><View style={styles.green_tag}><Text style={styles.text_status}>Conectado</Text></View></>
                        ):(
                            <><Text style={styles.text}>Microfono</Text><View style={styles.red_tag}><Text style={styles.text_status}>Desconectado</Text></View></>
                        )
                        }
                    </View>
                    <View style={styles.device_sensor_row}>
                        {
                        deviceSensors.polar ? (
                            <><Text style={styles.text}>Polar OH1</Text><View style={styles.green_tag}><Text style={styles.text_status}>Conectado</Text></View></>
                        ):(
                            <><Text style={styles.text}>Polar OH1</Text><View style={styles.red_tag}><Text style={styles.text_status}>Desconectado</Text></View></>
                        )
                        }
                    </View>
                </View>
            </View>)
            }
        </SafeAreaView>
    
    );
};

const styles = StyleSheet.create({
    button_text:{
        color:"#ffffff",
        marginLeft:30,
        marginRight:30,
        marginTop:10,
        marginBottom:10,
        borderRadius:10,

    },
    modal_buttons_container:
    {
        marginTop:20,
        marginLeft:30,
        marginRight:30,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:30
        
    },
    save_button:
    {
        flexDirection:'row',
        backgroundColor:"#6DB77D",
        borderRadius:10
    },
    cancel_button:
    {
        flexDirection:'row',
        backgroundColor:"#DF7985",
        borderRadius:10
    },
    modal_text_input:{
        borderColor:"#60ADB7E5",
        borderWidth:2,
        borderRadius:10,
        marginLeft:20,
        marginRight:20,
        marginTop:5

    },modal_text_label:
    {
        marginTop:5,
        marginLeft:20,
        marginRight:20,
        fontWeight:'bold',
        marginBottom:7

    },
    button2: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
    modal_container:
    {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal_card_container:
    {
        backgroundColor:"#ffffff",
        width: 300,
        height: 250,
        justifyContent:'space-between'
    },
    red_tag:{
        backgroundColor: "#DF7985",
        borderRadius: 20,
        height:40,
        width:130,
    },
    green_tag:{
        backgroundColor: "#6DB77D", 
        borderRadius: 20,
        height:40,
        width:130,
        alignItems:'center'
    },
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
        marginRight:10,
      },
      close_icon:
      {
        width:25,
        height:25,
        marginRight:10,
        marginTop:10
      }
    });