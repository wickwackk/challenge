import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Page from "./component/Page";
import Pagination from "./component/Pagination";

function App() {
  const [pagenum, setPageNum] = useState();
  return (
    <div className="App">
      <Routes>
        <Route
          path="/page/:pageNumber"
          element={<Page setPageNum={setPageNum} />}
        />
      </Routes>
      <div className="pageExt">
        <Pagination pagenum={pagenum} />
      </div>
    </div>
  );
}

export default App;
