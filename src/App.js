import './App.css';
import TextField from '@mui/material/TextField';
import { useState, useEffect, useRef } from 'react';
import ArticleGrid from './ArticleGrid';
import HomeGrid from './HomeGrid';
import { apiKey } from './constants/ApiKey';

function App() {

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [isSearchLoaded, setIsSearchLoaded] = useState(false);
  const timeout = useRef();

  function Search(searchQuery)
  {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then((data)=> {setSearchItems(data); setIsSearchLoaded(true);})
    .catch(() => setIsSearchLoaded(false));
  }

  useEffect(() => {
    const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {setItems(data); setIsLoaded(true);})
      .catch(() => setIsLoaded(false));
  }, []);

  function onChange(e)
  {
      setIsSearchLoaded(false);
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => { Search(e.target.value); }, 600);
  }


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
      {<TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={onChange}/>}
      {isSearchLoaded && <ArticleGrid data = {searchItems} />}
      {isLoaded && <HomeGrid data = {items} />}
      </div>
    </div>
  );
}

export default App;
