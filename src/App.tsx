import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Index as PackView } from './pack'
import NotFoundPage from "./404/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/p/:hash"} element={<PackView/>}/>
            <Route path={"*"} element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
