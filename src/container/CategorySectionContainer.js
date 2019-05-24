import { connect } from 'react-redux';
import CategoryFood from '../CategoryFood';
import {selectedCategories} from '../duck/foodDuck';
const mapStateToProps = ( state ) => {
    return {
        categories : state.foods.categories,
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        selectedCategories: ( categories, recipes ) =>  dispatch(selectedCategories(dispatch, categories, recipes))
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryFood);