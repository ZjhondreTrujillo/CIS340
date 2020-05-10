import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
const [count, setcount] = useState(0);
const onTap = () => setcount(count => count +1);

  return (
    <View style={styles.container}>
      <View style={styles.counterText}>
      <Text>Tap Counter: {count} </Text>
      </View>
      <TouchableOpacity
      style={styles.button}
      onPress={onTap} >
<Text> Push Me</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#5F9EA0',
    padding: 10
  },

counterText: {

  alignItems: 'center',
  padding: 10
}


});
