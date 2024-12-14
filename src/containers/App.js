import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';



const App = () => {
  const [dogs, setDogs] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(response => response.json())
      .then(data => setDogs(data.message));
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  const filteredDogs = dogs.filter(dog => {
    const breed = dog.split('/')[4];
    return breed.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !dogs.length ?
    <h1>Loading</h1> :
    (
      <div className="tc">
        <h1 className='f1'>DogFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList dogs={filteredDogs} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
}

export default App;
