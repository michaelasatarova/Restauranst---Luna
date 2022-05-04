import baseUrl from '../../Helpers/BaseUrl';


export const CreateRestaurant = (history) => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'POST',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/restaurants/new/`, config)
        .then(response => response.json())
        .then((data)=>{console.log(data);dispatch({type: 'CREATE_RESTAURANT', payload: data});
        history.push('/new_restaurant_sucess');
    });
}