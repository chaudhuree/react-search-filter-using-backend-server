import React, { useState } from "react";
import "./App.css";
import Table from "./table";
import { Users } from "./users";

function App() {
  const [query, setQuery] = useState("");
 
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((user) => {
      return keys.some((item) =>
        user[item].toLowerCase().includes(query.toLowerCase())
      );
    });
  };
  return (
    <div className="app">
      <input
        type="text"
        className="search"
        placeholder="search.."
        onChange={(e) => setQuery(e.target.value)}
      />

      {/*table component*/}
      <Table data={[]} />
    </div>
  );
}

export default App;
