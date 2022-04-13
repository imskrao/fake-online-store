import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

export default function ProductListing() {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const [sortOptions, setSortOptions] = useState([
        { name: 'Ascending', isChecked: true, id: 1, value: 'asc' },
        { name: 'Descending', isChecked: false, id: 2, value: 'desc' }
    ]);
    const [activeOption, setActiveOption] = useState('asc');
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        dispatch(fetchProducts(activeOption, isLoading))
    }, [])
    const handleClick = (event) => {
        if (event.currentTarget.value !== activeOption) {
            console.log(event.currentTarget.value)
            setActiveOption(event.currentTarget.value);
            dispatch(fetchProducts(event.currentTarget.value, isLoading));
        }
        const temp = sortOptions.map(option => option.name === event.currentTarget.name ? { ...option, isChecked: true } : { ...option, isChecked: false })
        setSortOptions(temp)
    }
    const isLoading = (value) => {
        setLoading(value)
    }
    return (<div className='container pt-4'>
        <div className='row'>
            <div className='w-100 pb-3 justify-content-end d-flex'>
                <span className='me-3'>Sort By:</span>
                {sortOptions && sortOptions.map(options => <div className="form-check me-3 d-inline-block" key={options.id}>
                    <input className="form-check-input" value={options.value} type="radio" name={options.name} checked={options.isChecked} onClick={handleClick} />
                    <label className="form-check-label" htmlFor={options.name}>
                        {options.name}
                    </label>
                </div>)}
            </div>

            {loading && <div className='w-100'>Loading...</div>}
            {products && products.map(product => (<ProductComponent product={product} key={product.id}></ProductComponent>))}
        </div>
    </div>)
}
