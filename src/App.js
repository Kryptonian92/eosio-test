import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      items: [],
      isLoaded: false,
      toggle: false,
    }
  }
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json =>{
          this.setState({
            isLoaded: true,
            items: json,
          })
        });
    }
  
  render(){ 
      
      return(
          <Toggle>
            <h1>Additional information</h1>
          </Toggle>
          
        
        );
    }

    apiCall(){
      this.toggle=true;

    }


}

export default App;
