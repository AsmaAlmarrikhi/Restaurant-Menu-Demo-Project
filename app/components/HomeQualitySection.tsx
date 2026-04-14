


export const HomeQualitySection = () => {
    
    return (<div className="flex flex-col items-center justify-between px-[20] lg:px-[135px] gap-[40px] lg:gap-[60px]">
        <h4 className="text-[26px] lg:text-[44px] font-semibold text-center">We believe in making quality food</h4>

        <div className="flex flex-col lg:flex-row  flex-wrap gap-[30px]">{qualityList.map((data, key) => <QualityCard key={key} data={data}/>)}</div>
    </div>)
};

interface Props {
   data: QualityData;
}

const QualityCard = (prop: Props) => {
    let qualityData = prop.data;
   return ( <div className="flex flex-col items-center w-[270px]">
       
        <p className="text-[46px] lg:text-[56px]  font-bold">{qualityData.value}{qualityData.symbol}</p>
         <p className="text-[14px] lg:text-[18px]">{qualityData.type}</p>
    </div>)
};

interface QualityData {
    type: string;
    value: number;
    symbol: string;
}

let qualityList: QualityData[] = [
    {
        type: "Happy Customers",
        value: 2,
        symbol: "M+",
    },
     {
        type: "Customer Satisfaction",
        value: 98,
        symbol: "%",
    },
     {
        type: "Our Branches",
        value: 20,
        symbol: "+",
    },
    {
        type: "Total Employees",
        value: 100,
        symbol: "+",
    },
]