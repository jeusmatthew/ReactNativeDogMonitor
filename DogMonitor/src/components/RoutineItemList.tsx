  
import { DateTime } from 'luxon';
import React, { useState } from 'react';
import {ToastAndroid, Alert, View, StyleSheet, SafeAreaView, FlatList, Text, TouchableOpacity, Image, ActivityIndicator, PermissionsAndroid } from 'react-native';
import { Dirs, FileSystem } from 'react-native-file-access';
import { CSVHelper } from '../helpers';
import { FileSystemHelper } from '../helpers/file-system-helper';
import { Routine } from '../models';
import { RoutineService } from '../services/routine-service';

  // export const RoutineItem = ({routine}) => (
  //   <View style={styleSheet.item}>
  //     <View style={styleSheet.MainContainer}>
  //       <Text style={styleSheet.routine_name}>{routine.name}</Text>
  //       <Text style={styleSheet.dog_name}>{routine.dog_name}</Text>
  //       <View style={styleSheet.date_container}>
  //         <Text style={styleSheet.dates}>Inicio: </Text>
  //         <Text style={styleSheet.dates}>01/01/1999 00:00:00</Text>
  //       </View>
  //       <View style={styleSheet.date_container}>
  //         <Text style={styleSheet.dates}>Fin: </Text>
  //         <Text style={styleSheet.dates}>01/01/1999 23:59:59</Text>
  //       </View>
  //     </View>
  //     <TouchableOpacity style={styleSheet.image_container} onPress={()=>{downloadDataPressed(routine)}}>
  //       <Image source={require('../../assets/download.png')} style={styleSheet.download_image}/>
  //     </TouchableOpacity>
  //     <ActivityIndicator ></ActivityIndicator>
  //   </View>
  // );
  export const RoutineItem = ({ routine,downloadData,savingInDevice,deletingRoutine,refreshRoutines }) => {
    const [downloadingData,setDownloadingFlag] = useState(false);

      return (
        <View style={styleSheet.item}>
          <View style={styleSheet.MainContainer}>
            <Text style={styleSheet.routine_name}>{routine.name}</Text>
            <Text style={styleSheet.dog_name}>{routine.dog_name}</Text>
            <View style={styleSheet.date_container}>
              {/* <Text style={styleSheet.dates}>Creado: </Text> */}
              <Text style={styleSheet.dates}>{routine.created_at}</Text>
            </View>
            {/* <View style={styleSheet.date_container}>
              <Text style={styleSheet.dates}>Fin: </Text>
              <Text style={styleSheet.dates}>01/01/1999 23:59:59</Text>
            </View> */}
          </View>
          {/* <TouchableOpacity style={styleSheet.image_container} onPress={()=>{downloadDataPressed(routine)}}> */}
          <TouchableOpacity style={styleSheet.image_container} onPress={()=>{
             deleteRoutine(routine.id,deletingRoutine,refreshRoutines);
            }}>
            <Image source={require('../../assets/trash.png')} style={styleSheet.download_image}/>
          </TouchableOpacity>
          <TouchableOpacity style={styleSheet.image_container} onPress={()=>{downloadDataPressed(routine,downloadData,savingInDevice)}}>
            <Image source={require('../../assets/download.png')} style={styleSheet.download_image}/>
          </TouchableOpacity>
          {/* <ActivityIndicator ></ActivityIndicator> */}
        </View>
        );
  };

  function showToast() {
    ToastAndroid.show('Se requieren los permisos para descargar los datos', ToastAndroid.SHORT);
  }
  const tryToGetPermissions = async ():Promise<boolean>=>
  {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Permiso de almacenamiento",
          message:
            "DogMonitor necesita permisos para escribir en el almacenamiento interno y guardar los datos en la carpeta de descargas",
          // buttonNeutral: "Preguntar mas tarde",
          // buttonNegative: "Cancelar",
          buttonPositive: "Aceptar"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
       return true;
      } else {
        console.log("Camera permission denied");
        return false
      }
    } catch (err) {
      console.warn(err);
      return false;
    }

  }
  const saveRoutineInDownloads = async (routine:Routine)=>
  {
    // try{
    //   console.log("creating directory");
    //   const routineAsString = JSON.stringify(routine);
    //   const routineAsCsv = CSVHelper.converImuDataInCsv(routine.imu)
    //   console.log(routineAsString);
    //   console.log("creating date...");
    //   const currentDate = new Date();
    //   let currentDateString =  (currentDate.toLocaleDateString() +" "+ currentDate.toLocaleTimeString())+"."+currentDate.getMilliseconds()
    //   currentDateString = currentDateString.replace("/","-")
    //   currentDateString = currentDateString.replace("/","-")
    //   console.log("current date: ",currentDateString);
    //   const fileName = `${routine.name}_${currentDateString}.json`
    //   console.log("file name: ",fileName);
      
    //   const path =`${Dirs.DocumentDir}/${fileName}`;
    //   console.log(`saving in path ${path}...`);
    //   if (await FileSystem.exists(path)){ 
    //     console.log("file exist");
    //   }else{
    //     console.log("file not exist");
        
    //   }
    //   const text = await FileSystem.writeFile(path,routineAsString,"utf8");
    //   if (!await FileSystem.exists(path)){ 
    //     console.log("file not exist");
    //     return;
    //   }else{
    //     console.log("file write success");
    //   }// check to see if our filePath was created
    //   await FileSystem.cpExternal(path,fileName,'downloads');// copies our file to the downloads folder/directory
    //   ToastAndroid.show('Se han descargado los datos correctamente', ToastAndroid.SHORT);
    // }catch(e)
    // {
    //   console.log(e);
    //   ToastAndroid.show('Error escribiendo en el almacenamiento interno', ToastAndroid.SHORT);
    // }
    const routineAsString = JSON.stringify(routine);
    const routineAsCsv = await CSVHelper.converImuDataInCsv(routine.imu);
    const folderName = FileSystemHelper.computeFolderName(routine.name);
    const folderPath = `${Dirs.DocumentDir}/${folderName}/`;
    await FileSystemHelper.createPrivateFolder(folderPath);
    console.log("folder name: ",folderName);
    const jsonFileName =await FileSystemHelper.writeFileInPrivateFolder(routineAsString,"imu.json",folderPath);
    const csvFileName = await FileSystemHelper.writeFileInPrivateFolder(routineAsCsv,"imu.csv",folderPath);
    await FileSystemHelper.copyRoutineFolder(folderPath,folderName)
    
  }

  const saveAudioInDownloads = async (audioData:any,audioName:string)=>
  {
    try{
      console.log("creating directory");
      const fileName = audioName;
      const path =`${Dirs.DocumentDir}/${fileName}`;
      console.log(`saving in path ${path}...`);
      console.log("saving audio as utf8");
      
      const text = await FileSystem.writeFile(path,audioData,"base64");
      if (!FileSystem.exists(path)){ 
        return;
      }// check to see if our filePath was created
      await FileSystem.cpExternal(path,fileName,'downloads');// copies our file to the downloads folder/directory
      ToastAndroid.show('Se han descargado el audio correctamente', ToastAndroid.SHORT);
    }catch(e)
    {
      console.log(e);
      ToastAndroid.show('Error escribiendo el audio en el almacenamiento interno', ToastAndroid.SHORT);
    }
    
  }
  const downloadDataPressed =async  (routine:Routine,downloadData:any,savingInDevice:any)=>
  {
    const granted = await tryToGetPermissions()
    if(!granted){
     showToast();
     return 
    }
    console.log("seachig routine with id: ",routine.id);
    downloadData(true)
    const routineInDevice =  await RoutineService.getRoutineById(routine.id);
    const audioFile = await RoutineService.getAudioFile("static_file_test.jpg")
    savingInDevice(true)
    downloadData(false)
    await saveRoutineInDownloads(routineInDevice!)
    //await saveAudioInDownloads(audioFile,"static_file_test.jpg")
    savingInDevice(false)
    console.log("search routine done...");
    
  }

  const deleteRoutine = async (routine_id:string,deletingRoutine:any,refreshRoutines:any) =>
  {
    deletingRoutine(true)
    const deleted = await RoutineService.deleteRoutineById(routine_id);
    if(deleted)
    {
      refreshRoutines()
    }else
    {

    }
    deletingRoutine(false);
  }
const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex:5,
  },
  image_container:
  {
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    marginRight:10
  },
  download_image:
  {
    width:30,
    height:30,
  },
  item: {
    flexDirection:'row',
    marginTop:5,
    paddingLeft: 10,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor:"#60ADB7",
    borderRadius:10
    
  },
 
  dog_name: {
    fontSize: 15,
    color: 'white'
  },
  routine_name: {
    fontSize: 18,
    color: 'white',
    fontWeight:'bold'
  },
  dates:
  {
    fontSize: 15,
    color: 'white'
  },
  date_container:
  {
    flexDirection:'row'
  }
 
});