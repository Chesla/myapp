import { connect } from 'react-redux';
import Food from '../Food';
import { addItem } from '../duck/foodDuck';

const mapStateToProps = ( state ) => {
    console.log('Food',state.foods.selected_choice, state.foods.selected_categories);
    return {
        recipes : state.foods.recipes,
        selected_categories: state.foods.selected_categories,
        no_of_items:state.foods.no_of_items,
        selected_choice:state.foods.selected_choice
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
)(Food);