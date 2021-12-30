import React from "react";

const DisplayRule = ({ rules, setRules }) => {
  // sorting the array
  rules.sort((a, b) => {
    if (a.note < b.note) {
      return -1;
    }
    if (a.note > b.note) {
      return 1;
    }
    return 0;
  });

  const handleDelete = ({ id }) => {
    setRules(rules.filter((rule) => rule.id !== id));
  };
  console.log(rules);
  return (
    <div>
      <h1>the rules are added</h1>
      <div>
        {rules.map((rule, idx) => (
          <div key={rule.id}>
            <input type="checkbox" name="note" className="check-box" />
            <label className="label-for" htmlFor="note">
              {rule.note}
            </label>
            <button
              title="Delete"
              className="button-delete"
              onClick={() => handleDelete(rule)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayRule;
