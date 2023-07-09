import React, { Component } from 'react'
import axios from 'axios';

import './App.css';

export class App extends Component {
    state = {advice: ''};

    componentDidMount() {
        this.fetchAdvice();
    };

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const {advice} = response.data.slip;

                this.setState({advice});
            }).catch((error) => {
                console.log(error);
            });
    }
  render() {
    const {advice} = this.state;

    return (
      <div className='hero'>
        <div className='card' >
            <h2 className='Heading'>{advice}</h2>
            <button className='button' onClick={this.fetchAdvice}>
                <span>Give Me Advice!</span>
            </button>
        </div>
      </div>
    )
  }
}

export default App