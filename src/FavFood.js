import React, { Component } from 'react';
import logo from './logo.svg';
import './favfood.css';


class FavFood extends Component {
  constructor(props) {
    super(props);
    this.state={
        favRecipes:this.props.fav_recipes || [],
        itemsNo:0
    }
  }
  componentDidUpdate(prevProps){
      if(JSON.stringify(prevProps.fav_recipes) !== JSON.stringify(this.props.fav_recipes)){
          this.setState({
            favRecipes:this.props.fav_recipes
          })
      }
      if(JSON.stringify(prevProps.no_of_items) !== JSON.stringify(this.props.no_of_items)){
        this.setState({
            itemsNo:this.props.no_of_items.length
        })
      }
  }
  
  renderFavFood(){
    const { favRecipes } = this.state;
    const {no_of_items} = this.props;
    return (favRecipes||[]).map((f,i)=>{
        return(
            <div className="FAVFoodListItemContainer" key={`favFood-${i}`} >
                <div className="FAVFoodListImgContainer">
                    <img className="FavFoodListImage" 
                         src={f.image}/>
                </div>
                <div className="FAVFoodListFooterContainer">
                    <div className="FAVFoodListDetailContainer">
                        <div className="FAVFoodListName">
                            {f.name}
                        </div>
                        <div className="FAVFoodListPrice">
                            {f.price}
                        </div>
                    </div>
                    <div className="FAVFoodListOrder" 
                        onClick={()=>{
                            no_of_items.push(f);
                            this.props.addItem(no_of_items);
                        }}>
                        REORDER
                    </div>
                </div>
            </div>
        )
    })

    
  }
  render() {
      const {itemsNo} = this.state;
    return (
      <div className="FavFoodMainContainer">
        <div className="FavFoodHeaderContainer">
            <div className="FavFoodTitleContainer">
                <div className="FavFoodTitle"> FAVOURITES </div>
                <div className="FavFoodSubTitle"> Enjoy what you have been ordering! </div>
            </div>
            <div className="FavFoodCart">
                Cart
                <div>
                    {`${itemsNo} items`}
                </div>
            </div>
        </div>

        <div className="FAVFoodListContainer">
            {this.renderFavFood()}
        </div>
        
      </div>
    );
  }
}

export default FavFood
