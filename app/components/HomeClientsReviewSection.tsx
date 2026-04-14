import Image from "next/image";
import Star from '../images/Star.png';
import ReviewComma from '../images/reviewComma.png';

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
    </div>)
};

interface Props {
    review: ClientReview;
};

export const ReviewCard = (prop: Props) => {
    let review = prop.review;
    let rateValue = Array.from(Array(review.rate).keys());

   return (
   <div className="flex flex-col gap-[30px] p-[30px]">
       <div className="flex flex-col gap-[20px]" >
            <div className="flex h-[74px] gap-[12px]">
                <Image 
                    src={`/images/ClientImages/${review.image}.png`}
                    alt={`${review.name} Photo`}
                    width={100}
                    height={100}
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
                            className="w-[12px] h-[12px]"
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="absolute bg-white opacity-20 h-[1px] w-full right-0 bottom-1 ml-[24px]"> </div>
                <div className="flex gap-[5px]">
                    <Image 
                        src={ReviewComma}
                        alt={`ReviewComma`}
                        width={10}
                        height={19}
                        className="w-[10px] h-[19px]"
                        />
                    <Image 
                        src={ReviewComma}
                        alt={`ReviewComma`}
                        width={10}
                        height={19}
                        className="w-[10px] h-[19px]"
                        />
                </div>
            </div>
       </div>
       
        <p>{review.reviewText}</p>
    </div>);
};


interface ClientReview {
    name: string;
    image: string;
    occupation: string;
    rate: number;
    reviewText: string;
}

let reviewList : ClientReview[] = [
    {
    name: "Michal Gun",
    image: "Michal_Gun",
    occupation: "Head of sales at Tesla ",
    rate: 5,
    reviewText: "There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable.",
    },
    {
    name: "Aleena White",
    image: "Aleena_White",
    occupation: "Accountant of Ozone ",
    rate: 5,
    reviewText: "There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable.",
    },
    {
    name: "Cries Lee",
    image: "Cries_Lee",
    occupation: "CEO Of Montee",
    rate: 5,
    reviewText: "There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable.",
    },
    {
    name: "Michal Gun",
    image: "Michal_Gun",
    occupation: "Head of sales at Tesla ",
    rate: 5,
    reviewText: "There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable.",
    },
    {
    name: "Aleena White",
    image: "Aleena_White",
    occupation: "Accountant of Ozone ",
    rate: 5,
    reviewText: "There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable.",
    },
    {
    name: "Cries Lee",
    image: "Cries_Lee",
    occupation: "CEO Of Montee",
    rate: 5,
    reviewText: "There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable.",
    },
]