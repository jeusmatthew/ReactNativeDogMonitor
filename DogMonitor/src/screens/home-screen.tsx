import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Button, Image, PermissionsAndroid} from 'react-native';
import {Dirs, FileSystem} from 'react-native-file-access';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackScreen} from './home-stack-screen';
import {RoutinesScreen} from './routines-screen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DeviceInformationScreen} from './device-information-screen';
import {DataScreen} from './data-screen';
//const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

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

export const HomeScreen = ({navigation}) => {
  return (
    // <Button title='xd'/>
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#c0d2d5',
        tabBarActiveTintColor: '#FFFFFF',
        tabBarIndicatorStyle: {
          backgroundColor: '#26838f',
        },
        tabBarPressColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#60ADB7',
        },
      }}>
      {/* <Tab.Screen name="Home" component={SettingsScreen} options={{
        headerShown:false,
        tabBarIcon: ({size,focused,color}) => {
          return (
            <Image
              style={{ width: size, height: size }}
              source={{
                uri:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
              }}
            />
          );
        },
        }} /> */}
      <Tab.Screen name="Información" component={DeviceInformationScreen} />
      <Tab.Screen name="Rutinas" component={RoutinesScreen} />
      <Tab.Screen name="Datos" component={DataScreen} />
    </Tab.Navigator>
  );
};
