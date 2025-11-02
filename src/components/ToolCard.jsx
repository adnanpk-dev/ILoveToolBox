import { Link } from "react-router-dom";

const ToolCard = ({ title, description, icon, link }) => {
  return (
    <Link to={link}>
      <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
};

export default ToolCard;
