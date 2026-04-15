import Image from "next/image";
import Star from '../images/Star.png';
import ReviewComma from '../images/reviewComma.png';

import { ClientReview } from "../Interfaces/ClientReview";

interface Props {
    review: ClientReview;
};

export const ReviewCard = (prop: Props) => {
    let review = prop.review;
    let rateValue = Array.from(Array(review.rate).keys());

   return (
   <div className="flex flex-col gap-[30px] p-[30px] bg-(--card-color) rounded-[16px]"> 
        <div className="flex flex-col gap-[20px]" >
            <div className="flex h-[74px] gap-[12px]">
                <Image 
                    src={`/images/ClientImages/${review.image}.png`}
                    alt={`${review.name} Photo`}
                    width={100}
                    height={100}
                    loading="lazy"
                    className="w-[74px] h-[74px] object-cover  bg-white rounded-[37px]"
                />
                <div className="flex flex-col gap-2">
                    <p className="text-[18px] font-bold">{review.name}</p>
                    <p className="text-[14px]">{review.occupation}</p>
                    <div className="flex gap-[3px]">{rateValue.map((value) => 
                        <Image 
                            key={value}
                            src={Star}
                            alt={`${review.name} Photo`}
                            width={12}
                            height={12}
                            loading="lazy"
                            className="w-[12px] h-[12px]"
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="absolute bg-white opacity-20 h-[1px] w-full right-0 bottom-1 ml-[24px]">
                    {/* -------------------- line Shap --------------------  */}
                </div>

                <div className="flex gap-[5px]">
                    <Image 
                        src={ReviewComma}
                        alt={`ReviewComma`}
                        width={10}
                        height={19}
                        loading="lazy"
                        className="w-[10px] h-[19px]"
                    />

                    <Image 
                        src={ReviewComma}
                        alt={`ReviewComma`}
                        width={10}
                        height={19}
                        loading="lazy"
                        className="w-[10px] h-[19px]"
                    />
                </div>
            </div>
        </div>
    
        <p>{review.reviewText}</p>

    </div>);
};

