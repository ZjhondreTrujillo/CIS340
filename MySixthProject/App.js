import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

const csuLogo = {
  uri:'https://csurams.com/images/2018/7/17/CSU18_Lockup_Forest_Green_Desktop.jpg',
   width: 80,
   height: 80

};



  return (
    <View style={styles.container}>
      <Image
      style={style.localCSUlogo}
      source={require('C:\Users\nodejs\CIS340\MySixthProject\assets\localCSULogo.png')}
      />
      <Image
    style={styles.urlCSULogosource}
    source={{
    uri:'https://csurams.com/images/2018/7/17/CSU18_Lockup_Forest_Green_Desktop.jpg'
    }}
      />
<Image source={csuLogo}/>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  localCSULogo: {
    width: 55,
    height: 65,
  },

  urlCSULogo: {
width: 50,
height: 50

  }
});
