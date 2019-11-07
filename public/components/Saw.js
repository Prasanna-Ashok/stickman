import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    Animated,
    Image
} from 'react-native';

export default class Saw extends Component{
    render(){
        return(
            <Animated.Image source={this.props.sawImg}
            style={{
            flex:1,
            height:50,
            width:50,
            zIndex:1,
            top:250,
            position:'absolute',
            resizeMode:'stretch',
            opacity:this.props.opacity,
            //right: this.props.sawPos,
            transform:[{
                translateX: this.props.moveSaw
            }]   
            }}></Animated.Image>
        );
    }
}