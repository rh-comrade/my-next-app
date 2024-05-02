import { init } from "../init";
const appReducer = (state=init,action)=>{
    switch(action.type){
        case "NAME_UPDATE":
            return{
                ...state,
                name: action.name
            }
        case "LOCATION_UPDATE":
            return {
                ...state,
                location: action.location
            }
        default:
            return state;
    }
}

export default appReducer;