import React from 'react';

const Time = (props) => {
    const marks = props.marks;
    console.log(props.marks);
    let total = 0;
    for(const product of marks){
        total = total + parseInt(product.marks);
        

        // console.log(parseInt(total));

    }
    return (
        <div>
            <div className='my-5 items-center'>
            <h2 className='font-bold text-center border border-indigo-600 text-purple-600 bg-indigo-100 p-5 rounded text-1xl'>
                Spent time on read: {parseInt(total)} min</h2>
        </div>
        </div>
    );
};

export default Time;