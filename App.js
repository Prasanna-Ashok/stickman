import React from 'react';
import { TouchableOpacity,StyleSheet, Text, View, Dimensions, Animated, Image, Easing, Button } from 'react-native';
import DoubleClick from 'react-native-double-click';
import Saw from './public/components/Saw';
// import SingleClicker from './public/components/SingleClicker';
// import DoubleClicker from './public/components/DoubleClicker';

const pos=Dimensions.get('window').height-350;
const sawPos= 400;

// let r = setInterval(()=>{
//   return Math.floor(Math.random()*2)+1;
// },2000);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      movePlayer: new Animated.Value(100),
      playerPos:'bottom',
      moveSaw: new Animated.Value(550),
      sawStart: 0,
      sawSpeed: 2000,
      points: 0,
      opacitySaw: 1,
      gameEndOpacity:0,
      rand:0,
      gameEnd: false
    }; 
    this.jump=this.jump.bind(this);
    this.gameOver=this.gameOver.bind(this);
    this.animateSaw=this.animateSaw.bind(this);
  }

  jump(){
    Animated.sequence([
    Animated.spring(
      this.state.movePlayer,
      {
        toValue:pos,
        speed:80
      }),
      Animated.spring(
        this.state.movePlayer,
        {
          toValue:100,
          speed:100
        })
    
    ]).start();
  }
  componentDidMount(){
    this.animateSaw();
  }
  animateSaw(){
    let r=Math.floor(Math.random()*2)+1;
    this.setState({...this.state,opacitySaw:1, rand: r});
    console.log(this.state.rand);
    //sawPos-=20;
    this.state.sawSpeed-=10;
    //console.log(sawPos);
    this.state.moveSaw.setValue(550);
    var windowW= Dimensions.get('window').width; //598
    var windowH=Dimensions.get('window').height;//360
    this.setState({sawStart:windowW}); 
    win=windowH-260;
    Animated.timing(this.state.moveSaw,
      {
        toValue: 0,
        easing: Easing.linear(),
        duration: this.state.sawSpeed
     }).start(event=>{
      this.setState({opacitySaw:0});
      if(this.state.movePlayer._value != win && this.state.gameEnd==false){
            this.setState({points: ++this.state.points });
            this.animateSaw();
      }else{
        this.setState({gameEnd:true});
        this.gameOver();
      }
    });
  }

  gameOver(){
    alert('Game over. Try again');
  }

  render() {
  
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#aca0a0',
        top:300,
        width:1000,
        height:60
      },
      image:{   
        width:100,
        height:100,
        position:'absolute',
        top:100,
        left:0,
        zIndex:1,
        resizeMode:'stretch',
        transform:[{translateY:this.state.movePlayer}]
      },
      points:{
        width:30,
        height:30,
        backgroundColor:'#000',
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center'
      },
      blood:{
        width:40,
        height:60,
        left:20,
        top:140,
        zIndex:1,
        opacity: this.state.gameEndOpacity
      }
    });
    return (
      <View>
        {this.state.rand != 1 ?
        <TouchableOpacity style={{flex:1}} activeOpacity={1} onPress={this.jump}>
        <View style={styles.container}>
        <Text style={{color:'black'}}>SingleClick</Text>
        </View>
        <View style={styles.points}>
          <Text style={{ fontSize:20, color:'white'}}>{this.state.points}</Text>
        </View>
        <Animated.Image source={require('./public/img/running.jpg')} 
        style={styles.image}></Animated.Image>
        <View >
          <Image source={require('./public/img/blood.png')} style={styles.blood}/>
        </View>
        <Saw sawImg={require('./public/img/Circular_saw_blade.png')}
          moveSaw={this.state.moveSaw}
          opacity={this.state.opacitySaw}/>
        </TouchableOpacity>
        :
        <DoubleClick style={{flex:1}} activeOpacity={1} onClick={this.jump}>
        <View style={styles.container}>
        <Text style={{color:'black'}}>DoubleClick</Text>
        </View>
        <View style={styles.points}>
          <Text style={{ fontSize:20, color:'white'}}>{this.state.points}</Text>
        </View>
        <Animated.Image source={require('./public/img/running.jpg')} 
        style={styles.image}></Animated.Image>
        <View >
          <Image source={require('./public/img/blood.png')} style={styles.blood}/>
        </View>
        <Saw sawImg={require('./public/img/Circular_saw_blade.png')}
          moveSaw={this.state.moveSaw}
          opacity={this.state.opacitySaw}/>
        </DoubleClick>
      }
     </View>
    );
  }
}






