// Action types

export const ADD_HABIT = "addHabit";
export const REMOVE_HABIT = "removeHabit"

// Action creaters

export function addHabit( description ) {
    return {
        type: ADD_HABIT,
        payload: {
            description: description
        }
    };
};

export function removeHabit(id) {
    return {
        type: REMOVE_HABIT,
        payload: {
            id: id
        }
    }
}