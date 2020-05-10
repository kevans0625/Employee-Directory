import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";


const App = () => {
    document.title = "Employee Directory";
    return ( <div>
        <Header>
        </Header>   
        <Search>
        </Search>
        <Table>
        </Table>
        </div>
    );
};

export default App;