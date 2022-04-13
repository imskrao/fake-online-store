import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function ProductComponent({ product }) {
    // console.log('product', product)
    const {
        image = '',
        price = '',
        rating: { rate = '', count = '' } = {},
        category = '',
        title = '',
        description = '',
        id = ''
    } = product
    return (<div className='col-3'>
        <div className='card mb-4 shadow'>
            <img className='card-img-top product-img' src={image} alt='' />
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>${price}</li>
                <li className='list-group-item'>{rate} by {count}</li>
                <li className='list-group-item'>{category}</li>
            </ul>
            <div className='card-body'>
                <h5 className='card-title product-title'>{title}</h5>
                <p className='card-text product-desc'>{description}</p>
                <Link to={`/product/${id}`} className='btn btn-primary'>View Details</Link>
            </div>
        </div>
    </div>
    )
}
