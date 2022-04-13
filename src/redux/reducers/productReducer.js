import { actionTypes } from "../contants/action-types"

const initialState = {
    products: [],
    categories: [],
    cartItems: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCT:
            return { ...state, products: action.payload }
        case actionTypes.FETCH_PRODUCTS:
            return { ...state, products: action.payload }
        case actionTypes.FETCH_CATEGORIES:
            return { ...state, categories: action.payload }
        case actionTypes.FETCH_CART_ITEMS:
            return { ...state, cartItems: action.payload }
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCT_DETAILS:
            return { ...state, ...action.payload }
        case actionTypes.SELECTED_PRODUCT:
            return { ...state, ...action.payload }
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}