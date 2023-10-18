import React, { useEffect } from "react";
import axios from "axios";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import { amazonData, productData } from "../../constants";
function Product() {
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 ">
      {amazonData.map((item) => (
        <div className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 flex flex-col gap-4 relative ">
          <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
            {item.category}
          </span>
          <div className="w-full h-auto flex items-center justify-center relative group">
            <img className="w-52 h-64 object-contain" src={item.image} />

            {/* <ul className="w-full h-36 bg-gray-100 absolute bottom-[210px] group-hover:bottom-0 duration-700 flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r hover:group-bottom-0 duration-700">
              <li className="productLi">Compare</li>
              <li className="productLi">
                Add to Cart{" "}
                <span>
                  <FaShoppingCart />
                </span>
              </li>
              <li className="productLi">
                View Details{" "}
                <span>
                  <MdOutlineLabelImportant />
                </span>
              </li>
              <li className="productLi">
                Add to Wish List{" "}
                <span>
                  <MdOutlineLabelImportant />
                </span>
              </li>
            </ul> */}
          </div>
          <div className="px-4 z-10 bg">
            <div className="flex items-center justify-between">
              <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                {item.title.substring(0, 20)}
              </h2>
              <p>{item.price} Birr</p>
            </div>
            <div>
              <p className="text-sm">{item.description.substring(0, 100)}...</p>
              <div className="text-yellow-500 flex flex-row">
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            </div>
            <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
