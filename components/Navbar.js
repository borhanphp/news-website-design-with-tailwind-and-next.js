import React from "react";
import { Search } from "react-feather";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  return (
    <>
      <main className="hidden md:block text-sm sticky top-0 z-50 ">
        <div className="container mx-auto ">
          <nav className="relative hidden md:block">
            {/* start main menu section */}

            <div className="flex items-center justify-between bg-black mt-3 border-t-4 border-t-sky-500">
           <div className="flex items-center">
           <div className="pl-2 cursor-pointer hidden sticky:block"><img src="5-mob.png" className="w-[100px]" alt=""/></div>
              <div className="flex space-x-6">
                <ul className="ml-2 exp">
                  <li className="group p-4 bg-black hover:bg-white text-white hover:text-black inline-block font-bold">
                    <p className="cursor-pointer">NEWS</p>
                    <div className="hidden group-hover:block absolute mt-4 z-10 p-0 ml-[-24px]">
                      <MegaMenu />
                    </div>
                  </li>
                  <li className="p-4 bg-black hover:bg-white cursor-pointer text-white hover:text-black inline-block font-bold">
                    FASHION
                  </li>
                  <li className="p-4 bg-black hover:bg-white cursor-pointer text-white hover:text-black inline-block font-bold">
                    TECH
                  </li>
                  <li className="p-4 bg-black hover:bg-white cursor-pointer text-white hover:text-black inline-block font-bold">
                    TRAVEL
                  </li>
                  <li className="p-4 bg-black hover:bg-white cursor-pointer text-white hover:text-black inline-block font-bold">
                    VIDEO
                  </li>
                  <li className="p-4 bg-black hover:bg-white cursor-pointer text-white hover:text-black inline-block font-bold">
                    FEATURES
                  </li>
                  <li className="p-4 bg-black hover:bg-white cursor-pointer text-white hover:text-black inline-block font-bold">
                    HOMEPAGE
                  </li>
                </ul>
              </div>
           </div>

              <div className="flex space-x-6">
                <span className="text-white mr-4 font-bold cursor-pointer">
                  <Search />
                </span>
              </div>
            </div>
            {/* end main menu section */}
          </nav>
        </div>
      </main>
    </>
  );
};

export default Navbar;
