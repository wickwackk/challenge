import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/page.css";

export default function Page() {
  const { pageNumber } = useParams();
  // const { setCurrentPage, currentPage } = prop;
  console.log("param", pageNumber);

  // useEffect(() => {
  //   setCurrentPage(Number(pageNumber));
  // }, []);

  return <div className="page">Page: {pageNumber ? pageNumber : 1}</div>;
}
