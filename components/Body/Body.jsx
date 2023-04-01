import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Body = ({handleTitle, handleMarks}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return (
        <div>
            {
                products.map(product=><Product
                    handleMarks={handleMarks}
                    handleTitle={handleTitle}
                    key={product.id}
                    product={product}>
                </Product>)
            }
        </div>
    );
};

export default Body;