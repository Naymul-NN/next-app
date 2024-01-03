import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PostCard = ({img}) => {
    return (
        <div>
            <div className="card card-compact w-[320px] h-[550px] shadow-xl">
                <figure >
                    <Image className='origin-center hover:rotate-12' src={img} alt="" height="150" width="315"/>
                    <p className='origin-center rotate-90 pt-9'>12.12.2023</p>
                   </figure>
                  <div className="">
                    <h2 className="card-title py-4">Title</h2>
                    <p className='text-justify w-[300px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis error officia, cumque enim ipsa veniam maiores.</p>
                    <div className="card-actions ">
                        <Link href="/blog/post" className=" mt-4 text-orange-500 underline hover:text-green-500">Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;