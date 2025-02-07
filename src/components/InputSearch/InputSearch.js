import "./inputSearch.css";
import { MdSearch } from "react-icons/md";

export function InputSearch() {
  return (
    <div className="inputSearch-container">
      <input className="inputSearch-input" />
      <MdSearch className="inputSearch-icon" />
    </div>
  );
}
