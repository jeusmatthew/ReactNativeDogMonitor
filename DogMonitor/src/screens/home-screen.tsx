import * as React from 'react';
import { Button } from 'react-native';
  export const HomeScreen = ({ navigation }) => {
    return (
      <Button
        title="Home screen"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
      );
    };
