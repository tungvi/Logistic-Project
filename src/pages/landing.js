import React from 'react';

import HeaderTypeA from "../components/Header/headerTypeA";
import LandingMap from "../components/Map/landingMap";
import TaskList from "../components/Landing/taskList";
import TaskManagementLeftBar from "../components/Landing/taskManagementLeftBar";

import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

require('velocity-animate');
require('velocity-animate/velocity.ui');

var VelocityTransitionGroup= require('velocity-react').VelocityTransitionGroup;

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landingBody : [],

      user: {
        name: "Vi Tung",
        type: "Admin"
      },
      openLeftSidebar: false,
      page: "dashboard"
    };
  }

  setPage(page){
    this.setState({page: page});
  }

  switchLeftSidebar(){
    if (this.state.openLeftSidebar)this.setState({openLeftSidebar: false});
    else this.setState({openLeftSidebar:true});
  }

  componentWillMount(){}

  render() {

    let sidebarBoxSegmentStyle = {
      boxShadow: "none",
      border: "0px",
      marginTop: "1px",
    };

    return (
      <div> 

        {/* 
         *  This is the Left Sidebar of the landing page. 
        */}   
        <Sidebar.Pushable as={Segment} style = {sidebarBoxSegmentStyle}>
          <Sidebar as={Menu} animation='slide along' width='thin' visible={this.state.openLeftSidebar} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic style = {{padding: "0px"}}>
              {/**
              *  This is the header of the landing page.
              *  We gonna have more header type later 
              */ }  
              <HeaderTypeA 
                switchLeftSidebar={this.switchLeftSidebar.bind(this)} 
                page = {this.state.page}
                setPage = {this.setPage.bind(this)}
              /> 

              {/**
               * This is the map view
               */}
              <VelocityTransitionGroup enter={{animation: "transition.slideLeftBigIn", delay: 600, duration: 500}} leave={{animation: "transition.slideRightBigOut", duration: 500 }}>
				      {(this.state.page == "dashboard") ? 
                <div style ={{height:"calc(100vh - 70px)"}}>  
                  <LandingMap/>
                  <TaskManagementLeftBar/>
                </div>
                :
                ""
              }
              </VelocityTransitionGroup>

              {/**
               * This is the list view
               */}
               <VelocityTransitionGroup enter={{animation: "transition.slideLeftBigIn", delay: 600, duration: 500}} leave={{animation: "transition.slideRightBigOut", duration: 500 }}>
                {(this.state.page == "list") ? 
                  <TaskList/>
                  :
                  ""
                }
              </VelocityTransitionGroup>

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
