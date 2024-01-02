import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    return (
        <div className='min-h-screen' >
        <Image src="https://images.pexels.com/photos/866876/pexels-photo-866876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="500" height="500"/>
        </div>
    );
};

export default AboutPage;