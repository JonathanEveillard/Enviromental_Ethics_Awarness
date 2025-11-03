import React from 'react'

const Body = () => {
  return (
    <div>
        <div className='font-mono'>
            <div className='p-12'>

                {/* Title Section */}
               <div className='mt-30'>
                 <h1 className='font-bold text-6xl mb-6 max-w-2xl text-[#1A1A1A]'>Ottawa&apos;s Central Experimental Farm </h1>
               </div>

               {/* Description Section */}
               <div>
                    <p className='text-lg max-w-xl text-white'>A student-led project exploring local perspectives on sustainable farming at Ottawa’s Central Experimental Farm, where ethics, environment, and community meet.</p>
               </div>

               {/*Buttons Section */}
               <div>
                    <button className='bg-black text-white font-bold px-6 py-3 mt-8 mr-4 rounded-lg hover:bg-gray-900 transition duration-300'>Explore Research</button>
                    <button className='bg-white text-black font-bold px-6 py-3 mt-8 rounded-lg hover:bg-gray-300 transition duration-300'>Privacy & Data Usage</button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Body