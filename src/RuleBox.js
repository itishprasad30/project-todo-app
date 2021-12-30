import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const RuleBox = ({ rules, setRules }) => {
  const [ruleAdd, setRuleAdd] = useState("");
  const handleSumbmit = (e) => {
    e.preventDefault();
    if (ruleAdd === "") return alert("Please provide some value");
    setRules([...rules, { id: uuidv4(), note: ruleAdd, completed: false }]);

    setRuleAdd("");
  };

  return (
    <div className="rule-box">
      <h1>Rules to added</h1>
      <div>
        <input
          type="text"
          placeholder="add notes"
          className="add-note"
          value={ruleAdd}
          onChange={(e) => setRuleAdd(e.target.value)}
        />

        <button className="btn-note" onClick={handleSumbmit}>
          {" "}
          Add Note
        </button>
      </div>
    </div>
  );
};

export default RuleBox;
