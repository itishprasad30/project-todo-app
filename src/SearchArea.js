import React, { useState } from "react";
import { data } from "./data";

const SearchArea = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-area">
      <input
        type="text"
        className="task-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h6 style={{ marginTop: "15px" }}>
        {data
          .filter((data) => {
            if (setSearchTerm == "") {
              return data;
            } else if (
              data.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return data;
            }
          })
          .map((data) => (
            <div className="box" key={data.id}>
              {data.title}
            </div>
          ))}
      </h6>
    </div>
  );
};

export default SearchArea;
