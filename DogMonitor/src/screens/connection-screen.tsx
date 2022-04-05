import * as React from 'react';
import { Component } from 'react';
import { ActivityIndicator, Button, Image, PermissionsAndroid, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HelathService } from '../services';
//   export const ConnectionScreen = ({ navigation }) => {
//     return (
//     <SafeAreaView style={{flex:1}}>
//         <StatusBar barStyle="light-content" backgroundColor="#60ADB7" />
//         <View style = {{flexDirection:'column',flex:1,padding:0}}  >
//             {/* <ActivityIndicator size="large" color="#60ADB7"/>             */}
//             <View style = {{flexDirection:'column',flex:1,padding:0,alignItems:'center', justifyContent:'center' }}  ></View>
//             <View style = {{flexDirection:'column',flex:5,padding:0,alignItems:'center', justifyContent:'center',backgroundColor:"#60ADB7",marginRight:10,marginLeft:10,borderRadius:5}}  >
//                 <Image source={require('../../assets/warning.png')} />
//                 <Text style={{color:'#FFFFFF',fontSize:20,fontWeight:'bold'}}>Dispositivo no encontrado</Text>
//                 <Text style={{color:"#FFFFFF",fontSize:16,textAlign:'center',marginTop:20,marginRight:5,marginLeft:5}}>Dispositivo no encontrado Utilice la configuración wifi del equipo para conectarse a la red DOGMONITOR_XX</Text>
//                 <TouchableOpacity
//                     style={styles.button}
//                 >
//                     <Text style={{color:"#FFFFFF"}}>Intentar nuevamente</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style = {{flexDirection:'column',flex:1,padding:0,alignItems:'center', justifyContent:'center' }}  ></View>
//         </View>
//     </SafeAreaView>
//       );
//     };

    export class ConnectionScreen extends Component {
  
        constructor(props){
          super(props);
          this.state = {
            message: 'hello world', 
          }
        }
            
        async componentDidMount() {
          const connected = await HelathService.testHelath();
          if(connected)
          {
              
          }
          
        }
        
        render(){
          return(
            <SafeAreaView style={{flex:1}}>
            <StatusBar barStyle="light-content" backgroundColor="#60ADB7" />
            <View style = {{flexDirection:'column',flex:1,padding:0}}  >
                {/* <ActivityIndicator size="large" color="#60ADB7"/>             */}
                <View style = {{flexDirection:'column',flex:1,padding:0,alignItems:'center', justifyContent:'center' }}  ></View>
                <View style = {{flexDirection:'column',flex:5,padding:0,alignItems:'center', justifyContent:'center',backgroundColor:"#60ADB7",marginRight:20,marginLeft:20,borderRadius:5}}  >
                    <Image source={require('../../assets/warning.png')} />
                    <Text style={{color:'#FFFFFF',fontSize:20,fontWeight:'bold'}}>Dispositivo no encontrado</Text>
                    <Text style={{color:"#FFFFFF",fontSize:16,textAlign:'center',marginTop:20,marginRight:5,marginLeft:5}}>Dispositivo no encontrado Utilice la configuración wifi del equipo para conectarse a la red DOGMONITOR_XX</Text>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text style={{color:"#FFFFFF"}}>Intentar nuevamente</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'column',flex:1,padding:0,alignItems:'center', justifyContent:'center' }}  ></View>
            </View>
        </SafeAreaView>
          )
        }
      }
      
      
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 10
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
        countContainer: {
          alignItems: "center",
          padding: 10
        }
      });