"use client";

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { SensorData } from "../types/sensorData";

export default function SensorDataGraph({ data }: { data: SensorData[] }) {
    return (
        <div style={{ width: "100%", height: 350 }}>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray={"3 3"} vertical={true} />
                    <XAxis dataKey={"timestamp"} tickFormatter={value => new Date(value).toLocaleTimeString()} />
                    <YAxis unit="°C" />
                    <Tooltip labelFormatter={label => new Date(label).toLocaleString()} />
                    <Legend />
                    <Line name="Temperature" type={"monotone"} stroke="#70163c" dataKey={"temp"} dot={false} strokeWidth={2} />
                    <Line name="Vibration" type={"monotone"} dataKey={"vibration"} stroke="#4d79ff" dot={false} strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}