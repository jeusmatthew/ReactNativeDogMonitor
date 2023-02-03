import React, { useEffect,useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View,FlatList, Touchable, TouchableOpacity, ActivityIndicator, Modal, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RoutineItem } from "../components";
import { Routine } from '../models';
import { RoutineService } from '../services/routine-service';

const routinesArray:Routine[] = []

export const DataScreen = ({ navigation }) => {
  const [routines,setRoutines] = useState(routinesArray);
  const [downloadingRoutine,setDownloadingRoutine] = useState(false)
  const [savingRoutine,setSavingRoutine] = useState(false)
  const [modalVisibility,setModalVisibility] = useState(false)
  const [deleteModalVisibility,setDeleteModalVisibility] = useState(false)
  const [deletingRoutine,setDeleteingRoutine] = useState(false);
  const [searchText,setSearchText] = useState("");
  const [refreshingRoutines,setRefreshingRoutines] = useState(false)

  async function getRoutines(searchInput?:string) {
    setRefreshingRoutines(true)
    console.log("loading routines...");
    const routinesList:Routine[] = await RoutineService.listRoutines(searchInput);
    setRoutines(routinesList);
    console.log("routines: ",routines);
    setRefreshingRoutines(false)
  }
  useEffect( () => {
    // code to run on component mount
    // async function getRoutines() {
    //   console.log("loading routines...");
    //   const routinesList:Routine[] = await RoutineService.listRoutines();
    //   setRoutines(routinesList);
    //   console.log("routines: ",routines);
    // }
    getRoutines();
    },[])
    return (
      <SafeAreaView style = {styles.safe_area}>
          <Modal
          animationType="slide"
          transparent={true}
          visible={downloadingRoutine || savingRoutine}
          onRequestClose={() => {
            //Alert.alert("Modal has been closed.");
            setModalVisibility(false);
            console.log("close  modal...");
            
          }}
        >
            
            <View style={styles.modal_container}>
                <TouchableWithoutFeedback>
                 <View style={styles.modal_card_container}>
                        {/* <View style={{alignItems:'flex-end'}}>
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
                        { isSendingDeviceName ? <ActivityIndicator   style={{marginBottom:20}}></ActivityIndicator> : null} */}
                        <ActivityIndicator  ></ActivityIndicator>
                        { downloadingRoutine ? (<Text style={styles.text_downloading_data} >Descargando datos...</Text>):null}
                        { savingRoutine? (<Text style={styles.text_downloading_data} >Guardando datos en memoria interna...</Text>):null}
                </View>
                </TouchableWithoutFeedback>
            </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={deletingRoutine}
          onRequestClose={() => {
            //Alert.alert("Modal has been closed.");
            setDeleteModalVisibility(false);
            console.log("close  modal...");
          }}
          >  
            <View style={styles.modal_container}>
                <TouchableWithoutFeedback>
                 <View style={styles.modal_card_container}>
                        <ActivityIndicator  ></ActivityIndicator>
                        { deletingRoutine ? (<Text style={styles.text_downloading_data} >Eliminando rutina...</Text>):null}
                </View>
                </TouchableWithoutFeedback>
            </View>
        </Modal>



        <View style ={styles.text_input_view}>
          <TextInput style = {styles.text_input} placeholder="Nombre de la mascota" placeholderTextColor="#b8b8b8"  onChangeText={(text)=>{
                            setSearchText(text)
          }}/>
          <TouchableOpacity onPress={()=>{ getRoutines(searchText)}}>
          <Image source={require('../../assets/search.png')} style={styles.search_icon} />
          </TouchableOpacity>
        </View>
        <FlatList
        refreshing={refreshingRoutines}
        onRefresh={()=>getRoutines()}
        style={{marginLeft:10,marginRight:10}}
        data={routines}
        renderItem={({item}) => <RoutineItem routine={item} downloadData={(value:boolean)=>{setDownloadingRoutine(value)}} savingInDevice={(value:boolean)=>{setSavingRoutine(value)}}
        deletingRoutine={(value:boolean)=>{setDeleteingRoutine(value)}}
        refreshRoutines ={()=>{getRoutines()}}
        />}
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
     color:"#696969",
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
    text_downloading_data:
    {
      color:"#696969",
      marginTop:10
      
    }
  });