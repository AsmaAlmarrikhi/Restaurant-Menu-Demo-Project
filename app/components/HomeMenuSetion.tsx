'use client';
import { useState } from "react";
import { MenuItemCard } from "./MenuItemCard";
import { menuItems } from "../Interfaces/MenuItem";

export const HomeMenuSetion = () => {
    const [ selected, setSlected ] = useState<string>("All");
    return (
    <div className="mx-[20px] lg:mx-[135px] flex flex-col items-center h-auto gap-[40px] lg:gap-[80px]">
        <h4 className="font-semibold text-[28px] lg:text-[50px]">Our Best & Delicious Menu</h4>

            {/* Category HStack */}
            <div className="overflow-x-scroll overflow-y-hidden lg:overflow-hidden lg:w-auto flex justify-stretch lg:justify-around w-full scrollbar-hide">
                {menuCategory.map((item, key) =>
                    <button 
                        className={`text-[16px] lg:text-[18px] px-[20px] py-[8px] whitespace-nowrap  ${item == selected ? "border-b-[4px] border-white rounded-[10px]": ""}`}
                        key={key} onClick={() => { setSlected(item) }}>
                          {item}
                    </button> )
              }
            </div>

         <div className="lg:grid lg:grid-cols-3 gap-[30px] ">
            {menuItems.map((item, key) => <MenuItemCard key={key} item={item}/>)}
         </div>
     
         <button className="bg-white text-(--main-color) rounded-[40px] px-[54px] py-[20px] w-full lg:w-fit">See All</button>
    </div>);
};


const menuCategory = ["All", "Bread", "Chiffon & Rolls", "Donut", "Pastry & Danish", "Cakes", "Cookies"]
