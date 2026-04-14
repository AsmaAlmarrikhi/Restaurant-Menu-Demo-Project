'use client';
import Image from "next/image";
import Logo from '../images/Logo.png';
import CartIcon from '../images/CartIcon.png';
import SearchIcon from '../images/SearchIcon.png';
import Link from "next/link"
import { RouterPath } from "../Helpers/RouterPath";
import { useState } from "react";

export const NavBar = () => {

    const [ isOpen, setIsOpen] = useState<Boolean>(false);

    const burgerMenuItemStyle = "bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm m-0.5"

    const onClickBurgerMenu = () => {
        setIsOpen(!isOpen);
    };

    const dismissBurgerMenuOnLinkClick = () => {
        if (isOpen) {
             setIsOpen(false);
        }
    };
    const navLinkStyle = `${ isOpen ? 'w-full  bg-(--french-castle-tint-400) font-semibold border-b border-             (--french-castle-shade-100) lg:bg-white/0 lg:border-0  ' : ''} p-4 text-(--blog-text) transition-all duration-400 text-sm lg:w-fit`


    const NavItemFisrtRow = () => {

        return  <div className={`${ isOpen ? 'flex mt-2  w-full bg-(--main-color) gap-4' : 'hidden'} lg:flex flex-col  items-center justify-center  
         text-center  transition-all duration-300 ease-in-out z-10  lg:flex-row lg:justify-between lg:h[52px] lg:gap-6 `} >
           <Link href={RouterPath.Home} className="hidden lg:block p-4 lg:p-1 size-4.5  w-full lg:w-auto ">Welcome</Link>
            <Link  href={RouterPath.OurMenu} className="p-4 lg:p-1 size-4.5  w-full  lg:w-auto">Our Menu</Link>
            <Link  href={RouterPath.Franchise} className="p-4 lg:p-1 size-4.5  w-full  lg:w-auto">Franchise</Link>
            <Link  href={RouterPath.Contact} className="p-4 lg:p-1 size-4.5  w-full  lg:w-auto">Contact</Link>
         </div>
    }

    const CheckOutLink = () => {
        return (
              <Link  href={RouterPath.CheckOut} className="">
                    <div className="relative">
                        <Image
                            className="top-0 w-[34px] h-[34px] object-cover "
                            src={CartIcon}
                            alt="Vercel logomark"
                            width={34}
                            height={34}
                            />
                        <p className="bg-[#FF0000] absolute w-[16px] h-[16px] rounded-[8px] text-[10px] text-center top-[-2] right-[-2]">2</p>
                    </div>
                </Link>
        );
    };
    const NavItemSecondRow = () => {
        return <div className={`${ isOpen ? 'flex mt-2 ' : 'hidden' } lg:flex flex-col  lg:flex-row justify-between items-center  h-auto gap-4 lg:gap-8 transition-all duration-300 ease-in-out z-10 pt-4 lg:pt-0 `}>
              <div className="hidden lg:block">
                <CheckOutLink/>
              </div>
                
                <button className="">
                    <Image
                        className="w[28.33px] h[28.3px]"
                        src={SearchIcon}
                        alt="Vercel logomark"
                        width={28.33}
                        height={28.33}
                        />
                </button>

                <button className="lg:bg-white text-center lg:text-(--main-color) p-4 lg:p-3 lg:rounded-4xl">
                    Become a Member
                </button>
        </div>
    };
    
    return (
        <div className="relative flex flex-col gap-[10px] lg:gap-0  mt-[30px]">

            <div className={` ${ isOpen ? 'w-full' : ''} flex flex-row justify-center lg:justify-around items-center lg:h-[128px] px-4 lg:px-0 bg-[#ffffff00]`}>

                {/* show the Nav Links only on Large screen  */}
                <div className="hidden lg:block " >
                    <NavItemFisrtRow/>
                 
                </div>
               
                {/* Website logo image */}
                <Link href={RouterPath.Home}>
                    <Image
                        className="h-[56px] w-fit lg:w[100px] lg:h[100px]"
                        src={Logo}
                        alt="Vercel logomark"
                        width={100}
                        height={100}
                    />
                </Link>

                {/* show the Nav Links only on Large screen  */}
                <div className="hidden lg:block" >
                    <NavItemSecondRow/>
                </div>
            </div>

            {/* Nav bar for small screen  */}
            <div className="flex justify-between items-center px-[20px] mb-[40px] lg:hidden">
                 
                 <button className="flex flex-col justify-center items-center lg:hidden " onClick={onClickBurgerMenu}>
                    <span className={`${burgerMenuItemStyle} ${isOpen ? 'rotate-45 translate-y-1.5  m-0' : '-translate-y-0.5  m-0.5' }`} />
                    <span className={`${burgerMenuItemStyle} ${isOpen ? 'opacity-0  m-0' : 'opacity-100  m-0.5' }`} />
                    <span className={`${burgerMenuItemStyle} ${isOpen ? 
                        '-rotate-45 -translate-y-1.5  m-0' : 'translate-y-0.5  m-0.5'
                        }`} />
                </button>
                <CheckOutLink/>
            </div>
            {/* show the Nav Links only on small screen  */}
            <div className="lg:hidden w-full bg-(--main-color) z-10 absolute top-[128px] " >
                <NavItemFisrtRow/>
                <NavItemSecondRow/>
            </div>
        </div>)
       
};

