import { useParams } from "react-router-dom";

export default function Page(prop) {
  const { setPageNum } = prop;
  const { pageNumber } = useParams();
  setPageNum(pageNumber);
  console.log(pageNumber);
  return <div>Page: {pageNumber}</div>;
}
