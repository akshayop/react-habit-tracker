// Action types

export const ADD_HABIT = "addHabit";

// Action creaters

export function addHabit( description ) {
    return {
        type: ADD_HABIT,
        payload: {
            description: description
        }
    };
};