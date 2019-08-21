import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Register from './components/User/Register';
import Search from './components/Search';
import Login from './components/User/Login';
import { async } from 'q';

const My404 = () =>{
  return (
    <div>
      Error: File Not Found
    </div>
    )
}

class App extends Component {
  constructor(){
    super();
    this.state ={
      username: '',
      email: '',
      password: '',
      image: '',
      diet: '',
      query: '',
      loading: true
    }
  }

  logIn = async(loginInfo) => {
    try{
      const loginResponse = await fetch('http://localhost:3000/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await loginResponse.json();

      this.setState(() => {
        return {
          ...parsedResponse.data,
          loading: false
        }
      });

      return parsedResponse;

    } catch(err){
      console.log(err);
    }
  }

  register = async(data) => {
    try {
      const registerResponse = await fetch('http://localhost:3000/register', {
        method: 'POST',
        credentials: 'include',
        body: data,
        headers: {
          'enctype': 'multipart/form-data'
        }
      });

      const parsedResponse = await registerResponse.json();

      console.log(parsedResponse);

      this.setState({
        ...parsedResponse.data,
        loading: false
      });

      return parsedResponse;

    } catch (err){
      console.log(err);
    }
  }

  search = async(data) =>{
    try {
      const searchResponse = await fetch('http://localhost:3000', {
        method: 'POST',
        credentials: 'include',
        body: data,
        headers:{
          'enctype': 'multipart/form-data'
        }
      });

      const parsedResponse = await searchResponse.json();

      console.log(parsedResponse);

      this.setState({
        ...parsedResponse.data,
        loading: false
      })

      return parsedResponse;

    } catch(err){
      console.log(err);
    }
  }

  render(){
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' render= {(props) => <Login {...props} logIn={this.logIn}/>}/>
            <Route exact path='/register' render= {(props) => <Register {...props} register={this.register}/>}/>
            <Route component={My404} />
          </Switch>
        </BrowserRouter>
      </main>
    )
  }
}

export default App;
