import Image from 'next/image';
import React from 'react';


const DaynamicPage = () => {
    return (
        
            <div className=" flex gap-10 pb-10">
                
                    <Image src="  https://images.pexels.com/photos/814830/pexels-photo-814830.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height="150" width="315" />
                
                <div>
                    <h2 className="card-title py-4">Title</h2>
                    <div className='flex items-center gap-6 py-7'>
                        <div className='avatar'>
                              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <Image className='rounded-full' src="https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="100" height="100"/>
                                </div>
                        </div>
                        <div>
                            <p>Author Name</p>
                            <p>Justin proderree</p>
                        </div>
                        <div>
                            <p>Publish date</p>
                            <p>12.12.2023</p>
                        </div>
                    </div>
                    <p className='w-[700px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis error officia, cumque enim ipsa veniam maiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, magni.</p>
                </div>
            </div>
        
    );
};

export default DaynamicPage;
