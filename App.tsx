import React from 'react';
import {Text,SafeAreaView,StyleSheet,TextInput, FlatList} from "react-native";
import patidata from "./Data/patistore.json";
import Products from './components/Products';


const App = () => {

  const  [text, onChangeText] = React.useState('Ara.. ');
  //@ts-ignore
  const renderPati = ({item}) => <Products pati={item} />


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PatikaStore</Text>
      <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
      <FlatList
        keyExtractor={item=>item.id.toString()}
        data={patidata}
        renderItem={renderPati}
        numColumns={2}
      />


    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop:25,
    alignItems:"center",
  },
  headerText: {
    fontSize: 24,
    color: '#cd5c5c',
    padding: 5,
  },
  input: {
    height: 40,
    margin: 10,
    backgroundColor: '#f8f8ff',
    color: '#dcdcdc',
    padding: 10,
    borderRadius: 5,
  }
})

export default App;
