import keyMirror from 'keymirror';
import { createAction } from 'redux-actions';

const initial_state = {
    categories:[],
    recipes:[],
    fav_recipes:[],
    foodError:'',
    selected_categories:[],
    no_of_items:[],
    selected_choice:''
};

const ACTION_TYPES = keyMirror({
    FOOD_FETCH: null,
    FOOD_FETCH_SUCCESS: null,
    FOOD_FETCH_FAILURE: null,
    SELECT_CATEGORIES:null,
    NO_OF_ITEMS:null,
    SELECTED_CHOICE:null
});

export const fetchFoodDetailsSuccess = createAction(
    ACTION_TYPES.FOOD_FETCH_SUCCESS,
    (dispatch, categories ,recipes, fav_recipes) =>{
      return {
        categories,
        recipes,
        fav_recipes
      };
});

export const fetchFoodDetailsFailure= createAction( 
  ACTION_TYPES.FOOD_FETCH_FAILURE,
    (dispatch, foodError) =>{
      return {
        foodError
    };
});

  


export const fetchFoodDetails = createAction(
    ACTION_TYPES.FOOD_FETCH,
    async (dispatch, ifsc) => {  
       const resp = await fetch(`http://temp.dash.zeta.in/food.php`);
       const data = await resp.json();
       if(resp.status === 200){
           const {categories, recipes} = data;
           let fav_recipes = (recipes).filter((r)=>{
               return r.isFavourite;
           })
           let other_recipes = (recipes).filter((r)=>{
            return r.isFavourite == false;
            })
          dispatch(fetchFoodDetailsSuccess(dispatch, categories ,other_recipes, fav_recipes));
       }else{
          dispatch(fetchFoodDetailsFailure(dispatch, resp.statusText));
       }
    }
); 

export const selectedCategories= createAction( 
    ACTION_TYPES.SELECT_CATEGORIES,
      (dispatch, selected_categories=[], recipes=[]) =>{
        return {
            selected_categories,
      };
});

export const addItem= createAction( 
    ACTION_TYPES.NO_OF_ITEMS,
      (dispatch, no_of_items=[]) =>{
        return {
            no_of_items:no_of_items,
      };
});

export const setSelectedChoice= createAction( 
    ACTION_TYPES.SELECTED_CHOICE,
      (dispatch, selected_choice=[]) =>{
        return {
            selected_choice:selected_choice,
      };
});

export default function reducer(state = initial_state, action) {
    switch(action.type) {
        case ACTION_TYPES.FOOD_FETCH_SUCCESS:
            return {
                ...state, 
                categories: action.payload.categories,
                recipes: action.payload.recipes,
                fav_recipes:action.payload.fav_recipes
            };
        case ACTION_TYPES.FOOD_FETCH_FAILURE:
            return {
                ...state, 
                foodError: action.payload.foodError,
            };
        case ACTION_TYPES.SELECT_CATEGORIES:
            return {
                ...state, 
                selected_categories: action.payload.selected_categories,
            };
        case ACTION_TYPES.NO_OF_ITEMS:
            return {
                ...state, 
                no_of_items: action.payload.no_of_items,
            };
        case ACTION_TYPES.SELECTED_CHOICE:
            return {
                ...state, 
                selected_choice: action.payload.selected_choice,
            };
        default: 
            return state;   
    }
}