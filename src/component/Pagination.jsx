import { useEffect, useState } from "react";
import SingleBtn from "./SingleBtn";
import "../style/pagination.css";
import { Link, Outlet, useParams } from "react-router-dom";

export default function Pagination() {
  const { pageNumber } = useParams();
  console.log(pageNumber);
  const [currentPage, setCurrentPage] = useState(
    pageNumber ? Number(pageNumber) : 1
  );

  useEffect(() => {
    setCurrentPage(Number(pageNumber));
  }, [pageNumber]);

  console.log(pageNumber);
  const [maxPagenum, setmaxPagenum] = useState(4096);
  return (
    <>
      <Outlet />
      <div className="pagination">
        <Link
          to={`/page/${currentPage - 1}`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {currentPage > 1 ? (
            <SingleBtn
              isHidden={false}
              btnName="Өмнөх"
              className={"btnInactive"}
            />
          ) : (
            <SingleBtn
              isHidden={true}
              btnName="Өмнөх"
              className={"btnInactive"}
            />
          )}
        </Link>
        <div className="innerpages">
          {currentPage > 4 && (
            <>
              <Link to={`/page/1`} onClick={() => setCurrentPage(1)}>
                <SingleBtn btnName={1} className={"btnInactive"} />
              </Link>
            </>
          )}
          {currentPage > 5 && <span>...</span>}

          <Link
            to={`/page/${currentPage - 3}`}
            onClick={() => setCurrentPage(currentPage - 3)}
          >
            {currentPage > 3 && (
              <SingleBtn btnName={currentPage - 3} className={"btnInactive"} />
            )}
          </Link>
          <Link
            to={`/page/${currentPage - 2}`}
            onClick={() => setCurrentPage(currentPage - 2)}
          >
            {currentPage > 2 && (
              <SingleBtn btnName={currentPage - 2} className={"btnInactive"} />
            )}
          </Link>
          <Link
            to={`/page/${currentPage - 1}`}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {currentPage > 1 && (
              <SingleBtn btnName={currentPage - 1} className={"btnInactive"} />
            )}
          </Link>
          <span>
            <SingleBtn btnName={currentPage} className={"btnActive"} />
          </span>
          <Link
            to={`/page/${currentPage + 1}`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {currentPage + 1 <= maxPagenum && (
              <SingleBtn btnName={currentPage + 1} className={"btnInactive"} />
            )}
          </Link>
          <Link
            to={`/page/${currentPage + 2}`}
            onClick={() => setCurrentPage(currentPage + 2)}
          >
            {currentPage + 2 <= maxPagenum && (
              <SingleBtn btnName={currentPage + 2} className={"btnInactive"} />
            )}
          </Link>
          <Link
            to={`/page/${currentPage + 3}`}
            onClick={() => setCurrentPage(currentPage + 3)}
          >
            {currentPage + 3 <= maxPagenum && (
              <SingleBtn btnName={currentPage + 3} className={"btnInactive"} />
            )}
          </Link>
          {currentPage + 4 < maxPagenum && <span>...</span>}
          {currentPage + 3 < maxPagenum && (
            <Link
              to={`/page/${maxPagenum}`}
              onClick={() => setCurrentPage(maxPagenum)}
            >
              <SingleBtn btnName={maxPagenum} className={"btnInactive"} />
            </Link>
          )}
        </div>
        <Link
          to={`/page/${currentPage + 1}`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <SingleBtn onClick btnName="Дараах" className={"btnInactive"} />
        </Link>
      </div>
    </>
  );
}
