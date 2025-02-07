import "./home.css";
import logo from "../../images/logo.png";
import { InputSearch } from "../../components/InputSearch/InputSearch";
import { Button } from "../../components/Button/Button";

export function Home() {
  return (
    <div className="home-container">
      <img src={logo} alt="logo" className="home-logo" />
      <InputSearch />
      <div className="home-buttons">
        <Button title="Spotify" />
        <Button title="YouTube" />
      </div>
    </div>
  );
}
