import React from "react";

const qnaRefCode = [
  {
    q: "How it Works?",
    a: [
      "Send your referral code to your friends so they can register on the Escape Room website",
      "You and your invitees will get a cashback of S$0.5 after your invitees make their payment and the payment is successfully processed",
      "You and your invitees may expect to receive the cashback by end of the third game as we will accumulate the cashback you obtained up to the last game.",
    ],
  },
  {
    q: "To qualify for this offer,",
    a: [
      "Receive your personalised referral code when you make your first successful transaction. Your referral code can be found on the confirmation email.",
      "Send your referral code to your invitee. They can be from anywhere!",
      "The invitee will then use your referral code to register on the Escape Room website for the first time.",
      "For the invitees, the discount will be applied directly once you've entered the correct referral code.",
      "You will claim your referral bonus of $0.5 per ticket after 6th February 2021 from GTD XXIII BFM team",
    ],
  },
  {
    q: "Terms & Conditions",
    a: [
      "Offer is valid from January 11th, 2021 to February 6th, 2021",
      "You may invite anyone to join the Escape room and if your invitee follows the steps below and successfully completes the registration, you are eligible for the GTD Unsolved Referrals Offer.",
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
          }}
        >
          INVITE YOUR FRIENDS TO JOIN GTD UNSOLVED AND EARN CASHBACKS!
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
          It's time for you to refer a friend using your unique referal code and
          get a $0.5 cashback for each successful transaction that your friends
          made! (T&Cs applied)
        </h1>

        {qnaRefCode.map((faq, index) => {
          return (
            <div style={{ marginBottom: 20 }}>
              <h1
                style={{
                  fontSize: 40,
                  color: "#941616",
                  marginBottom: 20,
                  textAlign: "center",
                }}
              >
                {faq.q}
              </h1>
              {faq.a.map((ans, index) => {
                return (
                  <h1
                    style={{
                      fontSize: 14,
                      color: "white",
                      fontFamily: "XiaoWei",
                      lineHeight: 1.2,
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
    maxWidth: "90vw",
    padding: 20,
    fontFamily: "EastSea",
    overflow: "hidden",
  },
};
