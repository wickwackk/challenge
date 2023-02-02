// import { useParams } from "react-router-dom";
import "../style/singleButton.css";

export default function SingleBtn({ btnName, className }) {
  return <button className={className}>{btnName}</button>;
}
