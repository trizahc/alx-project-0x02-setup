import { CardProps } from '@/interfaces';

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <h2 className="text-lg font-bold text-blue-600 mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
