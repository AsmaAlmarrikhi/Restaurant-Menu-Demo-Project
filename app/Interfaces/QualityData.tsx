
export interface QualityData {
    type: string;
    value: number;
    symbol: string;
};

export let qualityList: QualityData[] = [
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
];