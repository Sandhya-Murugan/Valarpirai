const initialState = {
    selectedCard: null,
};

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_CARD':
            return {
                ...state,
                selectedCard: action.payload,
            };
        default:
            return state;
    }
};