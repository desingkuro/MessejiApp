import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Presentacion from './screens/Presentacion';
import Stack from './navigation/Stack';
import { NavigationContainer } from '@react-navigation/native';
import ContextoGeneral, { Contexto } from './context/ContextoGeneral';
import Moderador from './screens/Moderador';

export default function App() {
  return (
    <ContextoGeneral>
      <NavigationContainer>
        <Moderador/>
      </NavigationContainer>
    </ContextoGeneral>
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
