import React from 'react';
import { Container } from '@material-ui/core';
import {Animate,AnimateGroup} from 'react-simple-animate';

const text = ['C','O','M','I','N','G',' ','S','O','O','N','.','.','.']
const dot = ['.','.','.']

const qna = [
    {
        q: 'What is GTD Unsolved?',
        a: 'haahahahha'
    },
    {
        q: 'Pricing & Promotion',
        a: 'haahahahha'
    },
    {
        q: 'When What Where',
        a: 'haahahahha'
    },
]
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
        <h1 style={{fontSize: 50, color: 'white', marginBottom:20}}>FAQs</h1>

        {qna.map((faq, index)=>{
            return(
                <div style={{marginBottom: 20}}>
                    <h1 style={{fontSize: 30, color: '#941616', margin:0}}>{index+1}. {faq.q} </h1>
                    <h1 style={{fontSize: 14, color: 'white', margin: 0, fontFamily: 'XiaoWei'}}>{faq.a}</h1>
                </div>
            )
        })}
       
      </div>
    );
  }
}

const styles = {
  root: {
    display: "flex",
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#111111',
    color: 'white',
    width: '100vw',
    height: '80vh',
    padding: 50,
    fontFamily: 'EastSea'
  }
}