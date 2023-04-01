import React from 'react';

const Cart = (props) => {
    const value = props.value;
    const marks = props.marks;
    console.log(props.value)
    return (
       <div>
         
        <div className='bg-slate-200 rounded-xl'>
            <p className='text-center font-bold text-2xl p-3 '>Bookmark Blogs: {value.length}</p>
            {
                value.map(item => <p className='font-bold px-5 bg-white my-3 w-4/5 text-center mx-auto rounded-sm'>{item}</p>)
            }
        </div>
       </div>
    );
};

export default Cart;