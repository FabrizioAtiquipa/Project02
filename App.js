import React, {Component} from "react";
import {StyleSheet, ImageBackground, TouchableOpacity, Text, View, TextInput, Image, str} from 'react-native';

const image = { uri: "https://i.pinimg.com/564x/49/a3/d1/49a3d1f296b23b55c873338884bf32a9.jpg" };
export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      textValue: '',
      count:0,
    };
  }

  changeTextInput = text => {
    this.setState({textValue: text});
  }; 

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
 
  render(){
    return(
      <ImageBackground source={image} style={styles.image1}>
      <View style={styles.container}>
        
        <View style={styles.text}>
            <Text style={styles.texto}>HOLA AMIGOS</Text>
        </View>
        <Image style={styles.image} source={require('./img/logo.png')} />
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, backgroundColor:'#fff'
        }} onChangeText ={text => this.changeTextInput(text)}
        value={this.state.textValue} />

        <TouchableOpacity style = {styles.button} onPress={this.onPress}>
          <Text> Touch Here </Text>
        </TouchableOpacity>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.count}
          </Text>
        </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text:{
    alignItems: 'center',
    padding: 10,
  },
  texto:{
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
  },
  image:{
    alignContent: 'center',
    height: 400,
    width: 450,
  },
  image1:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  button: {
    top:10,
    alignItems: 'center',
    backgroundColor: '#73C6B6',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});