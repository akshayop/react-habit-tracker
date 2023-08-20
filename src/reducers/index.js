import { ADD_HABIT } from "../actions";

let habits = localStorage.getItem('habits');
let initialState;

if(habits === null) {
    localStorage.setItem('habits', JSON.stringify(new Array(0)));
    initialState = [];
}

if(habits !== null && habits !== []) {
    initialState = JSON.parse(habits);
}

export default function reducer ( state = initialState, action) {

    switch(action.type) {
        case ADD_HABIT: 
            let newState = [
                ...state,
                {
                    description: action.payload.description,
                    weekStatus: [ "", "", "", "", "", "", ""]
                }
            ];

            localStorage.setItem('habits', JSON.stringify(newState));
            return newState;

        default: 
            return state;
    }
}