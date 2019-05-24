import React, { Component } from 'react';
import FavouriteSectionContainer from './container/FavouriteSectionContainer';
import CategorySectionContainer from './container/CategorySectionContainer';
import FoodSectionContainer from './container/FoodSectionContainer';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: '',
    };
  }

  componentWillMount(){
    this.props.fetchFoodDetails();
  }

 
  selectDish(e){
    this.props.setSelectedChoice(e.target.value)

    this.setState({
      selectedDish:e.target.value
    })
  }

  render() {
    const { selectedDish } = this.state;
    return (
      <div className="App">
        <div>
          Best Food App
        </div>
        <div>
          <FavouriteSectionContainer/>
        </div>
        <div>
          <input type='text' 
                placeholder='Select for a particular dish or ingredient ' 
                value={selectedDish} 
                className="SearchName"
                onChange={(e)=>this.selectDish(e)}/>
        </div>
        <div>
          <CategorySectionContainer/>
        </div>
        <div>
          <FoodSectionContainer/>
        </div>
      </div>
    );
  }
}

export default App
