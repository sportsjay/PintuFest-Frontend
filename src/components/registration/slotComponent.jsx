import React from "react";
import {
  Container,
  Divider,
  Typography,
  makeStyles,
  Radio,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "60vw",
    padding: theme.spacing(1),
    backgroundColor: 'lightblue',
    boxShadow: "2px 2px 5px grey",
    //margin:10,
  },
  details: {
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: 14,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  dividerHorizontal: {
    [theme.breakpoints.down("xs")]: {},
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  dividerVertical: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      marginRight: 10,
      marginLeft: 10,
    },
  },
  checkbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function TimeSlot(props) {
  const classes = useStyles();

  const id = props.id || 0; //timeslot id
  const name = props.name || "game 1"; //game name
  const room = props.room || 1; //room number
  const timeslot = props.timeslot || "00:00 - 00:00"; //game timeslot
  const numSlot = props.numSlot || 1; //game room number of slots left
  const numParticipants = props.numParticipants || 0; //current game slots participants

  return (
    <div style={{width: 120, height: 50, backgroundColor: 'white', display:'flex', color:'black',  justifyContent:'center',
        alignItems: 'center', borderRadius: 5, margin:10, }}>
        <div style={{width: 70,display:'flex', flexDirection:'row', justifyContent:'left', paddingLeft:5,
        alignItems: 'center',  color:"#941616"/*borderRightWidth: 2,borderRightStyle:'solid', borderRightColor: 'black'*/}}>
            <Radio {...props} color="default" style={{padding:0}}  size="small"/>
            <Typography variant="h6" style={{ textAlign: "center",fontSize: 16, marginRight:5, marginLeft:5 }}>
            {timeslot.substring(0, 5)}
            </Typography>
        </div>
        <div style={{width:50,  display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            flexDirection:'column',
            backgroundColor: '#941616',
            color: 'white',
            height: '100%', borderBottomRightRadius: 5, borderTopRightRadius:5}}>
                <Typography  style={{ textAlign: "center",  fontSize: 16}}>
                {numSlot - numParticipants}
            </Typography>
            <Typography style={{ textAlign: "center", fontSize: 8 }}>
            slots left
            </Typography>
        </div>
    </div>
    
  );
}
