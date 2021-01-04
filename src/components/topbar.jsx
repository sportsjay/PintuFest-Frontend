import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Container,
  Toolbar,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-around",
    backgroundColor: '#111111',
    color: 'white',
    width: '100vw',
    padding: 0,
    height: 80

  },
}));

export default class TopAppBar extends React.Component {

  // hover state
  state = {
      hover: [false,false,false,false]
  }

  //extract routes
  routes = this.props.routes;
  position = this.props.position;
  //initialize styles

  onHover = (id) =>{
    let currHover = this.state.hover;
    currHover[id] = !currHover[id]
    this.setState({hover: currHover})
  }

  render(){
    return (
            <AppBar position="fixed" style={{marginTop: 20}} >
            <Toolbar style={styles.root} >
                <div style={{height: 50, display:'flex', alignItems:'center'}}>
                    <h1 style={{margin:0, color: 'maroon'}}>GTD UNSOLVED</h1>
                </div>
                <div style={{display: 'flex',flexDirection: 'row'}}>
                {this.routes.map((route) => (
                <Link key={route.id} to={route.path}>
                    <Button variant="dark" color="white" 
                        style={{backgroundColor: 'none', color: 'white', textDecoration: 'none'}}
                        onMouseEnter={()=>{ this.onHover(route.id)}}
                        onMouseLeave={()=>{ this.onHover(route.id)}}
                    >
                        {this.state.hover[route.id] ? route.expand : route.name }
                    </Button>
                </Link>
                ))}
                </div>
            </Toolbar>
            </AppBar>
    );
  }
}

const styles = {
    navbar: {
        backgroundColor: '#111111',
        color: 'white',
        width: '100vw'
    },
    root: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-around",
        backgroundColor: '#111111',
        color: 'white',
        width: '100vw',
        padding: 0,
        height: 80
    
      },

}