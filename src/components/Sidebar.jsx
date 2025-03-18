import { Link } from "react-router-dom";
import { FaHome, FaBox, FaShoppingCart } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-5">Dashboard</h2>
      <nav className="space-y-4">
        <Link to="/" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700">
          <FaHome /> Home
        </Link>
        <Link to="/products" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700">
          <FaBox /> Products
        </Link>
        <Link to="/orders" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700">
          <FaShoppingCart /> Orders
        </Link>
      </nav>
    </div>
  );
}
