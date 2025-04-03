import React from "react";
import { Clock, Calendar, TimerReset, Activity } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const TimerSummary = ({ startTime, endTime }) => {
  const formatTime = (time) =>
    time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  const totalSeconds = Math.floor((endTime - startTime) / 1000);
  const formattedTotalTime = `${String(Math.floor(totalSeconds / 60)).padStart(2, "0")}:${String(
    totalSeconds % 60
  ).padStart(2, "0")} min`;

  const timeUsed = totalSeconds;
  const timeRemaining = Math.max(3600 - timeUsed, 0);
  const usagePercentage = ((timeUsed / 3600) * 100).toFixed(1);

  const data = [
    { name: "Used", value: timeUsed },
    { name: "Remaining", value: timeRemaining },
  ];

  const COLORS = ["#8AAAE5", "#E0E0E0"];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full mx-auto border border-gray-300 flex flex-col space-y-6 h-auto">
     
     

      <div className="flex items-center gap-2 text-gray-900 text-xl font-semibold border-b pb-3">
        <Clock size={22} className="text-[#8AAAE5]" />
        <span>Test Summary</span>
      </div>

     
     

      <div className="space-y-4 text-gray-800 text-sm flex flex-col justify-center">
        <p className="flex items-center gap-2">
          <Calendar size={18} className="text-[#8AAAE5]" />
          <span className="font-medium">Date:</span>
          <span className="ml-auto text-gray-900">{startTime.toLocaleDateString()}</span>
        </p>
        <p className="flex items-center gap-2">
          <TimerReset size={18} className="text-[#8AAAE5]" />
          <span className="font-medium">Start:</span>
          <span className="ml-auto text-gray-900">{formatTime(startTime)}</span>
        </p>
        <p className="flex items-center gap-2">
          <Activity size={18} className="text-[#8AAAE5]" />
          <span className="font-medium">End:</span>
          <span className="ml-auto text-gray-900">{formatTime(endTime)}</span>
        </p>
        <p className="flex items-center gap-2 text-md font-semibold text-gray-900 border-t pt-2">
          <span>Total Time:</span>
          <span className="ml-auto text-[#8AAAE5]">{formattedTotalTime} ({usagePercentage}%)</span>
        </p>
      </div>

      
      
      
      <div className="w-full flex flex-col items-center justify-center">
        <ResponsiveContainer width={200} height={170}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={40}
              stroke="none"
             
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value} sec`} />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-between w-full px-10 mt-4 text-gray-900 font-medium">
          <span className="flex items-center gap-2"><div className="w-3 h-3 bg-[#8AAAE5] rounded-full"></div> Used</span>
          <span className="flex items-center gap-2"><div className="w-3 h-3 bg-[#E0E0E0] rounded-full"></div> Remaining</span>
        </div>
      </div>
    </div>
  );
};

export default TimerSummary;