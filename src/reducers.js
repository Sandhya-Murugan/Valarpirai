const initialState = {
    selectedProductCard: null,
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_PRODUCT_CARD':
            return {
                ...state,
                selectedProductCard: action.payload,
            };

        default:
            return state;
    }
};