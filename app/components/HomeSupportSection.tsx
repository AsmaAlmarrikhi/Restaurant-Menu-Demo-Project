'use client';

import { useState } from "react";

export const HomeSupportSection  = () => {
    const [ email , setEmail ] = useState<string>("");

    const getEmailFromInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = event.target.value; 
        setEmail(newValue);
    };

    const supportSentAction = () => {
        let text = `Request received. Support will contact you at "${email}"\n(Demo app only)`;
        alert(text);
    };

    return (
        <div className="bg-white px-[20px] lg:px-[135px] py-[80px] flex flex-col items-center gap-[50px] ">
            <h4 className="text-[30px] lg:text-[70px] font-bold text-black">
                For more Support
            </h4>

            <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] w-full">
                <input 
                    type="email" 
                    placeholder="Enter Email" 
                    required 
                    onChange={(event) => getEmailFromInput(event)}
                    className="text-black font-semibold text-[14px] lg:text-[18px] px-[30px] py-[16px] lg:py-[20px] border-[1px] border-black rounded-[40px] w-full lg:w-[530px]" 
                       
                />
                <button className="bg-black rounded-[40px] py-[20px] px-[54px] text-[18px] font-semibold w-full md:w-fit" 
                        onClick={supportSentAction}>
                    Subscribe
                </button>
            </div>
        </div>
    );
};

