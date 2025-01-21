
import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addCustomer} from "../../reducer/CustomerSlice.ts";
import {v4} from "uuid";
import "../../assets/AddCustomerCard.css"

interface AddCustomerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddCustomerModal: React.FC<AddCustomerModalProps> = ({ isOpen, onClose }) => {
    const [name,setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = `CID-${v4()}`;
        const customer = {
            id,
            name,
            address,
            phone,
        }
        dispatch(addCustomer(customer))
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm">
            <div
                className="bg-gradient-to-br from-white via-blue-100 to-blue-50 p-8 rounded-lg shadow-2xl transform transition-transform duration-300 scale-95 sm:scale-100 animate-fadeIn"
            >
                {/* Modal Header */}
                <h2 className="text-3xl font-extrabold mb-6 text-blue-700 text-center border-b-2 border-blue-300 pb-3">
                    Add Customer
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    {/* Input Fields */}
                    <input
                        type="text"
                        placeholder="Name"
                        className="border-2 border-blue-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition shadow-sm"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="border-2 border-blue-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition shadow-sm"
                        required
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="border-2 border-blue-300 p-3 mb-6 w-full rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition shadow-sm"
                        required
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition shadow-md"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition shadow-md"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default AddCustomerModal;