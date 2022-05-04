const initialState = {
    token: null,
    restaurants:[],
    user_data:null,
    user_reviews:[],
    user_restaurants:[],
    create_restaurant: null,
    reviews: [],
  };
  
  export const authReducer = (state = initialState, action) => {
  
    switch (action.type) {
      case "USER_LOGIN": {
        const token = action.payload;
        return { ...state, token };
      }
      case "GET_RESTAURANTS":{
        const restaurants = action.payload;
        return { ...state, restaurants };
      }
      case "GET_USER_DATA":{
        const user_data = action.payload;
        return { ...state, user_data };
      }
      case "GET_USER_REVIEWS":{
        const user_reviews = action.payload;
        return { ...state, user_reviews };
      }
      case "GET_USER_RESTAURANTS":{
        const user_restaurants = action.payload;
        return { ...state, user_restaurants };
      }
      case "CREATE_RESTAURANT":{
        const create_restaurant = action.payload;
        return { ...state, create_restaurant };
      }
      case 'GET_REVIEWS':
        console.log("get reviews", action.payload)  
        return {
            ...state, 
            reviews: action.payload
              
      };

      default:
        return state;
    }
  };
  