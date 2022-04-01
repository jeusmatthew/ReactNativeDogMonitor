import * as React from 'react';
import { Button } from 'react-native';

export const SettingsScreen = ({ navigation }) => {
    return (
      <Button
        title="Setting scren"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
      );
};