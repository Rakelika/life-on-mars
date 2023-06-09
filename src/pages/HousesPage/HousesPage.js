import { useState } from "react";
import AllHousesComponent from "../../components/AllHousesComponent/AllHousesComponent";
import MaterialFilterComponent from "../../components/MaterialFilterComponent/MaterialFilterComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import './HousesPage.scss';

export default function HousesPage() {

    const [search, setSearch] = useState ("");
    const [selectedMaterials, setSelectedMaterials] = useState([]);

    return (
        <div>
            <div className="HousePage">
                <h1 className="centerText ">Discover our houses on Mars</h1>
                <div className="navFiltersHouses">
                    <MaterialFilterComponent className="FilterContainer"
                        setSelectedMaterials = {setSelectedMaterials}   
                        selectedMaterials = {selectedMaterials}>
                    </MaterialFilterComponent>
                    <SearchComponent  className="SearchContainer"
                        setSearch={setSearch}>
                    </SearchComponent>
                </div>
            </div>
            <AllHousesComponent 
                search={search} 
                selectedMaterials={selectedMaterials}>
            </AllHousesComponent>
        </div>
    )
}