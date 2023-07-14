import React from "react";
import { CgMenuGridR } from 'react-icons/cg'
import { ImSearch } from 'react-icons/im'
import { Search, Twitter, Facebook, Linkedin, Youtube, MessageSquare, Grid } from 'react-feather';
import { AiOutlineStar } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white p-6">
        <div className="md:grid md:grid-cols-3">
          <div className="text-center md:text-left mb-6">
            <div className="mb-3 grid place-content-center md:place-content-start">
              <img className="" src="logo.png" alt="" />
            </div>
            <div className="mb-3">
              <p>
                Newsmag is your news, entertainment, music fashion website. We
                provide you with the latest breaking news and videos straight
                from the entertainment industry
              </p>
            </div>
            <div className="mb-3">Contact us: contact@yoursite.com</div>
            <div className="mb-3">Social Media</div>
          </div>
          <div className="mb-6">
            <section>
              <heading className="">
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className=" bg-white rounded-sm text-black text-[11px] font-bold px-3">
                        Even More Newsr
                      </p>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div class="flex flex-row mt-4">
                      <div className="mr-3">
                        <img src="ff-photo-2.jpg" alt="" />
                      </div>
                      <div>
                        <p className="hover:text-sky-600 text-[13px] cursor-pointer">
                          Travelling with Style on the Capricorn Coast
                        </p>
                        <p className="text-[11px] mt-1">May 20, 2016</p>
                      </div>
                    </div>

                    <div class="flex flex-row mt-4">
                      <div className="mr-3">
                        <img src="ff-photo-2.jpg" alt="" />
                      </div>
                      <div>
                        <p className="hover:text-sky-600 text-[13px] cursor-pointer">
                          Travelling with Style on the Capricorn Coast
                        </p>
                        <p className="text-[11px] mt-1">May 20, 2016</p>
                      </div>
                    </div>

                    <div class="flex flex-row mt-4">
                      <div className="mr-3">
                        <img src="ff-photo-2.jpg" alt="" />
                      </div>
                      <div>
                        <p className="hover:text-sky-600 text-[13px] cursor-pointer">
                          Travelling with Style on the Capricorn Coast
                        </p>
                        <p className="text-[11px] mt-1">May 20, 2016</p>
                      </div>
                    </div>
                  </div>
                </div>
              </heading>
            </section>
          </div>
          <div>
            <section>
              <heading className="">
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className=" bg-white rounded-sm text-black text-[11px] font-bold px-3">
                        Popular Category
                      </p>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div class="flex items-center justify-between mt-4 cursor-pointer hover:text-sky-500">
                      <div className="text-[13px]">Video Tutorials</div>
                      <div className="text-[13px]">20</div>
                    </div>

                    <div class="flex items-center justify-between mt-4 cursor-pointer hover:text-sky-500">
                      <div className="text-[13px]">Fashion</div>
                      <div className="text-[13px]">9</div>
                    </div>
                    <div class="flex items-center justify-between mt-4 cursor-pointer hover:text-sky-500">
                      <div className="text-[13px]">Lifstyle</div>
                      <div className="text-[13px]">8</div>
                    </div>
                    <div class="flex items-center justify-between mt-4 cursor-pointer hover:text-sky-500">
                      <div className="text-[13px]">Technology</div>
                      <div className="text-[13px]">11</div>
                    </div>
                    <div class="flex items-center justify-between mt-4 cursor-pointer hover:text-sky-500">
                      <div className="text-[13px]">Food</div>
                      <div className="text-[13px]">19</div>
                    </div>
                    <div class="flex items-center justify-between mt-4 cursor-pointer hover:text-sky-500">
                      <div className="text-[13px]">Culture</div>
                      <div className="text-[13px]">5</div>
                    </div>
                  </div>
                </div>
              </heading>
            </section>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
