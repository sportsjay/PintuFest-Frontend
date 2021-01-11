import React from "react";
import {Typography} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: "#941616",
    color: "#000",
    borderStyle: "solid",
    borderColor: "#941616",
    borderWidth: 2,
    borderRadius: 0,
    fontFamily: "XiaoWei",
    fontWeight: "bold",

    "&:hover": {
      color: "#941616",
      backgroundColor: "#000",
    },
  },
}))(Button);
const qnaRefCode = [
  {
    q: "How it Works?",
    a: [
      "Send your referral code to your friends so they can use it upon their purchase.",
      "You and your invitees will get a cashback of S$0.5, for each transaction they made, after your invitees make their payment and the payment is successfully processed.",
      "You and your invitees may expect to receive the cashback by 7th February as we will accumulate the cashback you obtained up to the last game.",
    ],
  },
  {
    q: "To qualify for this offer,",
    a: [
      "Receive your unique referral code when you make your first successful transaction (One code per registration, regardless of the pax registered). Your referral code can be found on the confirmation email.",
      "Send your referral code to your invitee. Your friends can be from any university in Singapore!",
      "The invitee will then use your referral code to register on the Escape Room website for the first time.",
      "The invitee will then use your referral code for their registration.",
      "Earn a cashback of $0.5 for each entry from your invitees. ",
    ],
  },
  {
    q: "Terms & Conditions",
    a: [
      "Offer is valid from January 11th, 2021 to February 6th, 2021",
      "You may invite anyone to join the Escape room and if your invitee follows the steps above and successfully completes the registration, you are eligible for the GTD Unsolved Referrals Offer.",
      "For more information please contact Timothy at (+65 8147 1852)",
    ],
  },
  
];
export default class Promotion extends React.Component {
  state = {
    play: false,
    start: 0,
  };
  componentDidMount() {
    this.setState({ play: true });
  }

  render() {
    return (
      <div style={styles.root}>
       
        <h1 style={{ fontSize: 50, color: "white", marginBottom: 20 }}>
          PROMOTION
        </h1>
        <h1
          style={{
            fontSize: 22,
            textAlign: "center",
            color: "white",
            fontFamily: "XiaoWei",
            textTransform: "uppercase",
          }}
        >
          Invite your friends to join GTD Unsolved and Earn cashbacks!

        </h1>
        <h1
          style={{
            fontSize: 14,
            color: "white",
            textAlign: "justify",
            margin: 0,
            fontFamily: "XiaoWei",
          }}
        >
          It's time for you to refer a friend using your unique referal code and get a
          $0.5 cashback for each successful transaction that your friends made! (T&Cs applied)
        </h1>

        <a
            rel="noreferrer"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdB2Jeq6VNKzL_S-J3WI6RanVVFvKPLB56SHvUTR94YHcqNmg/viewform?usp=sf_link"
              style={{
                textDecoration: "none",
                padding: 0,
                margin: 0,
                marginBottom: 50,
                marginTop: 50,
              }}
            >
            <ColorButton>BUY TICKET</ColorButton>
          </a>
        {qnaRefCode.map((faq, index) => {
          return (
            <div style={{ marginBottom: 20 }}>
              <p
                style={{
                  fontSize: 40,
                  color: "#941616",
                  marginBottom: 20,
                  textAlign: "center",
                  fontWeight:'none',
                }}
              >
                {faq.q}
              </p>
              {faq.a.map((ans, index) => {
                return (
                  <h1
                    style={{
                      fontSize: 14,
                      color: "white",
                      fontFamily: "XiaoWei",
                    }}
                  >
                    {index + 1 + ". " + ans}
                  </h1>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#000",
    color: "white",
    maxWidth: 800,
    padding: 50,
    fontFamily: "EastSea",
    overflow: "hidden",
  },
};
