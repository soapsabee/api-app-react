export default function(state = [], action){
    switch (action.type) {
        case "products_fetch":
            return action.payload;
        default:
            return state;
    }
}