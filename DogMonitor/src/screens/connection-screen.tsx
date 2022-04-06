import { StackActions } from '@react-navigation/native';
import * as React from 'react';
import { Component } from 'react';
import { ActivityIndicator, Button, Image, PermissionsAndroid, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
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
      constructor(props) {
        super(props);
        this.state = {
          message: 'hello world',
          testingHealth: true,
        };
      }

      async componentDidMount() {
        this.tryConnection();
      }

      private tryConnection = async () => {
        this.setState({
          testingHealth: true,
        });
        const connected = await HelathService.testHelath();
        if (connected) {
          this.props.navigation.dispatch(StackActions.replace('Home'));
        } else {
          console.log('no conectado');
          this.setState({
            testingHealth: false,
          });
          ToastAndroid.show('Error conectando con el dispositivo', 1000);
        }
      };

      render() {
        return (
          <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle="light-content" backgroundColor="#60ADB7" />
            <View style={styles.container}>
              <View style={styles.top_and_bottom_view_space}></View>
              {this.state.testingHealth ? (
                <View style={styles.center_card}>
                  <ActivityIndicator size="large" color="#60ADB7" />
                  <Text>conectando...</Text>
                </View>
              ) : null}
              {this.state.testingHealth ? null : (
                <View style={styles.center_color_card}>
                  <Image source={require('../../assets/warning.png')} />
                  <Text style={styles.large_text}>
                    Dispositivo no encontrado
                  </Text>
                  <Text style={styles.normal_text}>
                    Dispositivo no encontrado Utilice la configuración wifi del
                    equipo para conectarse a la red DOGMONITOR_XX
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={async () => {
                      this.tryConnection();
                    }}>
                    <Text style={{color: '#FFFFFF'}}>Intentar nuevamente</Text>
                  </TouchableOpacity>
                </View>
              )}
              <View style={styles.top_and_bottom_view_space}></View>
            </View>
          </SafeAreaView>
        );
      }
    }
      
      
    const styles = StyleSheet.create({
      container:{flexDirection:'column',flex:1,padding:0},
      center_card:{flexDirection:'column',flex:5,padding:0,alignItems:'center', justifyContent:'center',marginRight:20,marginLeft:20,borderRadius:5},
      center_color_card:{flexDirection:'column',flex:5,padding:0,alignItems:'center', justifyContent:'center',backgroundColor:"#60ADB7",marginRight:20,marginLeft:20,borderRadius:5},
      large_text:{color:'#FFFFFF',fontSize:20,fontWeight:'bold'},
      normal_text:{color:"#FFFFFF",fontSize:16,textAlign:'center',marginTop:20,marginRight:5,marginLeft:5},
      top_and_bottom_view_space:{flexDirection:'column',flex:1,padding:0,alignItems:'center', justifyContent:'center' },
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
          
        }
      });