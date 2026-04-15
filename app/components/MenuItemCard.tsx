import Image from "next/image";
import { it } from "node:test";
import ShoppingCart from '../images/shopping-cart.png';
import { MenuItem } from "../Interfaces/MenuItem";


interface Props {
    item: MenuItem
}
export const MenuItemCard = (prop: Props) => {
let item = prop.item;
    return (
        <div className="w-full h-auto lg: w-auto lg:h-[442px] flex flex-col items-center  gap-[20px] p-[20p]">
           
            <Image 
                src={`/images/menuImages/${item.imageName}.png`}
                alt={item.name}
                width={400}
                height={400}
                className="w-fit h-[240px] lg:h-[236px] object-contain"
            />

            <div className="flex flex-col gap-2">
                <p className="text-[20px] lg:text-[24px] text-white font-bold">{item.name}</p>
                <p className="text-[14px] lg:text-[16px]">{item.about}</p>
            </div>

            <div className="w-full flex justify-between items-center">
                <p className="text-[24px] font-bold text-white">${item.price}</p>
                <button>
                    <Image 
                        src={ShoppingCart}
                        alt="ADD To Cart"
                        width={40}
                        height={40}
                        className="p-[10px] rounded-[42px] border-white object-contain border-[1px]"
                    />
                </button>
            </div>

        </div>
    )
};