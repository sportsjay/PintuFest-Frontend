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
    alignItems:'center',
    justifyContent: "space-around",
    backgroundColor: '#111111',
    color: 'white',
    width: '100vw',
    padding: 20,
    minHeight: 120,
    

  },
}));

export default class TopAppBar extends React.Component {

  // hover state
  state = {
      hover: [false,false,false,false],
      open: [false,false,false,false],
  }

  //extract routes
  routes = this.props.routes;
  position = this.props.position;
  //initialize styles

  onHover = (id) =>{
    let currHover =  [false,false,false,false];
    currHover[id] = !this.state.hover[id]
    this.setState({hover: currHover})
  }
  onPage = (id) =>{
    let currHover =  [false,false,false,false];
    currHover[id] = true
    this.setState({open: currHover})
  }

  render(){
    return (
            <AppBar position="fixed" style={{marginTop: 20}} >
            <Toolbar style={styles.root} >
                <div style={{height: 50, display:'flex', alignItems:'center'}}>
                    <h1 style={{margin:0, color: '#941616', fontFamily: 'EastSea', fontSize: 50}}>GTD UNSOLVED </h1>
                </div>
                <div style={{display: 'flex',flexDirection: 'row'}}>
                {this.routes.map((route) => (
                <Link key={route.id} to={route.path} style={{textDecoration: 'none',}}>
                    <Button variant="dark" color="white" 
                        style={{backgroundColor: 'none', color: this.state.open[route.id] ? 'grey' : 'white', height: 50,
                         fontFamily: 'XiaoWei'}}
                        onMouseEnter={()=>{ this.onHover(route.id)}}
                        onMouseLeave={()=>{ this.onHover(route.id)}}
                        onClick={()=>{this.onPage(route.id)}}
                    >
                        { this.state.hover[route.id] || this.state.open[route.id] ? route.expand : route.name }
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
        height: 100,
        fontFamily: 'XiaoWei'
      },

}