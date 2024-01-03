import Image from 'next/image';
import React from 'react';

const ContactPage = () => {
    return (
        <div className='min-h-screen flex items-center gap-5'>
            <div className='flex-1'>
                <Image src="/contact.png" alt='' height="400" width="450"/>
            </div>
            <div className='flex-1'>
               <form className='space-y-5'>
                <input className='w-full bg-gray-700 py-2 px-2' type="text" placeholder='Name and Surname' /> <br />
                <input className='w-full bg-gray-700 py-2 px-2' type="text" placeholder='Email Address' /><br />
                <input className='w-full bg-gray-700 py-2 px-2' type="text" placeholder='Phone Number (optional)' /><br />
                <textarea className='w-full bg-gray-700 py-2 px-2' name="" id="" cols="30" rows="5" placeholder='Message'></textarea> <br />
                <button className='w-full bg-blue-600 py-2'>Send</button>
               </form>
                
            </div>
            
        </div>
    );
};

export default ContactPage;