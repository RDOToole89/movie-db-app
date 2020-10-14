import React, { useState } from "react";

function DiscoverMoviesPage() {
  const [searchText, setSearchText] = useState("");

  const search = async () => {
    console.log("Start searching for:", searchText);

    const queryParam = encodeURIComponent(searchText);
  };

  const onChangeSearchHandler = (event) => {
    console.log("Then event target", event.target.value);
    setSearchText(event.target.value);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input value={searchText} onChange={onChangeSearchHandler} />
        <button onClick={search}>Search</button>
      </p>
    </div>
  );
}

export default DiscoverMoviesPage;
