import {Customer} from "../models/Customer.ts";
import {useSelector} from "react-redux";
import {useState} from "react";
import AddCustomerModal from "../components/modal/AddCustomer.tsx";
import UpdateCustomerModal from "../components/modal/UpdateCustomer.tsx";
import AddButton from "../components/AddButton.tsx";


export function CustomerDash(){
    const customers = useSelector(state => state.customer.customers)
    const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);
    const [selectedCustomer,setSelectedCustomer] = useState<Customer | null>(null);

    function showUpdateCustomer(customer: Customer) {
        setSelectedCustomer(customer)
        setUpdateModalOpen(true);

    }

    function showAddCustomer() {
        setAddModalOpen(true);
    }
    return (
        <>
            <div className="flex">
                {/* Main Content with Left Space for Navbar */}
                <div className="flex-1 ml-64 p-8">
                    {/* Page Header */}
                    {/* Page Header */}
                    <div className="mb-8">
                        <div className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 text-white p-6 rounded-lg shadow-md">
                            <h1 className="text-5xl font-extrabold tracking-wide text-center">Customers</h1>
                            <p className="text-lg font-medium text-center mt-2">
                                Manage all your customer details in one place.
                            </p>
                        </div>
                    </div>


                    {/* Add Button */}
                    <div className="flex justify-end mb-6">
                        <AddButton handleModal1={showAddCustomer}/>
                    </div>

                    {/* Customer Table */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
                            {/* Table Header */}
                            <thead className="bg-red-500 text-white text-lg">
                            <tr>
                                <th className="px-6 py-4 text-left border border-gray-300">Name</th>
                                <th className="px-6 py-4 text-left border border-gray-300">Address</th>
                                <th className="px-6 py-4 text-left border border-gray-300">Phone</th>
                            </tr>
                            </thead>
                            {/* Table Body */}
                            <tbody>
                            {customers.map((customer: Customer) => (
                                <tr
                                    key={customer.id}
                                    className="hover:bg-red-100 cursor-pointer"
                                    onClick={() => showUpdateCustomer(customer)}
                                >
                                    <td className="px-6 py-4 border border-gray-300">{customer.name}</td>
                                    <td className="px-6 py-4 border border-gray-300">{customer.address}</td>
                                    <td className="px-6 py-4 border border-gray-300">{customer.phone}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Modals */}
                <AddCustomerModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)}/>
                <UpdateCustomerModal
                    isOpen={isUpdateModalOpen}
                    onClose={() => setUpdateModalOpen(false)}
                    selectedCustomer={selectedCustomer}
                />
            </div>

        </>
    )
}