import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';
import users from './users.json'

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: users,
      searchField: ''
    };
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  render(){
    console.log('render')

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

      return (
        <div className='App'>
          <div>{filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })}</div>
          <input
            className='search-box'
            type='search'
            placeholder='search monsters'
            onChange={onSearchChange}
          />
          <CardList />
        </div>
      );
  }

}

export default App;
