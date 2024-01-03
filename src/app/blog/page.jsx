import PostCard from '@/components/postcard/PostCard';
import React from 'react';

const BlogPage = () => {
    return (
        <div className='min-h-screen grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-10'>
            <PostCard img="https://images.pexels.com/photos/920689/pexels-photo-920689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <PostCard img="https://images.pexels.com/photos/814830/pexels-photo-814830.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <PostCard img="https://images.pexels.com/photos/1528348/pexels-photo-1528348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <PostCard img="https://images.pexels.com/photos/2346915/pexels-photo-2346915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <PostCard img="https://images.pexels.com/photos/19544002/pexels-photo-19544002/free-photo-of-city-street-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <PostCard img="https://images.pexels.com/photos/18632470/pexels-photo-18632470/free-photo-of-dog-freedom-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            
        </div>
    );
};

export default BlogPage;