import { reviewList } from "../Interfaces/ClientReview";
import { ReviewCard } from "./ReviewCard";


export const HomeClientsReviewSection = () => {
    
    return (
        <div className="flex flex-col gap-[30px] lg:gap-[70px] items-center px-[20px] lg:px-[135px]">
            <h4 className="text-[28px] lg:text-[50px] font-semibold text-center">
                What Our Clients Are Saying
            </h4>

            <div className="hidden lg:block w-[100px] h-[100px] bg-[#D9D9D9]"></div>

            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-[30px]">
                {reviewList.map((review, key) => <ReviewCard key={key} review={review}/>)}
            </div>
        </div>
    )
};
