import React from "react";
import { data } from "./data";

const Boxmodel = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="card">
      {/* <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}

      <h3>
        {data.map((data) => (
          <div className="box" key={data.id}>
            {data.title}
          </div>
        ))}
      </h3>
    </div>
  );
};

export default Boxmodel;
