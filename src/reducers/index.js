import { ADD_HABIT, REMOVE_HABIT } from "../actions";
import { v4 as uuidv4 } from 'uuid';

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
                    id: uuidv4(),
                    description: action.payload.description,
                    weekStatus: [ "", "", "", "", "", "", ""]
                }
            ];

            localStorage.setItem('habits', JSON.stringify(newState));
            return newState;

        case REMOVE_HABIT: 
            let remove = state.filter(habit => habit.id !== action.payload.id);

            localStorage.setItem('habits', JSON.stringify(remove));
            return remove;

        default: 
            return state;
    }
}