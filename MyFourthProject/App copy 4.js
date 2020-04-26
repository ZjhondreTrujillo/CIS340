import React from 'react';
import { Text, View, FlatList} from 'react-native';


export default StatesApp = () => {
return(
  <View style={{flex: 1, paddingTop: 22}}>
<FlatList
data={[
{key: 'Alabama'},
{key: 'Alaska'},
{key: 'Arizona'},
{key: 'Arkansas'},
{key: 'Colorado'},
{key: 'New York'},
{key: 'Texas'},
{key: 'California'},
{key: 'Florida'},
{key: 'North Dakota'},
{key: 'South Dakota'},
{key: 'Utah'},
{key: 'Nevada'},
{key: 'Washington'},
{key: 'Oregon'},
{key: 'Tennessee'},
{key: 'North Carolina'},
{key: 'Virginia'},
{key: 'Hawaii'},
{key: 'South Carolina'},
{key: 'Kansas'},
{key: 'Montana'},
{key: 'Wyoming'},
{key: 'Nebraska'},
{key: 'Minnesota'},
{key: 'Mississippi'},
]}
renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item.key} </Text>}

/>
  </View>
    
  );
}