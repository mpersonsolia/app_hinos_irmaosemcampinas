import "./home.css";
import logo from "../../images/logo.png";
import { InputSearch } from "../../components/InputSearch/InputSearch";
import { Button } from "../../components/Button/Button";
import { Menu } from "../Menu/Menu";

export default function Home() {
  return (
    <div className="home-container">
      <img src={logo} alt="logo" className="home-logo" />
      <InputSearch />
      <div className="home-buttons">
        <Button
          title="Spotify"
          url="https://open.spotify.com/playlist/5vhFqETF3FLnsdDmHWz31K?si=d8ighY1RTiGXEVa6VeyTag"
        />
        <Button
          title="YouTube"
          url="https://www.youtube.com/@irmaosemcampinas4140"
        />
      </div>
      <Menu />
    </div>
  );
}
