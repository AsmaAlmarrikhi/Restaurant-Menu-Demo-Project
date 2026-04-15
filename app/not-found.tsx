import Link from "next/link";
import { RouterPath } from "./Helpers/RouterPath";

export default function NotFound() {
    return (
      <div className="flex flex-col justify-center items-center gap-9 h-[70vh] px-[20px] lg:[135px]">
          <h1 className="text-6xl  lg:text-9xl font-extrabold">404</h1>
          <p className="text-2xl lg:text-4xl text-center">Oops! We can't find this page.</p>
          <Link href={RouterPath.Home} className="bg-white md:px-[40px] md:px-[56px] py-[20px] rounded-[40px] text-black w-full md:w-fit text-center mt-6"> Go back home</Link>
      </div>
    )
};