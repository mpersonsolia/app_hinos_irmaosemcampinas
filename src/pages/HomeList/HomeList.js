import "./homeList.css";
import { Menu } from "../Menu/Menu";
import LyricsList from "../LyricsList/LyricsList";
import { GuitarList } from "../GuitarList/GuitarList";

import { useState } from "react";

export default function HomeList() {
  const [tab, setTab] = useState("lyricsList");

  return (
    <div className="homeList-container">
      <div className="homeList-title">
        <h1>Hinos</h1>
      </div>
      <header className="homeList-header">
        <button
          className={`homeList-header-button ${
            tab === "lyricsList" ? "active" : ""
          }`}
          onClick={() => setTab("lyricsList")}
        >
          Letras
        </button>
        <button
          className={`homeList-header-button ${
            tab === "guitarList" ? "active" : ""
          }`}
          onClick={() => setTab("guitarList")}
        >
          Violão
        </button>
      </header>
      <div className="homeList-list">
        {tab === "lyricsList" ? <LyricsList /> : <GuitarList />}
      </div>

      <Menu />
    </div>
  );
}
