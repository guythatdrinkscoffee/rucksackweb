import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Index as PackView } from './pack'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<p>Hello World!</p>}/>
            <Route path={"/p/:hash"} element={<PackView/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
