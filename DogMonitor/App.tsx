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
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {ConnectionScreen, HomeStackScreen,ProfileScreen,SettingsScreen} from './src/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const HomeStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
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
  return (
   <NavigationContainer >
      <HomeStack.Navigator>
      <HomeStack.Screen name="Dog training data collector" component={ConnectionScreen} options= {
        {
          headerStyle:styles.header,
          headerTintColor:"#FFFFFF"
        }
      }/>
      {/* <HomeStack.Screen name="Profile" component={ProfileScreen} /> */}
      </HomeStack.Navigator>
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
