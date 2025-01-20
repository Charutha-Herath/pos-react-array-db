import { Link } from "react-router";
import "../assets/Navigation.css";
import logo from "../assets/city super main.jpg";

export function Navigation() {
    return (
        <>
            <aside className="bg-gray-800 text-white w-64 min-h-screen fixed top-0 left-0 flex flex-col shadow-lg transform -translate-x-0">
                <div className="flex items-center justify-center h-20 bg-gray-900">
                    <img src={logo} alt="Logo" className="h-12" />
                </div>
                <nav className="flex-1">
                    <ul className="flex flex-col p-4 space-y-4">
                        <li>
                            <Link className="custom-link block" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="custom-link block" to="/customer">
                                Customer
                            </Link>
                        </li>
                        <li>
                            <Link className="custom-link block" to="/items">
                                Item
                            </Link>
                        </li>
                        <li>
                            <Link className="custom-link block" to="/orders">
                                Orders
                            </Link>
                        </li>
                        <li>
                            <Link to="/orderDetail" className="bg-blue-500 text-white p-3 rounded shadow-lg hover:bg-blue-600 transition block text-center">
                                New Order
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}
