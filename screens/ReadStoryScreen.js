import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component {
    render(){
        return(
            <View>
                <Text style={styles.text}>
                    ReadStory
                </Text>
            </View>
        )
            }
}
const styles =StyleSheet.create({
    text:{
        fontSize: 15,
        fontWeight: 'bold',
         marginTop: 10,
    }
})