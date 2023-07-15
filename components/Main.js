import React from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";


const Main = () => {
  return (
    <>
      {/* trending news section */}
      <div className="grid gap-4 p-4 bg-white md:border-x-[1px]">
        <div className="md:flex mad:items-center gap-4 bg-white ">
          <div className="place-content-center flex">
            <p className="bg-sky-400 rounded px-2 text-white text-xs font-bold">
              Trending Now
            </p>
          </div>
          <div className="flex space-x-6 place-content-center">
            <p className="font-base">Trending news for todays world</p>
          </div>
        </div>
      </div>
      {/* end trending news section */}

      {/* featured section start here */}
      <div className="md:grid md:grid-cols-2 gap-1">



        <div>
          <div className="relative mt-1 cursor-pointer">
            <img src="f-photo-1.jpg" className="relative h-100 w-full" alt="" />
            <div className="bg-gradient-to-t from-black absolute inset-0 flex flex-col justify-end p-3">
              <div className="flex items-center">
                <p className="bg-black hover:bg-sky-400 rounded-sm text-white text-[10px] font-bold cursor-pointer px-2">
                  Cosmopolitan
                </p>
              </div>
              <div>
                <Link href="/news">
                <p className="text-white text-xl font-[500]">
                  Discover the 10 best hairstyles according to your face shape
                </p>
                </Link>
              </div>
              <div>
                <p className="text-white text-[10px]">
                  <span className="font-bold">Matt Cloey</span> - May 20, 2016
                </p>
              </div>
            </div>
          </div>
        </div>





        <div className="grid grid-cols-2 gap-1 mt-1">

          <div>
            <div className="relative cursor-pointer">
              <img
                src="f-photo-1.jpg"
                className="relative h-100 w-full"
                alt=""
              />
              <div className="bg-gradient-to-t from-black absolute inset-0 flex flex-col justify-end p-3">
                <div className="flex items-center">
                  <p className="bg-black hover:bg-sky-400 hidden md:block rounded-sm text-white text-[10px] font-bold cursor-pointer px-2">
                    Cosmopolitan
                  </p>
                </div>
                <div>
                  <p className="text-white text-sm font-[500]">
                    Discover the 10 best hairstyles according to your face shape
                  </p>
                </div>
              </div>
            </div>
          </div>





          <div>
            <div className="relative cursor-pointer">
              <img
                src="f-photo-1.jpg"
                className="relative h-100 w-full"
                alt=""
              />
              <div className="bg-gradient-to-t from-black absolute inset-0 flex flex-col justify-end p-3">
                <div className="flex items-center">
                  <p className="bg-black hover:bg-sky-400 hidden md:block rounded-sm text-white text-[10px] font-bold cursor-pointer px-2">
                    Cosmopolitan
                  </p>
                </div>
                <div>
                  <p className="text-white text-sm font-[500]">
                    Discover the 10 best hairstyles according to your face shape
                  </p>
                </div>
              </div>
            </div>
          </div>





          <div>
            <div className="relative cursor-pointer">
              <img
                src="f-photo-1.jpg"
                className="relative h-100 w-full"
                alt=""
              />
              <div className="bg-gradient-to-t from-black absolute inset-0 flex flex-col justify-end p-3">
                <div className="flex items-center">
                  <p className="bg-black hover:bg-sky-400 hidden md:block rounded-sm text-white text-[10px] font-bold cursor-pointer px-2">
                    Cosmopolitan
                  </p>
                </div>
                <div>
                  <p className="text-white text-sm font-[500]">
                    Discover the 10 best hairstyles according to your face shape
                  </p>
                </div>
              </div>
            </div>
          </div>





          <div>
            <div className="relative cursor-pointer">
              <img
                src="f-photo-1.jpg"
                className="relative h-100 w-full"
                alt=""
              />
              <div className="bg-gradient-to-t from-black absolute inset-0 flex flex-col justify-end p-3">
                <div className="flex items-center">
                  <p className="bg-black hover:bg-sky-400 hidden md:block rounded-sm text-white text-[10px] font-bold cursor-pointer px-2">
                    Cosmopolitan
                  </p>
                </div>
                <div>
                  <p className="text-white text-sm font-[500]">
                    Discover the 10 best hairstyles according to your face shape
                  </p>
                </div>
              </div>
            </div>
          </div>






        </div>
      </div>
      {/* end featured section */}
      



      {/* fashion section start here */}
      <section>
            <div className="md:grid md:grid-cols-3 border-x-[1px]">
              <div className="col-span-2 border-r-[1px]">
                <div className="p-3">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <p className=" bg-yellow-600 rounded-sm text-white text-[11px] font-bold px-3">
                        FASHION WEEK
                      </p>
                    </div>
                    <div>
                      <p className=" border text-[10px] px-1 cursor-pointer">ALL</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                    <div>
                      <div className="cursor-pointer mb-1">
                        <img src="ff-photo.jpg" className="w-full" alt="" />
                      </div>
                      <div className="mb-1">
                        <h3 className="hover:text-yellow-600 cursor-pointer text-[18px] font-[500]">
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

                      <div className="mb-1">
                        <p className="text-[13px]">
                          And when we woke up, we had these bodies. They're
                          like, except I'm having them! Oh, I think we should
                          just stay friends. You'll...
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <div className="grid grid-cols-3 mb-3">
                        <div className=" col-span-1">
                          <img src="ff-photo-2.jpg" alt="" />
                        </div>
                        <div className="col-span-2 md:ml-2">
                          <p className="hover:text-yellow-600 cursor-pointer text-[15px]">
                            Travelling with Style on the Capricorn Coast
                          </p>
                          <p className="text-[11px] mt-1">May 20, 2016</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 mb-3">
                        <div className=" col-span-1">
                          <img src="ff-photo-2.jpg" alt="" />
                        </div>
                        <div className="col-span-2 md:ml-2">
                          <p className="hover:text-yellow-600 cursor-pointer text-[15px]">
                            Travelling with Style on the Capricorn Coast
                          </p>
                          <p className="text-[11px] mt-1">May 20, 2016</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 mb-3">
                        <div className=" col-span-1">
                          <img src="ff-photo-2.jpg" alt="" />
                        </div>
                        <div className="col-span-2 md:ml-2">
                          <p className="hover:text-yellow-600 cursor-pointer text-[15px]">
                            Travelling with Style on the Capricorn Coast
                          </p>
                          <p className="text-[11px] mt-1">May 20, 2016</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div className=" col-span-1">
                          <img src="ff-photo-2.jpg" alt="" />
                        </div>
                        <div className="col-span-2 md:ml-2">
                          <p className="hover:text-yellow-600 cursor-pointer text-[15px]">
                            Travelling with Style on the Capricorn Coast
                          </p>
                          <p className="text-[11px] mt-1">May 20, 2016</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* gaget section */}
                <section>
                    <div className="md:flex md:items-center md:gap-2">
                    <div className='relative mt-2 cursor-pointer'>
                        <img src='f-photo-1.jpg' className='relative h-100 w-full' alt='' />
                        <div className='bg-gradient-to-t from-black absolute inset-0 flex items-start justify-between p-3'>
                            <div className='flex items-center'>
                                <p className=' bg-green-700 hover:bg-sky-400 rounded-sm text-white text-[13px] font-bold cursor-pointer px-4'>Gadget World</p>
                            </div>

                            <div className='flex items-center'>
                            <p className=" border text-[10px] px-1 cursor-pointer">ALL</p>
                            </div>
                        </div>
                        <div className='bg-gradient-to-t from-black absolute inset-0 flex flex-col justify-end p-3'>
                            <div>
                                <p className='text-white text-xl font-[500]'>Discover the 10 best hairstyles according to your face shape</p>
                            </div>
                            <div>
                                <p className='text-white text-[10px]'>
                                    <span className='font-bold'>Matt Cloey</span> - May 20, 2016
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='relative cursor-pointer md:mt-2'>
                        <img src='f-photo-1.jpg' className='relative h-100 w-full' alt='' />
                        <div className='bg-gradient-to-t from-black absolute inset-0 flex flex-col justify-end p-3'>
                            <div>
                                <p className='text-white text-xl font-[500]'>Discover the 10 best hairstyles according to your face shape</p>
                            </div>
                            <div>
                                <p className='text-white text-[10px]'>
                                    <span className='font-bold'>Matt Cloey</span> - May 20, 2016
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='p-3 md:grid md:grid-cols-2'>
                        <div class="flex flex-row mt-4 md:col-span-1">
                            <div className='mr-3 cursor-pointer'><img src='ff-photo-2.jpg' alt='' /></div>
                            <div >
                                <p className='hover:text-green-600 cursor-pointer text-[14px]'>Travelling with Style on the Capricorn Coast</p>
                                <p className='text-[11px] mt-1'>May 20, 2016</p>
                            </div>
                        </div>

                        <div class="flex flex-row mt-4 md:col-span-1">
                            <div className='mr-3'><img src='ff-photo-2.jpg' alt='' /></div>
                            <div >
                                <p className='hover:text-yellow-600 cursor-pointer'>Travelling with Style on the Capricorn Coast</p>
                                <p className='text-[11px] mt-1'>May 20, 2016</p>
                            </div>
                        </div>

                        <div class="flex flex-row mt-4 md:col-span-1">
                            <div className='mr-3'><img src='ff-photo-2.jpg' alt='' /></div>
                            <div >
                                <p className='hover:text-yellow-600 cursor-pointer'>Travelling with Style on the Capricorn Coast</p>
                                <p className='text-[11px] mt-1'>May 20, 2016</p>
                            </div>
                        </div>

                        <div class="flex flex-row mt-4 md:col-span-1">
                            <div className='mr-3'><img src='ff-photo-2.jpg' alt='' /></div>
                            <div >
                                <p className='hover:text-yellow-600 cursor-pointer'>Travelling with Style on the Capricorn Coast</p>
                                <p className='text-[11px] mt-1'>May 20, 2016</p>
                            </div>
                        </div>

                        <div class="flex flex-row mt-4 md:col-span-1">
                            <div className='mr-3'><img src='ff-photo-2.jpg' alt='' /></div>
                            <div >
                                <p className='hover:text-yellow-600 cursor-pointer'>Travelling with Style on the Capricorn Coast</p>
                                <p className='text-[11px] mt-1'>May 20, 2016</p>
                            </div>
                        </div>

                        <div class="flex flex-row mt-4 md:col-span-1">
                            <div className='mr-3'><img src='ff-photo-2.jpg' alt='' /></div>
                            <div >
                                <p className='hover:text-yellow-600 cursor-pointer'>Travelling with Style on the Capricorn Coast</p>
                                <p className='text-[11px] mt-1'>May 20, 2016</p>
                            </div>
                        </div>

                    </div>

                </section>


                {/* best smartphone section */}
                <section>
                <div className="md:grid md:grid-cols-2 border-t-[1px]">
                  <div className="border-r-[1px]">
                    <div className="p-3 py-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <p className=" bg-sky-500 rounded-sm text-white text-[11px] font-bold px-3">
                            Best Smartphone
                          </p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="cursor-pointer mb-1">
                          <img src="ff-photo.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mb-1">
                          <h3 className="hover:text-sky-600 cursor-pointer text-[18px] font-[500]">
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

                        <div className="mb-1">
                          <p className="text-[13px]">
                            And when we woke up, we had these bodies. They're
                            like, except I'm having them! Oh, I think we should
                            just stay friends. You'll...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <hr/>
                    <section>
                      <div className="p-3 py-4 mt-4">
                        <div className="flex items-center justify-center mb-4">
                          <div className="flex items-center">
                            <p className=" bg-black rounded-sm text-white text-[11px] font-bold px-3">
                              Don't Miss
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 pb-3 border-b-[1px]">
                          <div className="mb-1 text-center">
                            <h3 className="hover:text-sky-600 cursor-pointer text-[16px] font-[500]">
                              Most Beautiful Things to Do in Sidney with Your
                              Boyfriend
                            </h3>
                          </div>
                          <div className="mb-2 flex items-center justify-center">
                            <p className="text-[11px]">
                              <span className="font-bold cursor-pointer">
                                John Doe
                              </span>{" "}
                              - May 20, 2016
                            </p>
                          </div>
                        </div>

                        <div className="mt-2 pb-3 border-b-[1px]">
                          <div className="mb-1 text-center">
                            <h3 className="hover:text-sky-600 cursor-pointer text-[16px] font-[500]">
                              Most Beautiful Things to Do in Sidney with Your
                              Boyfriend
                            </h3>
                          </div>
                          <div className="mb-2 flex items-center justify-center">
                            <p className="text-[11px]">
                              <span className="font-bold cursor-pointer">
                                John Doe
                              </span>{" "}
                              - May 20, 2016
                            </p>
                          </div>
                        </div>

                        <div className="mt-2 pb-3 border-b-[1px]">
                          <div className="mb-1 text-center">
                            <h3 className="hover:text-sky-600 cursor-pointer text-[16px] font-[500]">
                              Most Beautiful Things to Do in Sidney with Your
                              Boyfriend
                            </h3>
                          </div>
                          <div className="mb-2 flex items-center justify-center">
                            <p className="text-[11px]">
                              <span className="font-bold cursor-pointer">
                                John Doe
                              </span>{" "}
                              - May 20, 2016
                            </p>
                          </div>
                        </div>

                        <div className="mt-2 pb-3">
                          <div className="mb-1 text-center">
                            <h3 className="hover:text-sky-600 cursor-pointer text-[16px] font-[500]">
                              Most Beautiful Things to Do in Sidney with Your
                              Boyfriend
                            </h3>
                          </div>
                          <div className="mb-2 flex items-center justify-center">
                            <p className="text-[11px]">
                              <span className="font-bold cursor-pointer">
                                John Doe
                              </span>{" "}
                              - May 20, 2016
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                </section>

                
              </div>
              {/* sidebar first partr */}
              <div className="col-span-1">
                {/* ads */}
              <Sidebar/>
               </div>
            </div>

            {/* gaget world section */}

            <div className="md:grid md:grid-cols-3 gap-1 border-x-[1px]">
              <div>
                <div className="relative mt-2 cursor-pointer">
                  <img
                    src="f-photo-1.jpg"
                    className="relative h-100 w-full"
                    alt=""
                  />
                  <div className="bg-gradient-to-t from-black absolute inset-0 flex items-start justify-between p-3">
                    <div className="flex items-center">
                      <p className=" bg-sky-700 hover:bg-sky-400 rounded-sm text-white text-[13px] font-bold cursor-pointer px-4">
                        Gadget World
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-t from-black absolute inset-0 flex flex-col justify-end p-3">
                    <div>
                      <p className="text-white text-xl font-[500]">
                        Discover the 10 best hairstyles according to your face
                        shape
                      </p>
                    </div>
                    <div>
                      <p className="text-white text-[10px]">
                        <span className="font-bold">Matt Cloey</span> - May 20,
                        2016
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative mt-2 cursor-pointer">
                  <img
                    src="f-photo-1.jpg"
                    className="relative h-100 w-full"
                    alt=""
                  />

                  <div className="bg-gradient-to-t from-black absolute inset-0 flex flex-col justify-end p-3">
                    <div>
                      <p className="text-white text-xl font-[500]">
                        Discover the 10 best hairstyles according to your face
                        shape
                      </p>
                    </div>
                    <div>
                      <p className="text-white text-[10px]">
                        <span className="font-bold">Matt Cloey</span> - May 20,
                        2016
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative mt-2 cursor-pointer">
                  <img
                    src="f-photo-1.jpg"
                    className="relative h-100 w-full"
                    alt=""
                  />

                  <div className="bg-gradient-to-t from-black absolute inset-0 flex flex-col justify-end p-3">
                    <div>
                      <p className="text-white text-xl font-[500]">
                        Discover the 10 best hairstyles according to your face
                        shape
                      </p>
                    </div>
                    <div>
                      <p className="text-white text-[10px]">
                        <span className="font-bold">Matt Cloey</span> - May 20,
                        2016
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* *********third */}
            <div className="md:grid md:grid-cols-3 border-x-[1px]">
              <div className="col-span-2">
                <div className="p-3 border-r-[1px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center py-4">
                      <p className=" bg-black rounded-sm text-white text-[11px] font-bold px-3">
                        Latest Article
                      </p>
                    </div>
                  </div>

                  <div className="md:grid md:grid-cols-2 gap-6 ">
                    <div className="mt-2">
                      <div className="cursor-pointer mb-1">
                        <img src="ff-photo.jpg" className="w-full" alt="" />
                      </div>
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
                    </div>

                    <div className="mt-2">
                      <div className="cursor-pointer mb-1">
                        <img src="ff-photo.jpg" className="w-full" alt="" />
                      </div>
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
                    </div>

                    <div className="mt-4">
                      <div className="cursor-pointer mb-1">
                        <img src="ff-photo.jpg" className="w-full" alt="" />
                      </div>
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
                    </div>

                    <div className="mt-4">
                      <div className="cursor-pointer mb-1">
                        <img src="ff-photo.jpg" className="w-full" alt="" />
                      </div>
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
                    </div>

                    <div className="mt-4">
                      <div className="cursor-pointer mb-1">
                        <img src="ff-photo.jpg" className="w-full" alt="" />
                      </div>
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
                    </div>

                    <div className="mt-4">
                      <div className="cursor-pointer mb-1">
                        <img src="ff-photo.jpg" className="w-full" alt="" />
                      </div>
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
                    </div>

                    <div className="mt-4">
                      <div className="cursor-pointer mb-1">
                        <img src="ff-photo.jpg" className="w-full" alt="" />
                      </div>
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
                    </div>

                    <div className="mt-4">
                      <div className="cursor-pointer mb-1">
                        <img src="ff-photo.jpg" className="w-full" alt="" />
                      </div>
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
                    </div>

                    <div className="mt-4">
                      <div className="cursor-pointer mb-1">
                        <img src="ff-photo.jpg" className="w-full" alt="" />
                      </div>
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
                    </div>

                    <div className="mt-4">
                      <div className="cursor-pointer mb-1">
                        <img src="ff-photo.jpg" className="w-full" alt="" />
                      </div>
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
                    </div>
                  </div>
                </div>
              </div>




              {/* second ads section */}
              <div className="col-span-1">
                
              <div className="sticky top-14">
              <section>
                  <div className="flex items-center justify-center border-b-[1px]">
                    <div className="my-5">
                      <img src="ads.png" alt="" />
                    </div>
                  </div>
                </section>

            
                <section>
                  <div className="p-3 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <p className=" bg-red-600 rounded-sm text-white text-[11px] font-bold px-3">
                          Editors Pick
                        </p>
                      </div>
                      <div>
                      <p className=" border text-[10px] px-1 cursor-pointer">ALL</p>
                      </div>
                    </div>
                    <div className="mt-2 pb-3 border-b-2">
                      <div className="mb-1">
                        <h3 className="hover:text-sky-600 cursor-pointer text-[16px] font-[500]">
                          Most Beautiful Things to Do in Sidney with Your
                          Boyfriend
                        </h3>
                      </div>
                      <div className="mb-2 flex items-center">
                        <p className="text-[11px]">
                          <span className="font-bold cursor-pointer">
                            John Doe
                          </span>{" "}
                          - May 20, 2016
                        </p>
                      </div>
                    </div>

                    <div className="mt-2 pb-3 border-b-2">
                      <div className="mb-1">
                        <h3 className="hover:text-sky-600 cursor-pointer text-[16px] font-[500]">
                          Most Beautiful Things to Do in Sidney with Your
                          Boyfriend
                        </h3>
                      </div>
                      <div className="mb-2 flex items-center">
                        <p className="text-[11px]">
                          <span className="font-bold cursor-pointer">
                            John Doe
                          </span>{" "}
                          - May 20, 2016
                        </p>
                      </div>
                    </div>

                    <div className="mt-2 pb-3 border-b-[1pxr]">
                      <div className="mb-1">
                        <h3 className="hover:text-sky-600 cursor-pointer text-[16px] font-[500]">
                          Most Beautiful Things to Do in Sidney with Your
                          Boyfriend
                        </h3>
                      </div>
                      <div className="mb-2 flex items-center">
                        <p className="text-[11px]">
                          <span className="font-bold cursor-pointer">
                            John Doe
                          </span>{" "}
                          - May 20, 2016
                        </p>
                      </div>
                    </div>

                    <div className="mt-2 pb-3">
                      <div className="mb-1">
                        <h3 className="hover:text-sky-600 cursor-pointer text-[16px] font-[500]">
                          Most Beautiful Things to Do in Sidney with Your
                          Boyfriend
                        </h3>
                      </div>
                      <div className="mb-2 flex items-center">
                        <p className="text-[11px]">
                          <span className="font-bold cursor-pointer">
                            John Doe
                          </span>{" "}
                          - May 20, 2016
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              </div>
            </div>
          </section>

    </>
  );
};

export default Main;
