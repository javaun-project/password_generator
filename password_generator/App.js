import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';
import {Button} from 'react-native-elements';

export default function App() {

  const [type, setType] = React.useState("numbers");
  const [pwdLength, setPwdLength] = React.useState(10);
  const [output, setOutput] = React.useState(0)

  const generate = (type) => { 
    //check password length
    if(pwdLength>30){
        alert("Please choose a shorter password length.")
    }else{
        if (type == "numbers"){
            var blankArray = [];
            var x = 0;
            //generate a random number and push to array
            while(x<pwdLength){
              blankArray.push(Math.floor((Math.random()*9) + 1));
              x++
            }
            //turn the values in the array to a string and remove commas. Then show the output to the user.
            setOutput(blankArray.join("")) 
        } 

        if(type == "letters"){
              var result = '';
              //string of possible values
              var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
              var charactersLength = characters.length;

              for ( var i = 0; i < pwdLength; i++ ) {
                result += characters.charAt(Math.random() * charactersLength);
              }
              //output result
              setOutput(result)
        }

        if(type == "alpha"){
              var result = '';
              var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
              var charactersLength = characters.length;

              for ( var i = 0; i < pwdLength; i++ ) {
                result += characters.charAt(Math.random() * charactersLength);
              }

              setOutput(result)
        }
    }
  }



  return (
    <View style={styles.container}>

      <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>Password Generator</Text>

      <View style={{paddingTop: 20}}>
          <TextInput
            placeholder='Password Length'
            onChangeText={value => setPwdLength(value)}
            keyboardType='number-pad'
            style={{backgroundColor: 'white', textAlign: 'center', padding: 10}}
          />
          <Button
            title='Numbers'
            style={styles.btn}
            onPress={() => {generate("numbers")}}
          />
          <Button
            title="Letters" 
            style={styles.btn}
            onPress={() => {generate("letters")}}
          />
          <Button
            title="Alphanumeric" 
            style={styles.btn}
            onPress={() => {generate("alpha")}}
          />
      </View>

      <Text style={styles.results}>{output}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'orange',
    padding: 20,
  },
  
  btn: {
    margin: 5
  },

  results: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    padding: 20
  }
});
