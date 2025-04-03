import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { CheckCircle, XCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

const ResultSection = ({ score, total }) => {
  const { width } = useWindowSize();
  const percentage = (score / total) * 100;
  const isPassed = percentage >= 50;
  const [showConfetti, setShowConfetti] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView && isPassed) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // 5 seconds of confetti
    }
  }, [inView, isPassed]);

  return (
    <div
      ref={ref}
      className="bg-white p-6 rounded-2xl shadow-lg max-w-3xl mx-auto text-center border border-gray-200 relative overflow-hidden w-full"
    >
      
      

      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          <Confetti
            width={width}
            height={200}
            numberOfPieces={150}
            recycle={false}
            colors={["#8AAAE5", "#5F85DB"]}
          />
        </div>
      )}

      



      <div className="flex flex-col items-center gap-2">
        {isPassed ? (
          <CheckCircle size={40} className="text-[#8AAAE5]" />
        ) : (
          <XCircle size={40} className="text-red-500" />
        )}
        <h3 className={`text-2xl font-semibold ${isPassed ? "text-gray-900" : "text-red-600"}`}>
          {isPassed ? "Congratulations! You Passed" : "Better Luck Next Time"}
        </h3>
      </div>

      




      <p className="text-gray-600 mt-3 text-lg">
        Final Score: <span className="font-semibold text-gray-900">{score} / {total}</span>
      </p>

      
      



      <div className="relative w-full h-4 bg-gray-200 rounded-full mt-4 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${inView ? "w-full" : "w-0"}`}
          style={{
            width: `${percentage}%`,
            background: isPassed
              ? "linear-gradient(to right, #8AAAE5, #5F85DB)"
              : "linear-gradient(to right, #FF6B6B, #D63031)",
          }}
        />
      </div>

      




      
      <p className="text-sm text-gray-500 mt-4">
        {isPassed ? "Great job! Keep pushing forward!" : "Review your answers and try again!"}
      </p>
    </div>
  );
};

export default ResultSection;
