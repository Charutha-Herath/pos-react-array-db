import "../assets/Navigation.css";
import logo from "../assets/city super main.jpg";

export function Navigation() {
    return (
        <>
            <aside className="bg-red-700 text-white w-64 min-h-screen fixed top-0 left-0 flex flex-col shadow-xl">
                {/* Logo Section */}
                <div className="flex items-center justify-center h-20 bg-red-900">
                    <img src={logo} alt="Logo" className="h-12 rounded-full shadow-lg" />
                </div>
                {/* Navigation Menu */}
                <nav className="flex-1">
                    <ul className="flex flex-col p-4 space-y-4">
                        <li>
                            <a className="custom-link block" href="/">
                                <i className="bx bx-home-alt mr-3"></i> Home
                            </a>
                        </li>
                        <li>
                            <a className="custom-link block" href="/customer">
                                <i className="bx bx-user mr-3"></i> Customer
                            </a>
                        </li>
                        <li>
                            <a className="custom-link block" href="/items">
                                <i className="bx bx-box mr-3"></i> Item
                            </a>
                        </li>
                        <li>
                            <a className="custom-link block" href="/orders">
                                <i className="bx bx-cart mr-3"></i> Orders
                            </a>
                        </li>
                        <li>
                            <a className="custom-action-link block text-center" href="/orderDetail">
                                <i className="bx bx-plus-circle mr-2"></i> New Order
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}
