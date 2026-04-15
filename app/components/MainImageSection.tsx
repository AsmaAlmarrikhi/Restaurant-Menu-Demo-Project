import Image from "next/image";
import Background from '../images/Background.png';

export const MainImageSection = () => {
  return (  
    <div className=" w-[100vw] min-h-[80vh] max-h-[100vh]">
      
      <Image
        src={Background}
        alt="Main Background Image"
        width={2000}
        height={2000}
        className="absolute w-full h-[100vh] = top-[0px] lg:top-[62px] -z-100 object-cover "
      />

      <div className="bg-black opacity-60 md:opacity-0 w-full h-full absolute -z-99 top-[0px] lg:top-[62px] ">
        {/* --------------- overlay Black Color Div For Small Screen Only --------------- */}
      </div>

      <div className="lg:absolute top-[200px] px-[20px] lg:left-[135px]  lg:p-0">
        <div className="text-[29px] lg:text-[60px] font-black">
          Welcome! <br/>
          We Made Delicious <br/>
          Food for You  
        </div> 

        <p className="mt-2.5 text-[14px] lg:text-[20px] w-full lg:w-[510px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
        </p>

        <button className="w-full lg:w-fit px-[50px] py-[20px] rounded-4xl bg-white text-(--main-color) mt-10 text-[18px] font-bold">
          Order Online
        </button>
      </div>

    </div>
  )
};