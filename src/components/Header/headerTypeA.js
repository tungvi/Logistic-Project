import React from 'react';
import { Button, Icon, Grid, Popup } from 'semantic-ui-react'

export default class HeaderTypeA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({page: nextProps.page});
  }

  triggerDashboard(){
    this.props.setPage("dashboard");
  }

  triggerList(){
    this.props.setPage("list");
  }

  triggerAgents(){
    this.props.setPage("agents");
  }

  switchLeftSidebar(){
    this.props.switchLeftSidebar();
  }

  render() {
    return (
      <div className= "headerTypeA" >
        <Grid className = "width-100-percent-important">
          <Grid.Row>
            <Grid.Column width={4}>
              <div className = "inline-block">
                <a className = "noTextDecoration" onClick = {this.switchLeftSidebar.bind(this)}>
                  <Icon name='sidebar' size='big' className = "vertical-align-middle headerTypeAIcon " />
                </a>
              </div>
              <div className = "inline-block">
                <a href = "/">
                  <img className = "header-logo" src="/assets/img/logo/logo-with-name.png" />
                </a>
              </div>
            </Grid.Column>
            <Grid.Column width={5} style = {{marginTop:"10px"}}>
              <Button.Group labeled>
                <Button color= {(this.state.page == "dashboard")?"teal": null }  size= "big" icon='map' content='Map' onClick = {this.triggerDashboard.bind(this)} />
                <Button color= {(this.state.page == "list")?"teal":null } size= "big" icon='list layout' content='List' onClick = {this.triggerList.bind(this)} />
                <Button color= {(this.state.page == "agents")?"teal":null } size= "big" icon='drivers license outline' content='Agents' onClick = {this.triggerAgents.bind(this)} />
              </Button.Group>
            </Grid.Column>
            <Grid.Column width={7}>

            </Grid.Column>

          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
