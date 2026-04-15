import { qualityList } from "../Interfaces/QualityData";
import { QualityCard } from "./QualityCard";

export const HomeQualitySection = () => {
    return (
        <div className="flex flex-col items-center justify-between px-[20] lg:px-[135px] gap-[40px] lg:gap-[60px]">
            <h4 className="text-[26px] lg:text-[44px] font-semibold text-center">
                We believe in making quality food
            </h4>

            <div className="flex flex-col lg:flex-row  items-center justify-center flex-wrap gap-[30px]">
                {qualityList.map((data, key) => <QualityCard key={key} data={data}/>)}
            </div>
        </div>
    );
};
