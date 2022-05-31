import "./styles.css";
import { client } from "./client";
import { useState, useEffect } from "react";
import Movies from "./components/Movies";

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    client
      .getEntries()
      .then((response) => {     
        setMovies(response.items);
      })
      .catch(console.error);
  });

  return (
    <div className="App">
      <Movies movies={movies} />
    </div>
  );
}
