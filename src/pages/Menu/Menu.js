import { MdSearch, MdOutlineFavorite, MdMusicNote } from "react-icons/md";
import "./menu.css";
import { useNavigate } from "react-router-dom";

export function Menu() {
  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <MdSearch className="menu-icon" onClick={() => navigate("/")} />
      <MdMusicNote
        className="menu-icon"
        onClick={() => navigate("/home_list")}
      />
      <MdOutlineFavorite className="menu-icon" />
    </div>
  );
}
