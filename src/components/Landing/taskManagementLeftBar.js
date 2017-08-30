import React from 'react';

import { Segment, Button, Menu, Image, Icon, Header, Card, Transition, List } from 'semantic-ui-react';


export default class TaskManagementLeftBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList : [],
    };
  }

  componentWillMount(){
    let taskList = [];
    
    for (let i = 0; i < 3; i++){
      let currCard = (
        <Card key = {i}>
          <Card.Content>
            <Image floated='right' size='mini' src='/assets/img/user/user1.jpg' />
            <Card.Header>
              Steve Sanders
            </Card.Header>
            <Card.Meta>
              Friends of Elliot
            </Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>Approve</Button>
              <Button basic color='red'>Decline</Button>
            </div>
          </Card.Content>
        </Card>
      );
      
      taskList.push(currCard);
    }
    
    this.setState({taskList: taskList});

  }


  render() {
    return(
      <div className = "TaskManagementLeftBar"> 
          {this.state.taskList}
      </div>
    );
  }

}