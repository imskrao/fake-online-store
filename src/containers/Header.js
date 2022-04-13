import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCategories } from '../redux/actions/productActions'

export default function Header() {
    const categories = useSelector(state => state.allProducts.categories);
    console.log('categories', categories)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])
    return (
        <div className='navbar navbar-expand-lg navbar-light bg-light px-5 shadow'>
            <Link to="/" className='navbar-brand'>Fake Online Store</Link>
            <div className='flex-grow-1 d-flex justify-content-end'>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    {categories && categories.map(category => <li className="nav-item" key={category}>
                        <Link to="/" className="nav-link">{category}</Link>
                    </li>)}
                    <li className='nav-item'>
                        <Link to="/cart" className='nav-link'>Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
