import "./App.css";
import DictionarySearch from "./DictionarySearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <DictionarySearch wordOnLoad="sunrise" />
        <footer>
          <small>
            This app was built by{" "}
            <a
              href="https://trusting-curie-946ae6.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Genevieve Leanne Dominguez
            </a>
            . It is open-sourced on{" "}
            <a
              href="https://github.com/genevieveleanne/react-dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
