

const AddButton = (props,children) => {

    return (
        <div className="container mx-auto mt-5">
            <div className="flex justify-end mb-3">
                {/* Add Button */}
                <button
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all"
                    onClick={props.handleModal1}
                >
                    <i className="bx bx-plus-circle text-2xl"></i>
                    Add
                </button>
            </div>
        </div>

    );
};

export default AddButton;