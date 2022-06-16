import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, GET_CONTACT } from "./actionTypes";

const init = {
    loading: true,
    Contact: []
};

const reducer = (state=init,{type,payload}) => {
    switch (type) {
        case GET_CONTACT:
            return{
                ...state,loading:false,Contact: payload,
            };
        case ADD_CONTACT:
            return {
                ...state,Contact:[...state.Contact,payload],
            };    
        case DELETE_CONTACT:
            return{
                ...state,Contact:state.Contact.filter((el)=>el.id!==payload),
            };
        case EDIT_CONTACT:
            return{
                ...state,
                Contact:state.Contact.map((el)=>(el.id===payload._id ? payload : el)),
            };
            
    
        default:
            return state;
    }
};

export default reducer; 