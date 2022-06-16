import axios from 'axios';
import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, GET_CONTACT } from './actionTypes';


export const getContact = () => async (dispatch) => {
    try {
        const res = await axios.get("/get");
        console.log(res);
        dispatch({
            type: GET_CONTACT,
            payload: res.data,
        });
    } catch (error) {
        alert('Get Error!!');
    }
};

export const addContact = (newContact) => async(dispatch) => {
    try {
        const {data} = await axios.post("/add", newContact)
        dispatch({
            type: ADD_CONTACT,
            payload: data,
        });
    } catch (error) {
        alert('ADD error!!');
    }
}

export const delContact = (id) => async(dispatch) => {
    try {
        await axios.delete(`/delete/${id}`)
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        })
    } catch (error) {
        alert('delete error')
    }
}

export const editContact = (editedContact) => async(dispatch) =>{
    try {
        const res= await axios.put(`/update/${editedContact.id}`,editedContact);
        dispatch({
            type: EDIT_CONTACT,
            payload: res.data,
        });
        
    } catch (error) {
        alert("Edit error")
    }

}