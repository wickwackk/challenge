import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Page from "./component/Page";
import Pagination from "./component/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState();
  return (
    <div className="App">
      <div className="pageExt">
        <Routes>
          <Route path="/" element={<Pagination />}>
            <Route path="/page/*">
              <Route index element={<Page />} />
              <Route path=":pageNumber" element={<Page />} />
            </Route>
          </Route>
        </Routes>
      </div>
      {/* <div className="pageExt">
        <Pagination />
      </div> */}
    </div>
  );
}

export default App;
