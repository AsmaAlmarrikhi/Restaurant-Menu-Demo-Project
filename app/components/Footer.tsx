import Image from "next/image";
import { socailMediaLinks } from "../Interfaces/SocailLinks";
import Mastercard from '../images/Mastercard.png';
import AmericanExpress from '../images/AmericanExpress.png'
import Visa from '../images/Visa.png';

export const Footer = () => {
    let headlineStyle = "flex flex-col gap-[30px]"; 
    let linkStyle = "text-[18px] text-white";

    return (
        <div className=" flex flex-col mt-[150px] mb-[80px] px-[20px] lg:px-[135px] gap-[100px]">
            {/* -------------- First Section --------------  */}
            <div className="flex flex-col lg:flex-row flex-wrap gap-[103px]">

                    {/* --------------  Products Section --------------  */}
                 <div className={headlineStyle}>
                    <h6 className="text-[24px] font-semibold">Our Products</h6>
                   <div className="flex flex-col gap-[24px]">
                        <a href="\" target="_blank" className={linkStyle}>Our menus</a>
                        <a href="\" target="_blank" className={linkStyle}>Our burgers</a>
                        <a href="\" target="_blank" className={linkStyle}>Our times sides</a>
                        <a href="\" target="_blank" className={linkStyle}>Our naandwiches</a>
                   </div>
                 </div>

                  {/* --------------  legal information Section  -------------- */}
                 <div className={headlineStyle}>
                    <h6 className="text-[24px] font-semibold">legal information</h6>
                   <div className="flex flex-col gap-[24px]">
                        <a href="\" target="_blank" className={linkStyle}>Legal Notice</a>
                   </div>
                 </div>

                  {/* --------------  Contact us Section  -------------- */}
                 <div className={headlineStyle}>
                    <h6 className="text-[24px] font-semibold">Contact us</h6>
                   <div className="flex flex-col gap-[24px]">
                        <a href="\" target="_blank" className={linkStyle}>Contacts</a>
                        <a href="\" target="_blank" className={linkStyle}>Our addresses</a>
                        <a href="\" target="_blank" className={linkStyle}>Become a Times Square franchisee</a>
                   </div>
                 </div>

                   {/* --------------  We accept Section  -------------- */}
                 <div className={headlineStyle}>
                    <h6 className="text-[24px] font-semibold">We accept</h6>
                   <div className="flex flex-col justify-between items-start gap-[30px]">
                        <div className="flex gap-[20px]">
                             <Image 
                                src={Mastercard}
                                alt=""
                                width={100}
                                height={100}
                                loading="lazy"
                                className="w-auto h-[40px] object-contain"
                            />
                            <Image 
                                src={Visa}
                                alt=""
                                width={100}
                                height={100}
                                loading="lazy"
                                className="w-auto h-[40px] object-contain"
                            />
                        </div>
                
                        <Image 
                            src={AmericanExpress}
                            alt=""
                            width={100}
                            height={100}
                            loading="lazy"
                            className="w-auto h-[50px] object-contain"
                        />
                   </div>
                 </div>
                 

            </div>

            {/*  -------------- Second Section  --------------  */}
            <div className="flex flex-col gap-[28px] w-full">
                <div className="bg-[#4F4F4F] w-full h-[1px]"></div>
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="flex justify-center items-center gap-[20px]">
                        {socailMediaLinks.map((link, key) => 
                            <a key={key} href={link.url} target="_blank"> 
                                <Image 
                                    src={`/images/SocailMediaIcons/${link.icon}.png`}
                                    alt={link.name}
                                    width={30}
                                    height={30}
                                    loading="lazy"
                                    className="object-fill w-[30px] h-[30px]"
                                />
                            </a>
                        )}
                    </div>
                    <p className="text-white text-[18px] text-center">© 2024 Nayef All rights reserved.</p>
                </div>
            </div>


        </div>
    );
};



