import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            email: '',
            image: {}
        }
    }
}

export default Register