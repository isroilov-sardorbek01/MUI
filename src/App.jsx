import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Masala1 from "./pages/Masala1";
import Masala2 from "./pages/Masala2";
import Masala3 from "./pages/Masala3";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route index element={<Masala1></Masala1>}></Route>
                <Route path="/masala2" element={<Masala2></Masala2>}></Route>
                <Route path='/masala3' element={<Masala3></Masala3>}></Route>
            </Routes>
        </div>
    );
}

export default App;
