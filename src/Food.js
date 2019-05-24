import React, { Component } from 'react';
import logo from './logo.svg';
import './food.css';
class Food extends Component {
  constructor(props) {
    super(props);
    this.state={
        recipes:this.props.recipes || [],
        selected_recipes : this.props.selected_recipes||[]
    }
}   

componentDidUpdate(prevProps){
      let {selected_categories, recipes, selected_choice} = this.props;
      console.log('componentDidUpdate',recipes,selected_choice);
      if(JSON.stringify(prevProps.recipes) !== JSON.stringify(recipes)){
          this.setState({
            recipes:recipes
          })
      }
      if(prevProps.selected_categories.length !== selected_categories.length){
          if(selected_categories.length>0){
            recipes = recipes.filter((r)=>{
                return selected_categories.indexOf(r.category)!==-1 && r.name.includes(selected_choice) ? true: false
            })
          }
        this.setState({
            selected_recipes:recipes
        })
    }
}

renderFood(){
    console.log('Food',this.props);
    const { recipes ,selected_recipes} = this.state;
    const {selected_categories, no_of_items} = this.props;
    if(selected_categories.length && selected_recipes.length==0){
        return (<div> No Food </div>)
    }
    let recipe = selected_recipes.length>0 ? selected_recipes : recipes;
    return recipe.map((f,i)=>{
        return(
            <div className="FoodListItemContainer" key={`food-${i}`}>
                <div className="FoodListImgContainer">
                    <img className="FoodListImage" 
                         src={f.image}/>
                </div>
                <div className="FoodListFooterContainer">
                    <div className="FoodListDetailContainer">
                        <div className="FoodListName">
                            {f.name}
                        </div>
                        <div className="FoodListPrice">
                            {f.price}
                        </div>
                    </div>
                    <div className="FoodListOrder" 
                        onClick={()=>{
                            no_of_items.push(f);
                            this.props.addItem(no_of_items);
                        }}>
                        ADD TO BAG
                    </div>
                </div>
            </div>
        )
    });
    

    
  }
  render() {
    return (
        <div className="FoodListContainer">
            {this.renderFood()}
        </div>
        
    );
  }
}

export default Food
