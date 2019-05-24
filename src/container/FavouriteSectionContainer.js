import { connect } from 'react-redux';
import FavFood from '../FavFood';
import { addItem } from '../duck/foodDuck';

const mapStateToProps = ( state ) => {
    console.log('FavFood',state.foods.no_of_items.length);
    return {
        fav_recipes : state.foods.fav_recipes,
        no_of_items: state.foods.no_of_items
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        addItem: ( item ) =>  dispatch(addItem(dispatch, item))
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavFood);