import React from "react";
import { CgMenuGridR } from 'react-icons/cg'
import { ImSearch } from 'react-icons/im'
import { Twitter, Facebook, Linkedin, Youtube } from 'react-feather';
import Link from "next/link";

const Header = () => {
  return (
    <>
      {/* mobile version */}
    <section>
    <header className="md:hidden">
        <div className="md:container sticky top-0 w-full">
          <div className="md:hidden flex items-center content-center justify-between p-2 bg-black text-white">
            <div className="cursor-pointer">
              <CgMenuGridR size={40} />
            </div>
            <div className="cursor-pointer">
             <Link href="/">
             <img
                src="5-mob.png"
                className=""
                style={{ width: "100%", height: "40px" }}
                alt=""
              />
             </Link>
            </div>
            <div className="cursor-pointer">
              <ImSearch size={30} />
            </div>
          </div>
        </div>
      </header>
    </section>
    {/* end mobile version */}
    
    
    {/* start desktop version */}
      <section className="container hidden md:block">
        <nav className="relative hidden md:block">
          {/* start top menu section */}
          <div className="">
            <div className="flex items-center justify-between p-4">
              <div className="flex space-x-6">
                <a href="#" className="text-[12px] font-[600]">
                  THURSDAY, MAY 11, 2023
                </a>
                <a href="#" className="text-[12px] font-[600]">
                  Sign in / Join
                </a>
                <a href="#" className="text-[12px] font-[600]">
                  Advertise
                </a>
                <a href="#" className="text-[12px] font-[600]">
                  Contact
                </a>
                <a href="#" className="text-[12px] font-[600]">
                  Buy Now
                </a>
              </div>

              <div className="flex space-x-4">
                <span className="text-sm cursor-pointer">
                  <Facebook size={15} />
                </span>
                <span className="text-sm cursor-pointer">
                  <Twitter size={15} />
                </span>
                <span className="text-sm sursor-pointer">
                  <Linkedin size={15} />
                </span>
                <span className="text-sm cursor-pointer">
                  <Youtube size={15} />
                </span>
              </div>
            </div>
          </div>
          {/* end of topmenu section */}

          {/* start logo and ads section */}
          <div className="flex items-center justify-between">
            <div className="flex">
            <Link href="/">
              <img src="dlogo.png" className="cursor-pointer" alt="" />
              </Link>
            </div>

            <div className="flex">
              <img src="ads2.jpg" className="cursor-pointer" alt="" />
            </div>
          </div>
          {/* end of logo and ads section */}
        </nav>
      </section>
       {/* end desktop version */}
    </>
  );
};

export default Header;
