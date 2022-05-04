import baseUrl from '../../Helpers/BaseUrl';

export const GetUserReview = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/reviews/user/1/`, config)
        .then(response => response.json())
        .then((data)=>{console.log(data);dispatch({type: 'GET_USER_REVIEWS', payload: data})});
}