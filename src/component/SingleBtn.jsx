// import { useParams } from "react-router-dom";
import "../style/singleButton.css";

export default function SingleBtn({ btnName, className, isHidden }) {
  return (
    <>
      {isHidden ? (
        <button hidden className={className}>
          {btnName}
        </button>
      ) : (
        <button className={className}>{btnName}</button>
      )}
    </>
  );
}
