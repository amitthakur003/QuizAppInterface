import React from "react";
import { Bell, Award, CheckCircle, Lightbulb, TrendingUp } from "lucide-react";

const SummarySection = () => {
  const summaryItems = [
    {
      icon: <Bell className="text-[#8AAAE5]" size={26} />,
      title: "Exam Successfully Completed",
      description: "Your performance has been recorded and analyzed.",
    },
    {
      icon: <Award className="text-[#6C8CD5]" size={26} />,
      title: "AI-Powered Evaluation",
      description:
        "This report is generated using advanced analytics by industry professionals with 7+ years of expertise.",
    },
    {
      icon: <TrendingUp className="text-green-600" size={26} />,
      title: "Performance Insights",
      description: "Your strengths and improvement areas have been identified to optimize learning.",
    },
    {
      icon: <Lightbulb className="text-yellow-500" size={26} />,
      title: "Keep Learning & Growing",
      description:
        "Review your answers, understand key concepts, and apply feedback for continuous skill enhancement.",
    },
    {
      icon: <CheckCircle className="text-blue-600" size={26} />,
      title: "Your Journey Continues",
      description: "Success is a process. Keep pushing your limits.",
    },
  ];

  return (
    <div className="mt-4 mb-5 bg-white p-6 rounded-xl border border-gray-300 shadow-lg space-y-5">
      {summaryItems.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          {item.icon}
          <div>
            <h3 className="text-gray-900 font-semibold text-md">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummarySection;
