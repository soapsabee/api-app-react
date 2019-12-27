export default function(state = [], action){
    console.log("action: " + action.type);
    
    switch (action.type) {
        case "users_fetch":
            return action.payload;
        default:
            return state;
    }
}