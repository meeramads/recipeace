import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const dietOptions = [
    {
        key: 'vegetarian',
        text: 'vegetarian',
        value: 'vegetarian'
    },
    {
        key: 'lacto-vegetarian',
        text: 'lacto-vegetarian',
        value: 'lacto-vegetarian'
    },
    {
        key: 'ovo-vegetarian',
        text: 'ovo-vegetarian',
        value: 'ovo-vegetarian'
    },
    {
        key: 'vegan',
        text: 'vegan',
        value: 'vegan'
    },
    {
        key: 'pescetarian',
        text: 'pescatarian',
        value: 'pescatarian'
    },
    {
        key: 'gluten-free',
        text: 'gluten-free',
        value: 'gluten-free'
    },
    {
        key: 'paleo',
        text: 'paleo',
        value: 'paleo'
    },
    {
        key: 'primal',
        text: 'primal',
        value: 'primal'
    },
    {
        key: 'whole30',
        text: 'whole30',
        value: 'whole30'
    },
]

class Register extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            email: '',
            image: {},
            diet: ''
        }

    }

    handleChange = (e) => {
        if(e.target.name !== 'image'){
            this.setState({[e.target.name]: e.target.value});
        } else {
            console.log(e.target.files[0]);
            this.setState({image: e.target.files[0]});
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const data = new FormData();
        data.append('file', this.state.image);
        data.append('username', this.state.username);
        data.append('password', this.state.password);
        data.append('email', this.state.email);
        data.append('diet', this.state.diet);

        console.log(data.entries(), ' this is data');
        for (let pair of data.entries()) {
            console.log(pair[0] , ', ', pair[1]);
        }

        const registerCall = this.props.register(data);

        registerCall.then((data) => {
            console.log(data)
            if (data.status.message === "Success"){
                this.props.history.push('/profile');
            } else {
                console.log(data, ' this should have an error message? How could you display that on the screen');
            }
        })
    
    }

    render(){
        return (
            <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}} >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' textAlign='center'>
                        Register
                    </Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            Username:
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='username' type='text' name='username' onChange={this.handleChange}/>
                            Email:
                            <Form.Input fluid icon='mail' iconPosition='left' placeholder='email' type='text' name='email' onChange={this.handleChange}/>
                            Password:
                            <Form.Input fluid icon='lock' iconPosition='left' placeholder='password' type='password' name='password' onChange={this.handleChange}/>
                            Image:
                            <Form.Input fluid icon='image' iconPosition='left' type='image' name='image' onChange={this.handleChange}/>
                            Diet: 
                            <Button as='div' labelPosition='left'>
                                <Dropdown fluid defaultValue='hide' selection text= 'diet' options={dietOptions}>
                                </Dropdown>
                            </Button>
                            <Button fluid size='large' type='sumbit'>Register</Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Register