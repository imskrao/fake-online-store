import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartItems } from '../redux/actions/productActions';

export default function Cart() {
    const userId = 5;
    const cartItems = useSelector(state => state.allProducts.cartItems);
    console.log({ cartItems })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCartItems(userId));
    }, [])
    return (<>
        <div>Cart</div>
        {JSON.stringify(cartItems)}
    </>
    )
}
