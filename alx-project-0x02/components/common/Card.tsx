import { CardProps } from '../../interfaces'; // ✅ Correct path

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
