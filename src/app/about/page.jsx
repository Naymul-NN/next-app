import Image from 'next/image';
import React from 'react';

export const metadata = {
    title: "About page",
    description: "this is about page",
}
const AboutPage = () => {



    return (
        <div className='min-h-screen flex gap-10 justify-center items-start pt-7' >
            <div className='flex-1'>
                <p className='text-lg text-blue-600'>About Agency</p>
                <h1 className='py-7 text-4xl font-bold'>we create digital ideas <br /> that are bigger, bolder, <br />braver and better</h1>
                <p>we create digital ideas that are bigger, bolder, braver and better. we beleve in good ideas fixeibility and precission we are world is Our special Team best consulting and finance solutiaon provider . Wide range of web and software deveopment service </p>
                <div className='flex gap-10 pt-7'>
                    <div><p className='text-2xl text-blue-600'>10 K+</p> <p> Year of experience</p></div>
                    <div><p className='text-2xl text-blue-600'>234 K+</p> <p> People reached</p></div>
                    <div><p className='text-2xl text-blue-600'>5 K+</p> <p> Service and Plugins</p></div>
                </div>
            </div>
            <div className='flex-1'>
                <Image src="/about.png" alt='' width="450" height="400" />
            </div>
        </div>
    );
};

export default AboutPage;