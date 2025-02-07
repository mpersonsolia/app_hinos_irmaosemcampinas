import "./button.css";

export function Button({ title }) {
  return (
    <div className="button-container">
      <button className="button-button">{title}</button>
    </div>
  );
}
