
import { StyleSheet, Text, View } from 'react-native';
import store from "./redux/store"
import { Provider } from 'react-redux'; 
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MapScreen from './screens/MapScreen';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
        <Stack.Navigator>
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={{
                headerShown: false
              } }
            />
            <Stack.Screen
              component={MapScreen}
              name="MapScreen"
              options={{
                headerShown:false
              }}
            />
        </Stack.Navigator>
       </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
