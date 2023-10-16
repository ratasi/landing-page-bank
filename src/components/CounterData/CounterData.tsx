"use client"
import CountUp from "react-countup";
import { MotionTransition } from "../MotionTransition";
import { dataCounter } from "./CounterData.data";

export function CounterData() {
    return (
        <MotionTransition className="max-w-5xl py-10 mx-auto md:py-64">
            <div className="justify-between md:flex">
                {dataCounter.map(({ id, startNumber, endNumber, text }) => (
                    <div key={id} className="py-5 text-2xl text-center md:text-left">
                        +
                        <CountUp start={startNumber} end={endNumber} duration={1.5} enableScrollSpy />
                        {" "}
                        <span className="degradedBlue bg-blueLight">{text}</span>
                    </div>
                ))}
            </div>
        </MotionTransition>
    )
}
