import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Register from './components/User/Register';
import Search from './components/Search';
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
      const searchResponse = await fetch('http://localhost:8000', {
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
            <Route exact path='/'/>
            <Route exact path='/register' render= {(props) => <Register {...props} register={this.register}/>}/>
            <Route component={My404} />
          </Switch>
        </BrowserRouter>
      </main>
    )
  }
}

export default App;
