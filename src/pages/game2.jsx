import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const images = [
  {
    url: '../images/game1_1.jpg',
    title: 'Escape Room 1',
    width: '33.3%',
  },
  {
    url: '../images/game1_2.jpg',
    title: 'Escape Room 2',
    width: '33.3%',
  },
  {
    url: '../images/game1_3.jpg',
    title: 'Escape Room 3',
    width: '33.3%',
  },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  root: {
    display: 'flex',
    backgroundColor:'black',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    flexGrow: 1,
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      // '& $imageTitle': {
      //   border: '4px solid currentColor',
      // },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function Game2() {
  const classes = useStyles();

  return (
    <div>
      <header 
        style = {{
          backgroundImage:"url(./Images-2/image2-1.jpg)",
          textAlign:"center",
          color:"#fff",
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"scroll",
          backgroundPosition:"center center",
          backgroundSize:"cover",
          height:"50vh",
        }}
      >
        <div style = {{
          color:"white",
          textAlign:"center"
          }}
        >
          <Typography variant="h2">(Game 2 Title)</Typography>
          <h2>(Game 2 Subtitle)</h2>
        </div>
      </header>
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <h2 style = {{
                color:"red"
              }}
              >Date: XX January 2021</h2>
              <p style = {{
                color:"grey"
              }}
              >(Date subtitle)</p>
            </Grid>
            <Grid item xs={6}>
              <img
                src = "./Images-2/image2-2.jpg"
                style = {{
                  width:"500px",
                  height:"auto"
                }}
              ></img>
              </Grid>
          </Grid>
        </div>
        <div className={classes.root}>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <img 
                src = "./Images-2/image2-3.jpg"
                style = {{
                  width:"500px",
                  height:"auto"
                }}
              ></img>
            </Grid>
            <Grid item xs={6}>
              <h2 style = {{
                color:"red"
              }}
              >Time: 120 minutes</h2>
              <p style = {{
                color:"grey"
              }}
              >Follow through each legend’s compelling storyline as your team embarks on a journey to unravel all the mysteries within 120 minutes!</p>
            </Grid>
          </Grid>
          
        </div>
      
      <div className={classes.root}>
        <h2 style = {{
          color:"red"
        }}
        >No. of Participants: 5-8 people</h2>
        <p style = {{
          color:"grey"
        }}
        >Location: NTU</p>
      </div>
      <div className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <img
              src = "./Images-2/image2-5.jpg"
            ></img>
          </Grid>
          <Grid item xs={4}>
            <img
              src = "./Images-2/image2-6.jpg"
            ></img>
          </Grid>
          <Grid item xs={4}>
            <img
              src = "./Images-2/image2-7.jpg"
            ></img>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}