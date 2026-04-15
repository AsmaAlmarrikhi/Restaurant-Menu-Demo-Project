import { QualityData } from "../Interfaces/QualityData";

interface Props {
   data: QualityData;
}

export const QualityCard = (prop: Props) => {
    let qualityData = prop.data;
    return (
        <div className="flex flex-col items-center w-[270px]">
            <p className="text-[46px] lg:text-[56px]  font-bold">
                {qualityData.value}{qualityData.symbol}
            </p>
            
            <p className="text-[14px] lg:text-[18px]">
                {qualityData.type}
            </p>
        </div>
    );
};
