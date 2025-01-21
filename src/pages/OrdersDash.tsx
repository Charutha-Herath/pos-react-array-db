
import {useState} from "react";
import SearchOrder from "../components/SearchOrder.tsx";
import {useDispatch, useSelector} from "react-redux";
import {Order} from "../models/Order.ts";
import {deleteOrder} from "../reducer/OrderSlice.ts";

export function OrdersDash(){
    const orders = useSelector(state => state.orders.orders);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = ()=>{
        //TODO: Handle search
    }
    const handleOrder = (order:Order)=>{
        const isConfirmed = window.confirm(`Do you want to delete this order? ${order.orderId}`);
        if(isConfirmed){
            dispatch(deleteOrder(order));
        }
    }
    return (
        <>
            <div className="flex flex-col bg-gray-50 p-8 min-h-screen" style={{marginLeft: '250px'}}>
                {/* Header Section */}
                <div className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 text-white p-6 rounded-lg shadow-md">
                    <h1 className="text-5xl font-bold ">Orders Dashboard</h1>
                    <p>Track and manage your orders effortlessly.</p>
                </div>

                {/* Search Bar Section */}
                <div className="flex justify-end mb-6">
                    <SearchOrder
                        handleSearch={handleSearch}
                        setSearchTerm={setSearchTerm}
                        className="w-full max-w-md"
                    >
                        Search
                    </SearchOrder>
                </div>

                {/* Orders Table */}
                <div className="overflow-hidden rounded-lg shadow-lg bg-white">
                    <table className="table-auto w-full">
                        {/* Table Header */}
                        <thead className="bg-red-500 text-white text-lg">
                        <tr>
                            <th className="px-6 py-4 text-left">Order ID</th>
                            <th className="px-6 py-4 text-left">Customer Name</th>
                            <th className="px-6 py-4 text-left">Date</th>
                            <th className="px-6 py-4 text-left">Total</th>
                            <th className="px-6 py-4 text-left">Discount</th>
                            <th className="px-6 py-4 text-left">Subtotal</th>
                        </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                        {orders.map((order: Order) => (
                            <tr
                                key={order.orderId}
                                className="hover:bg-blue-100 cursor-pointer transition duration-200"
                                onClick={() => handleOrder(order)}
                            >
                                <td className="px-6 py-4 border-b border-gray-200">{order.orderId}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{order.customerName}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{order.date}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{order.total}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{order.discount}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{order.subtotal}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}