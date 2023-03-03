/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {ConnectionScreen, HomeScreen, HomeStackScreen,ProfileScreen,SettingsScreen} from './src/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DeviceService } from './src/services';
const HomeStack = createNativeStackNavigator();


// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };
//   return (
//     <NavigationContainer>
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeStackScreen} options={{
//         headerShown:false,
//         tabBarIcon: ({size,focused,color}) => {
//           return (
//             <Image
//               style={{ width: size, height: size }}
//               source={{
//                 uri:
//                   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
//               }}
//             />
//           );
//         },
//         }} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   </NavigationContainer>
//   );
// };
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  let [applicationConnected,setConnection] = React.useState(true);


  React.useEffect(() => {
    const interval = setInterval(async () => {
      // const connectionState =!applicationConnected;
      // setConnection(true)
      try{
        const routineRunningResponse = await DeviceService.getDeviceInformation();
        if(applicationConnected!) setConnection(true)
      }catch(error){
        console.log("Connecting error...");
        
        setConnection(false)
      }
      console.log("interval to check conecction------------------------------------------>",applicationConnected);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  
  return (
   <NavigationContainer >
      { applicationConnected ? (<HomeStack.Navigator>
      <HomeStack.Screen name="Dog training data collector" component={ConnectionScreen} options= {
        {
          headerStyle:styles.header,
          headerTintColor:"#FFFFFF"
        }
      }/>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerShown:false
      }} />
      </HomeStack.Navigator>):(
        <SafeAreaView style={styles.disconnected_container}>
          <Image source={require('./assets/disconnected.png')} style={styles.disconnected_image}/>
          <Text style ={{marginTop:10}}>Error conectando con el dispositivo</Text>

        </SafeAreaView>

      )}
   </NavigationContainer>
  );
};
// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
const styles = StyleSheet.create({
  disconnected_image:{
    maxHeight:100,
    maxWidth:100
  },
  disconnected_container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
    justifyContent:'center',
    alignItems:'center'
  },  
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  header:
  {
    backgroundColor:'#60ADB7'
  }
});

export default App;
