import baseUrl from '../../Helpers/BaseUrl';

export const GetRestaurants = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          }),
    };
    console.log(baseUrl)
    fetch(`${baseUrl}/backend/api/restaurants/`, config)
        .then(response => response.json())
        .then((data)=>{
            console.log(data);
         dispatch({type: 'GET_RESTAURANTS', payload: data})
        });
        
}

export const getRestaurantByIdAction = (restaurant_id) => async (dispatch, getState) => {
    const token = getState().token;
    const headers = new Headers({
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    })
    const config = {
        method: "GET",
        headers: headers
    }
    const response = await fetch(`${baseUrl}/backend/api/restaurants/${restaurant_id}`, config)
    const restaurant = await response.json() 
    console.log("response", restaurant)
    return restaurant        
}
