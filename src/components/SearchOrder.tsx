const SearchOrder= (props,children)=>{
    return(
        <>
            <div className="container mx-auto mt-5 px-4">
                <div className="flex justify-between mb-6">
                    <div className="w-full sm:w-1/2 flex items-center justify-between">
                        {/* Search Form */}
                        <form className="flex w-full bg-white border rounded-lg shadow-sm p-1">
                            <input
                                className="form-control border-gray-300 text-sm p-1 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-3/4"
                                type="search"
                                placeholder="Search Here"
                                aria-label="Search"
                                id="searchBar"
                                onChange={(e) => props.setSearchTerm(e.target.value)}
                            />
                            <button
                                className="btn bg-blue-500 text-white text-sm px-3 py-1 rounded-r-lg hover:bg-blue-600 transition"
                                type="button"
                                id="searchButton"
                                onClick={props.handleSearch}
                            >
                                {props.children}
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}
export default SearchOrder;