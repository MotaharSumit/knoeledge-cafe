import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-10 py-3 bg-indigo-100 mx-10 border-b-4 border-indigo-300 '>
            <div className='md:text-3xl font-bold'>
                <h2 className='text-purple-600'>Knowledge Cafe</h2>
            </div>
            <div>
                <ul className=''>
                    <a className='px-4' href="">Home</a>
                    <a className='px-4' href="">Courses</a>
                    <a className='px-4' href="">About</a>
                    <a className='px-4' href="">Log In</a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;