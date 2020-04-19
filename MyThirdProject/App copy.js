import React from 'react';
import { Text, View, TextInput } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hi, My name is {props.name} and I am a student in CIS340!</Text>
    </View>
  );
}
export default function MultiComp(){
return(
<View> style={{
flex: 1,
justifyContent: "center",
alignItems: "center"
}}>
<Text> Welcome to CIS340! </Text>
<Student name = "Zjhondre Trujillo" />
<Student name = "Chris Martin" />
<Student name = "Austin Danhoff"/>
<Student name = "John Doe" />
</View>


)

}
