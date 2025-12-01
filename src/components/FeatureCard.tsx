import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, text }) => {
  return (
    <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 hover:shadow-md transition">
      <div className="text-orange-500 text-2xl mb-2">{icon}</div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-500 text-sm">{text}</p>
    </div>
  );
};

export default FeatureCard;
