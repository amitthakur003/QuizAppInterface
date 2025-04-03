import React from "react";
import RespondentInfo from "./RespondentInfo";
import SummarySection from "./SummarySection";
import ResultSection from "./ResultSection";
import Header from "./Header";
import TimerSummary from "./TimerSummary";
import QuestionsSection from "./QuestionsSection";
import PerformanceInsights from "./PerformanceInsights";

const ReportDemo = () => {
  const startTime = new Date("2025-03-30T10:00:00");
  const endTime = new Date("2025-03-30T10:01:06");

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#8AAAE5] to-white p-6 lg:p-12">
      <div className="flex flex-col w-full max-w-7xl space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        <Header title="📑 Reasoning Test Report" className="text-center text-3xl font-semibold text-gray-800" />
        
        <RespondentInfo 
          name="Amit Thakur" 
          date="March 30, 2025"
          duration="1 min 6 sec"
          className="w-full"
        />
        
        <SummarySection className="w-full" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">
          <div className="w-full flex flex-col items-center">
            <TimerSummary startTime={startTime} endTime={endTime} className="w-full max-w-2xl p-6 bg-white rounded-2xl shadow-lg" />
          </div>
          
          <div className="flex flex-col gap-8 w-full">
            <ResultSection 
              score={4} 
              total={6} 
              className="p-8 bg-white rounded-2xl shadow-lg w-full max-w-2xl" 
            />
            <PerformanceInsights 
              insights={[
                "Strong in Math", 
                "Need to improve in GK", 
                "Good time management"
              ]} 
              className="p-8 bg-white rounded-2xl shadow-lg w-full max-w-2xl" 
            />
          </div>
        </div>
        
        <QuestionsSection 
          className="w-full"
          questions={[
            { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
            { question: "What is the capital of France?", options: ["Berlin", "Paris", "Madrid", "Rome"], correctAnswer: "Paris" },
            { question: "What is the square root of 16?", options: ["2", "3", "4", "5"], correctAnswer: "4" },
            { question: "What is 5 * 3?", options: ["10", "12", "15", "18"], correctAnswer: "15" },
            { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], correctAnswer: "Mars" },
            { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], correctAnswer: "Pacific Ocean" }
          ]}
          userAnswers={["4", "Paris", "5", "15", "Jupiter", "Pacific Ocean"]}
        />
      </div>
    </div>
  );
};

export default ReportDemo;
