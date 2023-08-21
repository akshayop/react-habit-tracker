// Action types

export const ADD_HABIT = "addHabit";
export const UPDATE_STATUS = "updateStatus";
export const REMOVE_HABIT = "removeHabit";

// Action creaters

export function addHabit( description ) {
    return {
        type: ADD_HABIT,
        payload: {
            description: description
        }
    };
};

export function updateStatus( id, index ) {
    return {
        type: UPDATE_STATUS,
        payload: {
            id: id,
            index: index
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