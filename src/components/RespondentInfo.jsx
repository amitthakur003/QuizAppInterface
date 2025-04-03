import React from "react";
import { User, Calendar, Clock } from "lucide-react";

const RespondentInfo = ({ name, date, duration }) => {
  return (
    <div className="flex items-center gap-5 bg-gray-50 p-4 sm:p-5 rounded-xl border border-gray-200 shadow-md">




      
      <div className="p-3 bg-[#8AAAE5] rounded-full shadow-lg flex items-center justify-center">
        <User className="text-white" size={28} />
      </div>

     
     

     
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-gray-900 font-semibold text-base sm:text-lg">
          <User className="text-[#6C8CD5]" size={18} />
          <span>{name}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Calendar className="text-[#6C8CD5]" size={16} />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Clock className="text-[#6C8CD5]" size={16} />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default RespondentInfo;
