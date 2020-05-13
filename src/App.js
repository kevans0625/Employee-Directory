import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import RowData from "./components/RowData";



const App = () => {
    document.title = "Employee Directory";
    return ( <div>
        <Header>
        </Header>   
        {/* <Search>
        </Search> */}
        <RowData>
        </RowData>
        </div>
    );
};

export default App;