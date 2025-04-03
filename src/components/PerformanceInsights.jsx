import { CheckCircle, AlertTriangle } from "lucide-react";

const PerformanceInsights = () => {
  return (
    <div className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-sm border border-gray-200 w-full">
      <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-3">Performance Insights</h3>
      <div className="space-y-2 text-sm md:text-base text-gray-600">
        <div className="flex items-center gap-2">
          <CheckCircle className="text-green-500" size={18} />
          <span>Strong in Math</span>
        </div>
        <div className="flex items-center gap-2">
          <AlertTriangle className="text-yellow-500" size={18} />
          <span>Needs improvement in GK</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="text-green-500" size={18} />
          <span>Good time management</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="text-green-500" size={18} />
          <span>Consistent accuracy in reasoning</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceInsights;
