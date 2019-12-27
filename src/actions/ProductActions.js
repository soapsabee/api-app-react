import axios from 'axios'


export const usersFetch = () => {
    return dispatch => {
        axios.get("http://localhost:3001/users").then(
            res => {
                console.log("res: "+ JSON.stringify(res.data));
                
                dispatch({ type: "users_fetch", payload: res.data });
            }
        )
    }
}