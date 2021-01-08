import React from 'react';
import { Container } from '@material-ui/core';
import {Animate,AnimateGroup} from 'react-simple-animate';
import { Transform } from '@material-ui/icons';

const text = ['C','O','M','I','N','G',' ','S','O','O','N','.','.','.']
const dot = ['.','.','.']
export default class ComingSoon extends React.Component {
  state={
    play: false,
    start: 0,
  }
  componentDidMount(){
    this.setState({play:true})
  }
  render(){
    return (
      <div style={styles.root}>
        <h1 style={{ color: '#941616', margin:0}}>A Death Is Announced </h1>
        <div   style={{flexDirection: 'row', display:'flex', justifyContent: "center", alignItems: 'center',}}>
        <h1 style={{color: 'white', margin: 0,textAlign:'center'}}>Coming Soon</h1>

        <AnimateGroup
          play={this.state.play}
          onComplete={()=>{this.setState({play:false, start: 1},setInterval(this.setState({play:true}, 1000)))}}
          complete={{ opacity: 0,}}
        >
          {dot.map((item, index) => {
            return (
              <Animate
                key={item}
                sequenceIndex={index}
                duration={0.5} 
                start={{ opacity: this.state.start, }}
                end={{ opacity: 1-this.state.start, }}
              >
                <h3 style={{margin:0}}>{item}</h3>
              </Animate>
            )
          })}
        </AnimateGroup>
        </div>
      </div>
    );
  }
}

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#111111',
    color: 'white',
    width: '100vw',
    height: '80vh',
    fontFamily: 'EastSea',
    fontSize: 'calc(12px + 3vw)'
  }
}
