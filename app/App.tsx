/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import './src/localization/i18n';
import {ViewNames, SendEmail, EnterCode, Login, Welcome} from '@views/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={ViewNames.Welcome} component={Welcome} />
          <Stack.Screen name={ViewNames.Login} component={Login} />
          <Stack.Screen name={ViewNames.EnterCode} component={EnterCode} />
          <Stack.Screen name={ViewNames.SendEmail} component={SendEmail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
