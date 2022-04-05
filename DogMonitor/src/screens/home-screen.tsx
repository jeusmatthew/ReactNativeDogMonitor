import * as React from 'react';
import { Button, PermissionsAndroid } from 'react-native';
import { Dirs, FileSystem } from 'react-native-file-access';

//ToGetPermission
// try {
//   const granted = await PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//     {
//       title: "Cool Photo App Camera Permission",
//       message:
//         "Cool Photo App needs access to your camera " +
//         "so you can take awesome pictures.",
//       buttonNeutral: "Ask Me Later",
//       buttonNegative: "Cancel",
//       buttonPositive: "OK"
//     }
//   );
//   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//     console.log("You can use the camera");
   
//   } else {
//     console.log("Camera permission denied");
//   }
// } catch (err) {
//   console.warn(err);
// }


//Example to move in downloads
// try{
//   console.log("creating directory");
//   const path =Dirs.DocumentDir+"/coconut.txt";
//   console.log(`saving in path ${path}...`);
//   const text = await FileSystem.writeFile(path,"hola mundo","utf8");
//   if (!FileSystem.exists(path)) return;// check to see if our filePath was created
//   await FileSystem.cpExternal(path,"prueba.txt",'downloads');// copies our file to the downloads folder/directory
// }catch(e)
// {
//   console.log(e);
  
// }

  export const HomeScreen = ({ navigation }) => {
    return (
      <Button
        title="Home screen"
        onPress={async () =>{
          
        }
          //navigation.navigate('Profile', { name: 'Jane' })
        }
      />
      );
    };
