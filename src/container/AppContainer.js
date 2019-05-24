import { connect } from 'react-redux';
import App from '../App';
import { fetchFoodDetails, setSelectedChoice } from '../duck/foodDuck';

const mapStateToProps = ( state ) => {
    return {
        foodError: state.foods.foodError
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        fetchFoodDetails: ( ifsc ) =>  dispatch(fetchFoodDetails(dispatch, ifsc)),
        setSelectedChoice : (value) => dispatch(setSelectedChoice(dispatch,value))
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);