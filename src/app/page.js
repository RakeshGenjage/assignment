"use client";
import React, { useState } from "react";
import LineChartWithGradiant from "@/app/components/charts/linechartwithshadow1";
import periodData from "./components/CombinedData/period";
export default function Index() {
  const period = periodData;
  return (
    <>
      <div className="xl:mt-[1.198vw] mt-5 ml-4 mr-4">
        <div>
          <div className="mt-[30px] xl:mt-[36px] lg:mt-[36px] 3xl:mt-[1.875vw] mb-[300px  ]">
            <div className="grid grid-cols-2 gap-[24px] 3xl:gap-[1.25vw] bg-white border border-[#E4E7EC] shadow-card rounded-2xl 3xl:rounded-[0.833vw]">
              <div className="min-h-96">
                <div className="p-4 text-lg font-semibold">Drawdown Period</div>
                <LineChartWithGradiant />
              </div>

              <div className="p-4">
                <table className="min-h-96 w-full border-collapse border border-gray-300 rounded-lg">
                  <thead className="bg-gray-200 ">
                    <tr>
                      <th className="text-center py-3 border border-gray-300">
                        Period
                      </th>
                      <th className="text-center py-3 border border-gray-300">
                        Max. DD
                      </th>
                      <th className="text-center py-3 border border-gray-300">
                        Days
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {period.map((p, index) => (
                      <tr key={index}>
                        <td className="text-center border border-gray-300">
                          {p.Start_Date} - {p.End_Date}
                        </td>
                        <td className="text-center border border-gray-300 text-red-400">
                          {p.Max_Drawdown.toFixed(2)}
                        </td>
                        <td className="text-center border border-gray-300">
                          {p.Drawdown_days}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
