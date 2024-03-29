import React from "react";
import { Typography, Radio, Divider } from "@material-ui/core";

export default function TimeSlot(props) {
  const room = props.room || 0; //game room
  const timeslot = props.timeslot || "00:00 - 00:00"; //game timeslot
  const numSlot = props.numSlot || 1; //game room number of slots left
  const numParticipants = props.numParticipants || 0; //current game slots participants

  return (
    <div
      style={{
        width: 150,
        height: 45,
        backgroundColor: numSlot <= numParticipants ? "grey" : "white",
        display: "flex",
        color: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        margin: 10,
      }}
    >
      <div
        style={{
          width: 105,
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          paddingLeft: 10,
          alignItems: "center",
          color: "#941616",
        }}
      >
        <Radio
          {...props}
          color="default"
          style={{ padding: 0, width: 15 }}
          size="small"
          disabled={numSlot <= numParticipants}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              textAlign: "center",
              fontSize: 8,
              marginRight: 5,
              marginLeft: 5,
              fontFamily: "XiaoWei",
            }}
          >
            Group
          </Typography>
          <Typography
            style={{
              textAlign: "center",
              fontSize: 16,
              marginRight: 5,
              marginLeft: 5,
              fontFamily: "XiaoWei",
            }}
          >
            {room}
          </Typography>
        </div>
        <Divider
          orientation="vertical"
          style={{ backgroundColor: "#941616", width: 0.5, height: 45 }}
        />
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            fontSize: 16,
            marginRight: 5,
            marginLeft: 5,
            fontFamily: "XiaoWei",
          }}
        >
          {timeslot.substring(0, 5)}
        </Typography>
      </div>

      <div
        style={{
          width: 45,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#941616",
          color: "white",
          height: "100%",
          borderBottomRightRadius: 5,
          borderTopRightRadius: 5,
        }}
      >
        <Typography
          style={{ textAlign: "center", fontSize: 16, fontFamily: "XiaoWei" }}
        >
          {numSlot - numParticipants}
        </Typography>
        <Typography
          style={{ textAlign: "center", fontSize: 8, fontFamily: "XiaoWei" }}
        >
          slots left
        </Typography>
      </div>
    </div>
  );
}
