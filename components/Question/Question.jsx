import React from 'react';

const Question = () => {
    return (
        <div className='bg-purple-100 p-5 border border-indigo-300'>
            <h3 className='font-bold'>Difference between Props and State?</h3>
            <p>ANS: The state is owned locally, and the component itself updates it. Props are owned and read only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child</p>
            <br />

            <h3 className='font-bold'>How useState does work?</h3>
            <p>ANS: useState works like a array. It has 2 values, one is its default value and another is set value. Default value is mainly work like a array!</p>
            <br />

            <h3 className='font-bold'>What is functionality of useEffect beyond Data Loading?</h3>
            <p>ANS: useEffect also work for changing its state and props. Its another important job is dependency!</p>
            <br />

            <h3 className='font-bold'>How does React work?</h3>
            <p>ANS: React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
        </div>
    );
};

export default Question;