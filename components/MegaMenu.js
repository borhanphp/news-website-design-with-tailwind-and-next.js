import React from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'

const MegaMenu = () => {
  return (
    <div className='bg-white p-5 border-x-[1px] width-[100%]'>
        <div className=''>
          <div className='grid grid-cols-4 gap-3'>
          <div className='col-span-1'>
            <div>
                <img src='f-photo-1.jpg' alt=''/>
            </div>
            <div><p className='font-[500] mt-2'>Discover the 10 Best Hairstyles According to Your Face Shape</p></div>
            </div>

            <div className='col-span-1'>
            <div>
                <img src='f-photo-1.jpg' alt=''/>
            </div>
            <div><p className='font-[500] mt-2'>Discover the 10 Best Hairstyles According to Your Face Shape</p></div>
            </div>

            <div className='col-span-1'>
            <div>
                <img src='f-photo-1.jpg' alt=''/>
            </div>
            <div><p className='font-[500] mt-2'>Discover the 10 Best Hairstyles According to Your Face Shape</p></div>
            </div>

            <div className='col-span-1'>
            <div>
                <img src='f-photo-1.jpg' alt=''/>
            </div>
            <div><p className='font-[500] mt-2'>Discover the 10 Best Hairstyles According to Your Face Shape</p></div>
            </div>
          </div>
          <div className='flex items-center justify-between mt-10 gap-3'>
            <div className='flex items-center gap-3'>
                <div><p>All</p></div>
                <div><p>Tech</p></div>
                <div><p>More</p></div>
            </div>
            <div className='flex items-center gap-3'>
                <div className="border cursor-pointer"><ArrowLeft size={15}/></div>
                <div className="border cursor-pointer"><ArrowRight size={15}/></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MegaMenu