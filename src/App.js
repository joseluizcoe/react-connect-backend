import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

    constructor(){
        super()
        this.state = {
            countries: []
        }
        this.updateData = this.updateData.bind(this);
        this.interval = null;
        this.stop = this.stop.bind(this);
    }

    updateData() {
      axios.get("http://localhost:3001/")
      .then(response => {
          this.setState(
            { 
              countries: response.data
            }
          );
      });
    }

    componentWillMount(){
      console.log('componentWillMount')
      this.updateData();
    }

    componentDidMount() {
      console.log('componentDidMount')
      this.interval = setInterval( () => {
        this.updateData();
      }, 1000);
    }

    componentDidUpdate(){
      console.log('componentDidUpdate');
//      setTimeout(this.updateData, 5000);
    }

    componentWillUpdate() {
      console.log('componentWillUpdate()');
    }

    stop() {
      clearInterval(this.interval);
    }
    
    render() {
      console.log('render()');
      return (
            <div className="App">
              <button onClick={this.stop}>Parar.</button>
                {
                  this.state.countries
                    .map(
                      (item, index) => <h1 key={index}>{item.name.common}</h1>)
                }
            </div>
        );
    }
}

export default App;