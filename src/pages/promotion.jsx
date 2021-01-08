import React from 'react';
import { Container } from '@material-ui/core';
import {Animate,AnimateGroup} from 'react-simple-animate';

const text = ['C','O','M','I','N','G',' ','S','O','O','N','.','.','.']
const dot = ['.','.','.']

const qna = [
    {
        q: 'How it Works?',
        a: [
            ' Send your referral code to your friends so they can register on the Escape Room website',
            'You and your invitees will get a cashback of S$0.5 after your invitees make their payment and the payment is successfully processed',
            'You and your invitees may expect to receive the cashback by end of the third game as we will accumulate the cashback you obtained up to the last game.'
        ]
    },
    {
        q: 'Terms & Conditions',
        a: [
            'Offer is valid from January 11th, 2021 to February 6th, 2021',
            'You may invite anyone to join the Escape room and if your invitee follows the steps below and successfully completes the registration, you are eligible for the GTD Unsolved Referrals Offer.'
            
        ]
    },
    {
        q: 'To qualify for this offer,',
        a: [
            'Receive your personalised referral code when you make your first successful transaction. Your referral code can be found on the confirmation email.',
            'Send your referral code to your invitee. They can be from anywhere!',
            'The invitee will then use your referral code to register on the Escape Room website for the first time.',
            'One registration is valid for one person. so, one is not allowed to register for more than one slot per escape room. There are three escape rooms in total, meaning, you are allowed to book maximum 3 slots (one each).',
            'One escape room is valid for a cashback of S$0.5, meaning, if your invitee registers for three escape rooms, you and your invitee will get a total cashback of S$1.5'
        ]
    },
]
export default class Promotion extends React.Component {
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
         <h1 style={{fontSize: 50, color: 'white', marginBottom:20}}>PROMOTION</h1>

        <h1 style={{fontSize: 22, textAlign:'center', color: 'white', fontFamily: 'XiaoWei'}}>
          GET $0.5 DISCOUNT WHEN YOU USE A REFERRAL CODE! 
        </h1>

        <h1 style={{fontSize: 14, color: 'white', textAlign:'justify', margin: 0, fontFamily: 'XiaoWei'}}>
          It's time for you to refer a friend using your referal code 
          and get a $0.5 cashback for each friend you bring! Plus, your friends will also get a $0.5 discount to their purchases.
        </h1>

        
        {qna.map((faq, index)=>{
            return(
                <div style={{marginBottom: 20}}>
                    <h1 style={{fontSize: 40,  color: '#941616', marginBottom:20}}>{faq.q}</h1>
                    {faq.a.map((ans,index )=>{
                        return(
                            <h1 style={{fontSize: 14, color: 'white',  fontFamily: 'XiaoWei'}}>{index+1 + ". " + ans}</h1>
                        )
                    })}
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
    backgroundColor: '#000',
    color: 'white',
   // height: '80vh',
    padding: 50,
    fontFamily: 'EastSea'
  }
}