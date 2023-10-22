import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="New York" />
        <footer>This project was coded by
          <a href="https://github.com/lydi-in-tech" target="_blank" title="GitHub weather app project" rel="noopener noreferrer"> {""}
            Lydia Pelesane </a>
          and is {""}
          <a href="https://github.com/lydi-in-tech/search-engine-project" target="_blank" rel="noopener noreferrer">open-sourced on GitHub</a> {""}
          and {""} <a href="https://earnest-monstera-66cf7f.netlify.app/" target="_blank" rel="noopener noreferrer" title="weather app project on netlify website">
            hosted on Netlify</a></footer>
      </header>
    </div>
  );
}

export default App;
