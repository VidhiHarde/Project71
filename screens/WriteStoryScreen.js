import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import db from '../config';
export default class WriteStoryScreen extends React.Component {
    constructor(){
        super();
        this.state={
            StoryTitle:'',
            Author:'',
            Story:''
        }

    }
    submitStory=() => {
        this.setState({
            StoryTitle:'',
            Author:'',
            Story:''
        })
    }
    render(){
return(
    <View>
    <Text style={styles.heading}>WriteStory</Text>
    <TextInput 
    style={styles.inputBox1}
    placeholder="StoryTitle"
    />
   <View>
      <TextInput 
       style={styles.inputBox2}
       placeholder="Author"
       />
     <View>
      
      <TextInput 
      style={styles.inputBox3}
      placeholder="Write Your Story"
      />

      <View>
          <TouchableOpacity style={styles.buttonContainer}
          onPress={this.submitStory}>
          <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
      </View>
      </View>
       </View>
       </View>
)
    }
}
const styles= StyleSheet.create({
    heading:{
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontStyle: 'bold',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    inputBox1:{
        marginTop: 20,
        width: 200,
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
    },
    inputBox2:{
        marginTop: 20,
        width: 250,
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
    },
    inputBox3:{
        marginTop: 20,
        width: 250,
        alignSelf: 'center',
        height: 250,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
    },
    buttonContainer:{
        backgroundColor: 'pink',
        marginTop: 5,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
    },
    buttonText:{
        fontSize: 15,
       fontWeight: 'bold',
        marginTop: 10,
       
        }
})