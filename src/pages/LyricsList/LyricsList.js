import "./lyricsList.css";
import hymnsLyricsData from "../../data/hymns.json";
import { Link } from "react-router-dom";

export default function LyricsList() {
  return (
    <div className="lyricsList-container">
      <ul className="lyricsList-container-list">
        {hymnsLyricsData.map((hymn) => (
          <li key={hymn.id}>
            <Link to={`/hymn/${hymn.id}`} className="lyricsList-container-item">
              {hymn.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
