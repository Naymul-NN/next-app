import Image from 'next/image';
import React from 'react';

const Homepage = () => {
  return (
    <div className=' min-h-screen flex gap-7 justify-center items-center'>
      <div className='flex-1'>
          <h1 className='text-6xl font-bold'>Creative <br /> Thoughts <br /> Agency</h1>
          <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, autem. Ad soluta obcaecati deserunt impedit quis dolores culpa, numquam atque earum tenetur officia perferendis .</p>

          <div>
            <button className='py-2 px-5 bg-blue-500 rounded-sm hover:bg-slate-500'>Learn more</button>
            <button className='py-2 px-5 bg-slate-400 rounded-sm ml-4 hover:bg-slate-500'>Contact</button>
          </div>
          <Image src="/brands.png" alt='' height="100" width="500"/>

      </div>
      <div >
         <Image src="/hero.gif" alt='' width="500" height="300"/>
      </div>
    </div>
  );
};

export default Homepage;