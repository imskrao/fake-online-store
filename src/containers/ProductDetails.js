import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProductDetails, removeSelectedProduct } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

export default function ProductDetails() {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.selectedProduct);
    console.log(product);

    useEffect(() => {
        dispatch(fetchProductDetails(productId))
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])
    return (
        <div>ProductDetails
            {product && Object.keys(product).length && <ProductComponent product={product}></ProductComponent>}
        </div>
    )
}
