import "./App.css";
import DictionarySearch from "./DictionarySearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <DictionarySearch />
        <footer>
          <small>
            This app was built by Genevieve Leanne Dominguez. It is open-sourced
            on GitHub.
          </small>
        </footer>
      </div>
    </div>
  );
}
