import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import LoginScreen from './src/login';
import DataAnakScreen from './src/dataAnak';

export default function App() {
  return (
    <View style={styles.container}>
      <DataAnakScreen />
      <StatusBar style="auto" />
    </View>
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