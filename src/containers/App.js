import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(response => response.json())
      .then(data => this.setState({ dogs: data.message }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { dogs, searchfield } = this.state;
    const filteredDogs = dogs.filter(dog => {
      const breed = dog.split('/')[4];
      return breed.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !dogs.length ?
      <h1>Loading</h1> :
      (
        <div className="tc">
          <h1 className='f1'>DogFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList dogs={filteredDogs} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default App;
