import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state=({
      text:""
    })
  }
  submit = async() =>{
 
     await fetch("http://192.168.43.219:3000/data",{
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            msg:this.state.text
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      alert(responseJson)
       console.log(responseJson)
    })
    
    console.log(this.state.text)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome!</Text>
        <TextInput  
                          
                          onChangeText={(text) => this.setState({text})}
                          style={{   
                          width: "70%",
                          height: "10%",
                          fontSize: 20,
                          paddingLeft:20,
                          borderColor:"white",
                          borderWidth:1,
                          color:"black",
                          backgroundColor:"green",
                          margin:10}}>

              </TextInput>
              <TouchableOpacity onPress={()=>{this.submit()}}>
                <Text>
                  submit
                </Text>
              </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
