import Image from 'next/image';
import AboutUs from '../images/AboutUs.png';
import PlayButton from '../images/Play_Button.png'; 

export const HomeAboutUSSection = () => {
    return (
    <div className="flex flex-col items-center justify-center  mx-[20px] lg:mx-[135px] gap-17.5 h-fit">
        <div className="w-full lg:w-[820px]">
            <h4 className="font-bold text-[28px] lg:text-[50px] text-center">Why We are Best Food Maker</h4>
            <p className="text-[14px] lg:text-[20px] text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem scrambled it to make a type specimen book.</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-stretch  gap-[84px] ">
            <p className="flex-1 text-[18px] leading-[30px] h-full">
                It is a long established fact that a reader will be distracted layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The normal distribution of letters, as opposed to using 'Content  Many desktop publishing packages and web page editors search for 'lorem ipsum' will uncover many web sites still in  humour and the like. <a href='/...'> <strong>Read More</strong></a> 
            </p>

            <div className="lg:flex-1 relative w-full lg:w-auto h-[40vh] lg:h-auto">
                <Image src={AboutUs}
                    alt="About us image"
                    width={300}
                    height={300}
                    className="w-full h-full rounded-[12px] absolute inset-0 object-right lg:object-cover"
                />

                <button className="absolute inset-0 w-[92px] h-[92px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image src={PlayButton}
                    alt="About us image"
                    width={300}
                    height={300}
                    />
                </button>
            </div>
        </div>

    </div>);
};