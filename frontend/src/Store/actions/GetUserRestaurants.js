import baseUrl from '../../Helpers/BaseUrl';

export const GetUserRestaurants = () => (dispatch, getState) => {
    const token = getState().token
    const id = getState().user_data.id
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/restaurants/user/${id}/`, config)
        .then(response => response.json())
        .then((data)=>{console.log(data);dispatch({type: 'GET_USER_RESTAURANTS', payload: data})});
}