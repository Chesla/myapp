import React, { Component } from 'react';
import logo from './logo.svg';
import './category.css';


class CategoryFood extends Component {
  constructor(props) {
    super(props);
    this.state={
        categories:this.props.categories || [],
        selected_category:[]
    }
  }
  componentDidUpdate(prevProps){
      if(JSON.stringify(prevProps.categories) !== JSON.stringify(this.props.categories)){
          this.setState({
            categories:this.props.categories
          })
      }
      
  }

  selectCategory(name){
    let {selected_category} =this.state;
    if(selected_category.indexOf(name)==-1){
        selected_category.push(name);
    }
    this.props.selectedCategories(selected_category);
    this.setState({
        selected_category
    })
  }
  renderCategory(){
    const { categories,selected_category } = this.state;
    return categories.map((c,i)=>{
        let activeCategory = selected_category.indexOf(c.name)===-1?false:true;
        return(
            <div className={`CategoryFoodListItems ${activeCategory?'CategoryActive':''} `}
                  onClick={()=>{this.selectCategory(c.name)}}
                  key={`category-${i}`} >
                <img className="CategoryFoodListImage" src={c.image}/>
                <div className="CategoryFoodListName">{c.name.toUpperCase()} </div>
            </div>
        )
    });
    

    
  }
  render() {
    return (
      <div className="CategoryFoodMainContainer">
        <div className="CategoryFoodHeaderContainer">
            <div className="CategoryFoodTitleContainer">
                <div className="CategoryFoodTitle"> SELECT CATEGORIES </div>
            </div>
            <div className="CategoryFoodCart">
                Filter
            </div>
        </div>

        <div className="CategoryFoodListContainer">
            {this.renderCategory()}
        </div>
        
      </div>
    );
  }
}

export default CategoryFood
