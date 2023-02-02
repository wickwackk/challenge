import { useState } from "react";
import SingleBtn from "./SingleBtn";
import "../style/pagination.css";
import { Link } from "react-router-dom";

export default function Pagination(prop) {
  const { pagenum } = prop;
  const [pageNum, setPageNum] = useState("50");
  const [currentPage, setCurrentPage] = useState(Number(pagenum));
  // const [btnName, setBtnName] = useState("");
  return (
    <div className="pagination">
      <Link
        to={`/page/${currentPage - 1}`}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <SingleBtn onClick btnName="Өмнөх" className={"btnInactive"} />
      </Link>
      <Link
        to={`/page/${currentPage - 3}`}
        onClick={() => setCurrentPage(currentPage - 3)}
      >
        <SingleBtn
          onClick
          btnName={currentPage - 3}
          className={"btnInactive"}
        />
      </Link>
      <Link
        to={`/page/${currentPage - 2}`}
        onClick={() => setCurrentPage(currentPage - 2)}
      >
        <SingleBtn
          onClick
          btnName={currentPage - 2}
          className={"btnInactive"}
        />
      </Link>
      <Link
        to={`/page/${currentPage - 1}`}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <SingleBtn
          onClick
          btnName={currentPage - 1}
          className={"btnInactive"}
        />
      </Link>
      <span>
        <SingleBtn btnName={currentPage} className={"btnActive"} />
      </span>
      <Link
        to={`/page/${currentPage + 1}`}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <SingleBtn btnName={currentPage + 1} className={"btnInactive"} />
      </Link>
      <Link
        to={`/page/${currentPage + 2}`}
        onClick={() => setCurrentPage(currentPage + 2)}
      >
        <SingleBtn
          onClick
          btnName={currentPage + 2}
          className={"btnInactive"}
        />
      </Link>
      <Link
        to={`/page/${currentPage + 3}`}
        onClick={() => setCurrentPage(currentPage + 3)}
      >
        <SingleBtn
          onClick
          btnName={currentPage + 3}
          className={"btnInactive"}
        />
      </Link>
      <Link
        to={`/page/${currentPage + 1}`}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <SingleBtn onClick btnName="Дараах" className={"btnInactive"} />
      </Link>
    </div>
  );
}
