import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className="sticky top-14">
    <section>
       <div className="flex items-center justify-center border-b-[1px]">
         <div className="my-5">
           <img src="ads.png" alt="" />
         </div>
       </div>
     </section>
     {/* popular video */}
     <section>
       <div className="p-3 border-b-[1px]">
         <div className="flex items-center justify-between">
           <div className="flex items-center">
             <p className=" bg-red-600 rounded-sm text-white text-[11px] font-bold px-3">
               POPULAR VIDEO
             </p>
           </div>
           <div>
           <p className=" border text-[10px] px-1 cursor-pointer">ALL</p>
           </div>
         </div>

         <div className="mt-2">
           <div className="mb-1">
             <h3 className="hover:text-red-500 cursor-pointer text-[18px] font-[500]">
               Most Beautiful Things to Do in Sidney with Your
               Boyfriend
             </h3>
           </div>
           <div className="mb-2">
             <p className="text-[11px]">
               <span className="font-bold cursor-pointer">
                 John Doe
               </span>{" "}
               - May 20, 2016
             </p>
           </div>
           <div className="cursor-pointer mb-1">
             <img src="ff-photo.jpg" className="w-full" alt="" />
           </div>
           <div className="mb-1">
             <p className="text-[13px]">
               And when we woke up, we had these bodies. They're
               like, except I'm having them! Oh, I think we should
               just stay friends. You'll...
             </p>
           </div>
         </div>
       </div>
     </section>

     {/* holiday reciepies section */}
     <section>
       <div className="p-3">
         <div className="flex items-center justify-between">
           <div className="flex items-center">
             <p className=" bg-blue-600 rounded-sm text-white text-[11px] font-bold px-3">
               HOLIDAY RECIPES
             </p>
           </div>
         </div>

         <div className="mt-2">
           <div class="flex flex-row mt-4">
             <div className="mr-3">
               <p className="hover:text-yellow-600 cursor-pointer">
                 Travelling with Style on the Capricorn Coast
               </p>
               <p className="text-[11px] mt-1">May 20, 2016</p>
             </div>

             <div>
               <img src="ff-photo-2.jpg" alt="" />
             </div>
           </div>

           <div class="flex flex-row mt-4">
             <div className="mr-3">
               <p className="hover:text-yellow-600 cursor-pointer">
                 Travelling with Style on the Capricorn Coast
               </p>
               <div className="flex items-center">
                 <div className="text-[11px] mt-1">
                   <AiOutlineStar size={20} />
                 </div>
                 <div className="text-[11px] mt-1">
                   <AiOutlineStar size={20} />
                 </div>
                 <div className="text-[11px] mt-1">
                   <AiOutlineStar size={20} />
                 </div>
                 <div className="text-[11px] mt-1">
                   <AiOutlineStar size={20} />
                 </div>
                 <div className="text-[11px] mt-1">
                   <AiOutlineStar size={20} />
                 </div>
               </div>
             </div>

             <div>
               <img src="ff-photo-2.jpg" alt="" />
             </div>
           </div>
         </div>
       </div>
     </section>
   </div>
  )
}

export default Sidebar