import { useParams } from "react-router-dom";
import hymnsLyricsData from "../../data/hymns.json";
import "./hymn.css";

export default function Hymn() {
  const { id } = useParams();
  const hymn = hymnsLyricsData.find((h) => h.id.toString() === id);

  if (!hymn) {
    return <h2>Hino não encontrado!</h2>;
  }

  return (
    <div className="hymn-container">
      <h2>{hymn.title}</h2>
      <div className="hymn-content">
        {hymn.content.map((section, index) => {
          console.log(`Section Type: ${section.type}`); // Debug

          return (
            <div
              key={index}
              className={`hymn-section ${
                section.type === "chorus" ? "chorus" : ""
              }`}
            >
              {section.lines.map((line, lineIndex) => (
                <div key={lineIndex}>{line}</div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
