import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

const QuestionsSection = ({ questions, userAnswers }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-200 w-full max-w-7xl mx-auto mt-4 sm:mt-6 text-gray-900">
      <h2 className="text-lg sm:text-xl font-semibold text-black text-center mb-3 sm:mb-4">
        Question Review
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {questions.map((question, index) => {
          const userAnswer = (userAnswers[index] || "Not Attempted").trim().toLowerCase();
          const correctAnswer = question.correctAnswer.trim().toLowerCase();
          const isCorrect = userAnswer === correctAnswer;

          return (
            <div
              key={index}
              className="p-4 sm:p-5 border rounded-lg bg-gray-50 flex flex-col gap-3 transition-all duration-300 hover:shadow-md hover:bg-gray-100 hover:-translate-y-1"
            >
              <h3 className="font-medium sm:font-semibold text-gray-800 text-sm sm:text-base">
                {index + 1}. {question.question}
              </h3>

              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <CheckCircle className="text-green-600" size={20} />
                ) : (
                  <XCircle className="text-red-600" size={20} />
                )}
                <span
                  className={`font-medium text-sm sm:text-base ${
                    isCorrect ? "text-green-600" : "text-red-600"
                  }`}
                >
                  Your Answer: {userAnswers[index] || "Not Attempted"}
                </span>
              </div>

           
           

           
              <div className="flex flex-col gap-2">
                {question.options.map((option, optIndex) => {
                  const normalizedOption = option.trim().toLowerCase();
                  const isUserAnswer = normalizedOption === userAnswer;
                  const isCorrectOption = normalizedOption === correctAnswer;

                  return (
                    <span
                      key={optIndex}
                      className={`px-3 sm:px-4 py-2 rounded-lg border text-xs sm:text-sm text-center font-medium w-full ${
                        isCorrectOption
                          ? "bg-green-200 text-green-800 border-green-500"
                          : isUserAnswer
                          ? "bg-red-200 text-red-800 border-red-500"
                          : "bg-gray-200 text-gray-700 border-gray-300"
                      }`}
                    >
                      {option}
                    </span>
                  );
                })}
              </div>

              <p className="text-xs sm:text-sm text-gray-600">
                Correct Answer: <span className="font-semibold">{question.correctAnswer}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionsSection;
