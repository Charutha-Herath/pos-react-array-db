import {useSelector} from "react-redux";
import {useState} from "react";
import {Item} from "../models/Item.ts";
import AddItemModal from "../components/modal/AddItem.tsx";
import UpdateItemModal from "../components/modal/UpdateItem.tsx";
import AddButton from "../components/AddButton.tsx";


export function ItemDash(){
    const items = useSelector(state => state.item.items);
    const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);

    const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);

    const [selectedItem,setSelectedItem] = useState<Item|null>(null);

    const showAddItem=()=>{
        setAddModalOpen(true);

    }
    const showUpdateItem=(item:Item)=>{
        setSelectedItem(item);
        setUpdateModalOpen(true);

    }


    return (
        <>
            <div className="flex flex-col items-center bg-gray-50 p-8 min-h-screen" style={{marginLeft: '250px'}}>
                {/* Header Section */}
                <div className="w-full mb-8">
                    <div className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 text-white p-6 rounded-lg shadow-md">
                        <h1 className="text-5xl font-bold ">Item Dashboard</h1>
                        <p >Manage your items and inventory with ease.</p>
                    </div>
                </div>

                {/* Add Button */}
                <div className="w-full flex justify-end mb-6">
                    <AddButton handleModal1={showAddItem}/>
                </div>

                {/* Items Table */}
                <div className="overflow-hidden rounded-lg shadow-lg w-full bg-white">
                    <table className="table-auto w-full">
                        {/* Table Header */}
                        <thead className="bg-red-500 text-white text-lg">
                        <tr>
                            <th className="px-6 py-4 text-left">Item Name</th>
                            <th className="px-6 py-4 text-left">Desc</th>
                            <th className="px-6 py-4 text-left">Qyt</th>
                            <th className="px-6 py-4 text-left">Price</th>
                        </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                        {items.map((item: Item) => (
                            <tr
                                key={item.itemCode}
                                className="hover:bg-blue-100 cursor-pointer transition duration-200"
                                onClick={() => showUpdateItem(item)}
                            >
                                <td className="px-6 py-4 border-b border-gray-200">{item.desc}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{item.author}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{item.qto}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{item.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Modals */}
                <AddItemModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)}/>
                <UpdateItemModal
                    isOpen={isUpdateModalOpen}
                    onClose={() => setUpdateModalOpen(false)}
                    selectedItem={selectedItem}
                />
            </div>


        </>
    )
}