import React,{ useState }  from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput,Check, TouchableOpacity, View, ToastAndroid, TouchableWithoutFeedback, ActivityIndicator, Modal } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { RoutineService } from '../services/routine-service';

export const RoutinesScreen = ({ navigation }) => {
  const [minutesEnabled,setMinutesEnabled] = useState(false);
  let [minutes,setMinutes] =useState('0');
  let [routineNameInput,setRoutineNameInput] = useState("");
  let [dogNameInput,setDogNameInput] = useState("");
  let [startingRoutine,setStartingRoutine] = useState(false);
  const routineNameInputElement = React.useRef();
  const dogNameInputElement = React.useRef()
  const [startingRoutineModalVisibility,setStartingRoutineModalVisibility] = useState(false)
    return (
      <SafeAreaView style={styles.safe_area}>
                  <Modal
          animationType="slide"
          transparent={true}
          visible={startingRoutine}
          onRequestClose={() => {
            //Alert.alert("Modal has been closed.");
            setStartingRoutineModalVisibility(false);
            console.log("close  modal...");
            
          }}
        >
            
            <View style={styles.modal_container}>
                <TouchableWithoutFeedback>
                 <View style={styles.modal_card_container}>
                        <ActivityIndicator  ></ActivityIndicator>
                        { startingRoutine ? (<Text style={styles.text_starting_routine_data} >Iniciando rutina...</Text>):null}
                </View>
                </TouchableWithoutFeedback>
            </View>
        </Modal>
        <Text style={styles.text}>Nombre de rutina</Text>
        <TextInput ref = {routineNameInputElement} style={styles.text_input } placeholder="Nombre de la rutina"
         onChangeText={(text)=>{
          setRoutineNameInput(text)
      }}
        />
        <Text style={styles.text}>Nombre del perro</Text>
        <TextInput ref={dogNameInputElement } style={styles.text_input } placeholder="Nombre del perro"  onChangeText={(text)=>{
                            setDogNameInput(text)
                        }}/>
        {/* <BouncyCheckbox
          size={25}
          fillColor="#60ADB7"
          unfillColor="#FFFFFF"
          text="Definir duración de rutina"
          iconStyle={{ borderColor: "#60ADB7" }}
          textStyle={{ fontFamily: "JosefinSans-Regular" }}
          onPress={(isChecked: boolean) => {setMinutesEnabled(isChecked)}}
          style={{marginBottom:10}}
        /> */}
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
                      if(dogNameInput == null || dogNameInput == "" || routineNameInput == null || routineNameInput==""){
                        ToastAndroid.show('El nombre de la rutina y de la mascota son obligatorios', ToastAndroid.SHORT);
                        return;
                      }
                      setStartingRoutine(true);
                      const routineCreated = await startRoutine(dogNameInput,routineNameInput);
                      if(routineCreated)
                      {
                        console.log("crear fields...");
                        setRoutineNameInput("");
                        setDogNameInput("");
                        dogNameInputElement.current.clear();
                        routineNameInputElement.current.clear();
                      }
                      setStartingRoutine(false);
                      
            }}>
              <Text style={{color: '#FFFFFF'}}>Iniciar </Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
      );
};

const startRoutine = async (dogName:string,routineName:string):Promise<boolean>=>
{
  const createdRoutine = await RoutineService.createRoutine({
    dog_name:dogName,
    name:routineName
  })
  if(!createdRoutine)
  {
    ToastAndroid.show('Hubo un problema al iniciar la rutina', ToastAndroid.SHORT);
    return false;
  }
  ToastAndroid.show('Rutina creada con éxito', ToastAndroid.SHORT);
  return true;
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
        justifyContent:'center',
        alignItems:'center'
        
    },
    text_starting_routine_data:
    {
      marginTop:10
      
    }

  });