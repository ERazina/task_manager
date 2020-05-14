const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const COMPLETED_ITEM = "COMPLETED_ITEM";

function addItem (text){
    return{
        type: ADD_ITEM,
        text
    }
}

function deleteItem (id) {
    return {
        type: DELETE_ITEM,
        id
    }
}

function complete (id) {
    return {
        type: COMPLETED_ITEM,
        id
    }
}