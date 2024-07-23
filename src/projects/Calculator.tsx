/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";

import { evaluate } from "mathjs";
import React, { useState } from "react";

import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";

export default function Calculator() {
  const [enterValues, setEnterValues] = useState<string>("");
  const [outPutValues, setOutputValues] = useState<string>("");

  const calculatedValues = (value: string) => {
    if (value === "AC") {
      setEnterValues("");
      setOutputValues("");
    } else if (value === "=") {
      try {
        setOutputValues(evaluate(enterValues).toString());
      } catch (error) {
        setOutputValues("Error");
      }
    } else {
      setEnterValues(enterValues + value);
    }
  };

  return (
    <div className="bg-[#4b3d3d]  h-full w-full items-center p-5">
      <h1 className="mb-3 lg:w-[30%] h-10 flex items-center justify-center text-2xl bg-gray-950 text-white rounded-tr-full rounded-bl-full  m-auto px-10">
        Next Calculator
      </h1>
      <div className="h-[90%] lg:w-[30%] rounded-md drop-shadow-2xl p-5 bg-slate-700 m-auto">
        <CalculatorDisplay
          entervalues={enterValues}
          outPutValues={outPutValues}
        />
        <CalculatorButton calculatedValues={calculatedValues} />
      </div>
    </div>
  );
}
