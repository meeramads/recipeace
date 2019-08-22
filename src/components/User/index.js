import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Card} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Profile extends Component {
   constructor(){
       super();

       this.state = {
           id: 1,
           email: '',
           image: '',
           username: ''
       }
   }

   render(){
       console.log(this.state, this.props.userInfo, 'in profile< props');

       return(
           <Grid columns={2} padded style={{ height: '100vh'}}>
               <Grid.Row>
                   <Grid.Column width={4}>
                       {
                           this.props.userInfo.loading ?
                           'Loading......' :
                           <Card>
                               header={this.props.username}
                               meta={this.props.email}
                           </Card>
                       }
                   </Grid.Column>
               </Grid.Row>
           </Grid>
       )
   }
}

export default Profile;