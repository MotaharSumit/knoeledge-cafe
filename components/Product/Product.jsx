import React from 'react';

const Product = (props) => {
    const { name, blogTitle, coverImage, authorImage, readTime, publishTime } = props.product;
    const handleTitle = props.handleTitle;
    const handleMarks = props.handleMarks;
    return (
        <div className='items-center border my-3 p-2'>
            <img className='w-full my-3 rounded-xl ' src={coverImage} alt="" />

            <div className='flex my-2'>
                <img className='w-12 mx-3 rounded-full' src={authorImage} alt="" />
                <div className='flex gap-[200px]'>
                <div>
                    <p className='font-bold'>{name}</p>
                    <p>14 Jan 2015</p>
                </div>
                <div>
                    <p className='ps-40 ms-40'>{readTime} min read  <button onClick={()=>handleTitle(blogTitle)} className='bg-gray-300 rounded p-1 ms-1 border hover:bg-purple-200'>Bookmark</button>
                    </p>
                   
                    
                </div>
                </div>
            </div>
            <p className='font-bold text-3xl justify-start my-3'>{blogTitle}</p>

            <p className='text-slate-600 my-3'>#beginners #programming</p>

            {/* <a href="#">Mark as read</a> */}

            <button onClick={()=>handleMarks(readTime)} className='underline text-blue-700'>Marks as read</button>

            

        </div>
    );
};

export default Product;