import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./table";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const fetchUser = async () => {
    const fetchdData = await axios.get(
      `http://localhost:5000/?search=${query}`
    );
    setData(fetchdData.data);
  };
  useEffect(() => {
      if(query.length==0 || query.length>=3) fetchUser();
  }, [query]);
  // fetchUser()
  // console.log(data)

  return (
    <div className="app">
      <input
        type="text"
        className="search"
        placeholder="search.."
        onChange={(e) => setQuery(e.target.value)}
      />

      {/*table component*/}
      <Table data={data} />
    </div>
  );
}

export default App;