//     this.state={
   
//       movePlayer: new Animated.Value(100),
//       playerPos:'bottom',
//       moveSaw: new Animated.Value(550),
//       moveSew: new Animated.Value(400),
//       sawStart: 0,
//       sawSpeed: 2000,
//       points: 0,
//       opacitySaw: 1,
//       gameEndOpacity:0,
//       gameEnd: false
//     }; 
//     this.jump=this.jump.bind(this);
//     this.gameOver=this.gameOver.bind(this);
//     this.animateSaw=this.animateSaw.bind(this);
   
//   }

  

//   jump(){
//     Animated.sequence([
//     Animated.spring(
//       this.state.movePlayer,
//       {
//         toValue:pos,
//         speed:80
//       }),
//       Animated.spring(
//         this.state.movePlayer,
//         {
//           toValue:100,
//           speed:100
//         })
    
//     ]).start();
//   }
//   componentDidMount(){
//     this.animateSaw();
//   }
//   animateSaw(){
//     this.setState({opacitySaw:1});
//     //sawPos-=20;
//     this.state.sawSpeed-=10;
//     //console.log(sawPos);
//     this.state.moveSaw.setValue(550);

//     var windowW= Dimensions.get('window').width; //598
//     var windowH=Dimensions.get('window').height;//360
//     this.setState({sawStart:windowW}); 
//     win=windowH-260;

//     Animated.timing(this.state.moveSaw,
//       {
//         toValue: 0,
//         easing: Easing.linear(),
//         duration: this.state.sawSpeed,
//      }).start(event=>{
//       this.setState({opacitySaw:0});
//       if(this.state.movePlayer._value != win && this.state.gameEnd==false){
//             this.setState({points: ++this.state.points });
//             this.animateSaw();
//       }else{
//         this.setState({gameEnd:true});
//         this.gameOver();
//       }
//     });
//   }

//   gameOver(){
//     alert('Game over. Try again');
//   }

//   render() {
//     const styles = StyleSheet.create({
//       container: {
//         backgroundColor: '#000',
//         top:300,
//         width:1000,
//         height:60
//       },
//       image:{   
//         width:100,
//         height:100,
//         position:'absolute',
//         top:100,
//         left:0,
//         zIndex:1,
//         resizeMode:'stretch',
//         transform:[{translateY:this.state.movePlayer}]
//       },
//       points:{
//         width:30,
//         height:30,
//         backgroundColor:'#000',
//         borderRadius: 50,
//         alignItems:'center',
//         justifyContent:'center'
//       },
//       blood:{
//         width:40,
//         height:60,
//         left:20,
//         top:140,
//         zIndex:1,
//         opacity: this.state.gameEndOpacity
//       }
//     });

//     return (
//       <TouchableOpacity style={{flex:1}} activeOpacity={1} onPress={this.jump}>
//       <View style={styles.container}>
//       </View>
//       <View style={styles.points}>
//         <Text style={{ fontSize:20, color:'white'}}>{this.state.points}</Text>
//       </View>
//       <Animated.Image source={require('./public/img/running.jpg')} 
//       style={styles.image}></Animated.Image>
//       <View >
//         <Image source={require('./public/img/blood.png')} style={styles.blood}/>
//       </View>
//       <Saw sawImg={require('./public/img/Circular_saw_blade.png')}
//         moveSaw={this.state.moveSaw}
//         opacity={this.state.opacitySaw}/>
//       </TouchableOpacity>
//     );
//   }
// }


