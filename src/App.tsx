import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pack from "./pages/Pack";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<p>Hello World!</p>}/>
            <Route path={"/p/:hash"} element={<Pack/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
