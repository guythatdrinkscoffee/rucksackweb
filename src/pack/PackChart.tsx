import {useCallback, useState} from "react";
import {Pack} from "./Pack";
import {ResponsiveContainer, PieChart, Sector, Pie, Cell, Legend} from "recharts";
import {chartColors} from "./PackChartColors";
import {toChartData, totalPrice, totalWeight} from "./PackOperations";
import {PackProps} from "./PackView";
const renderActiveShape = (props: any) => {
    const {
        cx,
        cy,

        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        name
    } = props;

    return (
        <g>
            <text x={cx} y={cy} textAnchor="middle">{name}</text>
            <text x={cx} y={cy} dy={18} textAnchor="middle">{payload.value.weight}</text>
            <text x={cx} y={cy} dy={18 * 2} textAnchor="middle">{payload.value.price}</text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius + 15}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 4}
                outerRadius={outerRadius + 8}
                fill={fill}
            />
        </g>
    );
};


const renderCustomLegend = (value: string, entry: any) => {
    return (
        <span style={{color: 'gray'}}>{value}</span>
    )
}

const PackChart = ({ pack } : PackProps ) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = useCallback(
        (_: any, index: number) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    const data = toChartData(pack.packItems)

    return (
        <ResponsiveContainer width={"100%"} height={375}>
            <PieChart>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    dataKey={"value.count"}
                    nameKey={"name"}
                    cx="50%"
                    cy="50%"
                    innerRadius= "50%"
                    outerRadius="90%"
                    isAnimationActive={true}
                    paddingAngle={4}
                    onMouseEnter={onPieEnter}>
                    {
                        data.map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} strokeWidth={1}/>
                        ))
                    }
                </Pie>
                <Legend
                    wrapperStyle={{
                        paddingTop: '40px'
                    }}

                    layout={'vertical'}

                    payload={[
                        {
                            value: `Total Price: ${pack.totalPrice}`, type: 'line', id: 'ID03', color: 'green'
                        },
                        {
                            value: `Total Weight: ${pack.totalWeight}`,  type:"line", id:'ID01', color: 'red'
                        },
                        {
                            value: `Base Weight: ${pack.baseWeight}`, type: "line", id:'ID02', color: 'blue'
                        }
                    ]}
                    formatter = {renderCustomLegend}
                />
            </PieChart>
        </ResponsiveContainer>
    )
}
export default PackChart