import { useState } from "react";
import AllHousesComponent from "../../components/AllHousesComponent/AllHousesComponent";
import MaterialFilterComponent from "../../components/MaterialFilterComponent/MaterialFilterComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";

export default function HousesPage() {

    const [search, setSearch] = useState ("");
    const [selectedMaterials, setSelectedMaterials] = useState([]);

    return (
        <div>
            <MaterialFilterComponent 
                setSelectedMaterials = {setSelectedMaterials}   
                selectedMaterials = {selectedMaterials}>
            </MaterialFilterComponent>
            <SearchComponent 
                setSearch={setSearch}>
            </SearchComponent>
            <AllHousesComponent 
                search={search} 
                selectedMaterials={selectedMaterials}>
            </AllHousesComponent>
        </div>
    )
}