import React from "react";

interface RatingQuestionProps {
  label: string; 
  name: string; 
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  leftLabel: string;
  rightLabel: string;
}

const RatingQuestion: React.FC<RatingQuestionProps> = ({
  label,
  name,
  value,
  onChange,
  leftLabel,
  rightLabel,
}) => {
  return (
    <div className="border rounded-lg p-5 font-semibold text-gray-600">
      <p className="font-semibold mb-2">{label}</p>
      <div className="flex justify-between">
        {[1, 2, 3, 4, 5].map((num) => (
          <label key={num} className="flex flex-col items-center">
            <input
              type="radio"
              name={name}
              value={num}
              checked={value === String(num)}
              onChange={onChange}
              required
            />
            <span>{num}</span>
          </label>
        ))}
      </div>
      <div className="flex justify-between text-sm">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  );
};

export default RatingQuestion;
