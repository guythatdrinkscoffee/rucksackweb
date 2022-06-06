import React from 'react';
import { Route, Routes} from "react-router-dom";
import { Index as PackView } from './pack'
import NotFoundPage from "./404/NotFoundPage";

function App() {
  return (
      <Routes>
          <Route path={"/p/:hash"} element={<PackView/>}/>
          <Route path={"*"} element={<NotFoundPage/>}/>
      </Routes>
  );
}

export default App;
