import { FormEvent, useState } from "react";
import { SearchResults } from "../components/SearchResults";

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await await response.json();

    setResults(data);
  }

  console.log(results);

  return (
    <div>
      <h1>Search:</h1>

      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </form>

      <button type="submit">Buscar</button>

      <SearchResults results={results} />
    </div>
  );
}
