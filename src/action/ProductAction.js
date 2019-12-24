import axios from 'axios'


export const productsFetch = () => {
    return dispatch => {
        axios.get("https://sleepy-reef-53571.herokuapp.com/api/products").then(
            res => {
                dispatch({ type: "products_fetch", payload: res.data.data });
            }
        )
    }
}