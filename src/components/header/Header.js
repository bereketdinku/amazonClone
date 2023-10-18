import React, { useState } from "react";
import { logo } from "../../assets";
import { FaCaretDown } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
function Header() {
  const [showAll, setShowAll] = useState(false);
  const allItems = [
    { _id: "100", title: "Automotive" },
    { _id: "101", title: "Baby" },
    { _id: "102", title: "Beauty & Personal Care" },
    { _id: "103", title: "Boys Fashion" },
    { _id: "104", title: "Computers" },
    { _id: "105", title: "Deals" },
    { _id: "106", title: "Digital Music" },
    { _id: "107", title: "Electronics" },
    { _id: "108", title: "Girls Fashion" },
    { _id: "109", title: "Health & Fashion" },
    { _id: "110", title: "Home & Kitchen" },
    { _id: "111", title: "Industrial & Scientific" },
    { _id: "112", title: "Kindle Store" },
    { _id: "113", title: "Luggage" },
    { _id: "114", title: "Men's Fashion" },
    { _id: "115", title: "Movies & Tv" },
    { _id: "116", title: "Music,CDS & Vinyi" },
    { _id: "117", title: "Pet Supplies" },
    { _id: "118", title: "Prime Video" },
    { _id: "119", title: "Software" },
  ];
  return (
    <div className="w-full sticky bg-amazon_blue h-14 py-3 z-50">
      <div className="max-w-container mx-auto bg-amazon_blue text-white px-4  flex items-center gap-4">
        <div className="px-2 h-[5%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>
        <div className="headerHover hidden mdl:inline-flex">
          <FaLocationDot />
          <p className="text-sm text-lightText font-light">
            Deliver to{" "}
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Beki
            </span>
          </p>
        </div>
        <div className="h-10 rounded-md flex flex-grow relative ">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All <span></span>
            <FaCaretDown />
          </span>

          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none "
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <BiSearch />
          </span>
          {showAll && (
            <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">
              {allItems.map((item) => (
                <li
                  key={item._id}
                  className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col items-start justify-center headerHover">
          <p className="text-xs mdl:text-xs mdl:text-lightText text-lightText font-light">
            Hello, sign in
          </p>
          <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex">
            Accounts & Lists{" "}
            <span>
              {" "}
              <FaCaretDown />
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        <div className="flex items-start justify-center headerHover relative">
          <FiShoppingCart />
          <p className="text-xs font-semibold mt-3 text-whiteText">
            Cart{" "}
            <span className="absolute text-xs -top-0 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
              0
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
