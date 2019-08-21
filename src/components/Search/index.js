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

class Search extends Component {
    constructor(){
        super();

        this.state = {
            query: '',
            diet: '',
            results: []
        }

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log('submitted!');
        const data = await fetch(`https://api.spoonacular.com/complexSearch?query=${this.state.query}&diet=${this.state.diet}&apiKey=21fb23e9d7b94e2c9644b71bbcf3f5cf`);
        const jsonData = await data.json();
        console.log(jsonData.results);
        this.setState({
            results: jsonData.results
        });
    }

    render() {
        return (
            <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}}>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' textAlign='center'>
                        Search
                    </Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            <Form.input fluid icon='mail' iconPosition='left' placeholder='Search' type='text' name='query' onChange={this.handleChange}/>
                            
                            <Dropdown fluid defaultValue='hide' selection text= 'diet' options={dietOptions} />
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
              

            // <div class='Search'>
            //     <form onSubmit={(e) => this.handleSubmit(e)}>
            //         <input type='text' value={this.state.query} onChange={this.handleChange} name='query'>Search</input>
            //         <select name='diet' value={this.state.diet}>
            //             <option value="vegetarian">Vegetarian</option>
            //         </select>
            //     </form>
            // </div>
        )
    }

}

export default Search;

// class Search extends Component {
//   state = {
//     search: '',
//     results: []
//   }
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }
//   submitForm = async (e) => {
//     e.preventDefault();
//     console.log('hi');
//     const data = await fetch(`https://api.spoonacular.com/recipes/search?diet=${this.state.search}&apiKey=21fb23e9d7b94e2c9644b71bbcf3f5cf`);
//     const jsonData = await data.json()
//     console.log(jsonData.results)
//     this.setState({
//       results: jsonData.results
//     })
//   }
//   render() {
//       return (
//           <div className="Search">
//               <form onSubmit={(e) => this.submitForm(e)}>
//                   <input type='text' value={this.state.search} onChange={this.handleChange} name='search'/>
//                   <button type='submit'>Search</button>
//               </form>
//               {
//                   this.state.results.map((r, i) =>
//                     <div key={i} >{r.title}</div>
//                   )
//               }
//           </div>
//       )
//   }
// }
// export default Search;