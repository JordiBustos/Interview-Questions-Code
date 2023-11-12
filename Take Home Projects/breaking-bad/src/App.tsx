import "./App.css";
import { useState } from "react";
import { validateName, breakify } from "./utils/utils";

function App() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [breakifyFN, setBreakifyFNResult] = useState<string[]>([]);
  const [breakifyLN, setBreakifyLNResult] = useState<string[]>([]);

  function handleNameChange(name: string, isFirst: boolean) {
    if (validateName(name)) {
      isFirst ? setFirstName(name) : setLastName(name);
      isFirst
        ? setBreakifyFNResult(breakify(name))
        : setBreakifyLNResult(breakify(name));
    } else {
      setFirstName((prev) => (name === "" ? "" : prev));
      setLastName((prev) => (name === "" ? "" : prev));
      setBreakifyFNResult([]);
      setBreakifyLNResult([]);
    }
  }

  return (
    <>
      <div className="content">
        <h1>
          {breakifyFN.length > 0 ? (
            breakifyFN.map((name, index) => (
              <span key={index} className={index === 1 ? "breaked" : ""}>
                {name}
                <br />
              </span>
            ))
          ) : (
            <span>Enter your name</span>
          )}
        </h1>
        <h2>
          {breakifyLN.length > 0 ? (
            breakifyLN.map((name, index) => (
              <span key={index} className={index === 1 ? "breaked" : ""}>
                {name}
                <br />
              </span>
            ))
          ) : (
            <span>Enter your last name</span>
          )}
        </h2>
        <div className="row">
          <div className="col">
            <label htmlFor="firstName">First Name:</label>
            <input
              onChange={(e) => handleNameChange(e.target.value, true)}
              type="text"
              value={firstName}
            />
          </div>
          <div className="col">
            <label htmlFor="lastName">Last Name:</label>
            <input
              onChange={(e) => handleNameChange(e.target.value, false)}
              value={lastName}
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
