import baseUrl from '../../Helpers/BaseUrl';

export const GetUserData = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/users/me/`, config)
        .then(response => response.json())
        .then((data)=>{console.log(data);dispatch({type: 'GET_USER_DATA', payload: data})});
}
