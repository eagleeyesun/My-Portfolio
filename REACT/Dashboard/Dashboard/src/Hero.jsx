import React, { useEffect, useState } from 'react'
import patient from './data'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    Legend
} from 'recharts'


const data = [
    {
        month: "Oct,2023",
        sys: 125,
        dys: 103,
    },
    {
        month: "Nov,2023",
        sys: 173,
        dys: 103,
    },
    {
        month: "Dec,2023",
        sys: 91,
        dys: 111,

    },
    {
        month: "Jan,2024",
        sys: 128,
        dys: 86,

    },
    {
        month: "Feb,2024",
        sys: 119,
        dys: 73,
    },
    {
        month: "Mar,2024",
        sys: 160,
        dys: 78,
    },
];

function Hero() {

    return (
        <div className='hero-container'>
            <div className='hero-intro'>
                <h3>Dignosis History</h3>
            </div>
            <div id='hero-chart'>
                <ResponsiveContainer width={"70%"} height={250}>
                    <div className='chart-intro'>
                        <h3>Blood Pressure</h3>
                        <p>Last 6 Months <img src="/expand-arrow.svg" alt="expand" /></p>
                    </div>
                    <LineChart data={data} >
                        <CartesianGrid horizontal={true} vertical={false} />
                        <XAxis dataKey="month" tick={{fontSize: 12}} interval={0}   />
                        <YAxis domain={[60, 180]} type="number" ticks={[60, 80, 100, 120, 140, 160, 180]} tick={{fontSize: 12}} />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="sys"
                            stroke="#8C6FE6"
                            activeDot={{ r: 8 }}
                        />
                        <Line 
                            type="monotone" 
                            dataKey="dys" 
                            stroke="#E66FD2" 
                            activeDot={{ r: 8 }} />
                    </LineChart>
                    <div className="chart-intro-2">
                        <div id='for-line'>
                            <p>Systolic</p>
                            <h3>160</h3>
                            <p>Higher than Average</p>
                        </div>
                        <div id='for-line-2'>
                            <p>Diastolic</p>
                            <h3>78</h3>
                            <p>Lower than Average</p>
                        </div>
                    </div>

                </ResponsiveContainer>

            </div>
            <div className="cards-container">
                <div className="cardOne">
                    <img src="/respiratory rate.svg" alt="Heart" />

                    <div className="card-intro1">
                        <p>Respiratory Rate</p>
                        <h4>20 bpm</h4>
                    </div>
                       <p>Normal</p>
                </div>
                <div className="cardTwo">
                    <img src="/temperature.svg" alt="" />
                    <div className="card-intro2">
                        <p>Temperature</p>
                        <h4>98.6°F</h4>
                    </div>
                        <p>Normal</p>
                </div>
                <div className="cardThree">
                    <img src="/HeartBPM.svg" alt="" />
                    <div className="card-intro3">
                        <p>Heart Rate</p>
                        <h4>78 bpm</h4>
                    </div>
                        <p>Lower than Average</p>
                </div>
            </div>
        </div>
    )
}


export default Hero
