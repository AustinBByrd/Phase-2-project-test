import React from "react";
import { useShopContext } from "../context/shop-context";
import SearchIcon from '@mui/icons-material/Search';


function Search({inputStyles}) {
    const {products, setSearchResults, setResultsList} = useShopContext()

    const handleSearchChange = (e) => {
        if(!e.target.value) {
            setSearchResults(products)
            setResultsList([])
            return
        }

        const searchedProducts = products.filter(p => p.description.toLowerCase().includes(e.target.value.toLowerCase()) || p.title.toLowerCase().includes(e.target.value.toLowerCase()) || p.category.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchResults(searchedProducts)
        setResultsList(searchedProducts)
    }

    return (
        <div className="searchBar-container">
            <input
                type="text"
                placeholder="Search"
                onChange={handleSearchChange}
                style={inputStyles}
            />
        </div>
    );
}

export default Search;
