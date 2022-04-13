import fakeStoreAPI from "../../APIs/fakeStoreAPI"
import { actionTypes } from "../contants/action-types"

export const fetchProducts = (sortBy, isLoading) => async (dispatch) => {
    isLoading(true);
    const response = await fakeStoreAPI.get(`/products?sort=${sortBy}`);
    dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: response.data });
    isLoading(false);
}

export const fetchProductDetails = (id) => async (dispatch) => {
    const response = await fakeStoreAPI.get(`/products/${id}`);
    dispatch({ type: actionTypes.FETCH_PRODUCT_DETAILS, payload: response.data });
}

export const fetchCategories = () => async (dispatch) => {
    const response = await fakeStoreAPI.get('/products/categories');
    dispatch({ type: actionTypes.FETCH_CATEGORIES, payload: response.data })
}

export const fetchCartItems = (userId) => async (dispatch) => {
    const response = await fakeStoreAPI.get(`carts/${userId}`);
    dispatch({ type: actionTypes.FETCH_CART_ITEMS, payload: response.data })
}

export const setProduct = (products) => {
    return {
        type: actionTypes.SET_PRODUCT,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT
    }
}