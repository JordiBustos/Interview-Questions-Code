import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Title from "./components/Title";
import { validateName, breakify } from "./utils/utils";

function App() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [breakifyFN, setBreakifyFNResult] = useState<string[]>([]);
  const [breakifyLN, setBreakifyLNResult] = useState<string[]>([]);

  function handleNameChange(name: string, isFirst: boolean): void {
    if (validateName(name)) {
      const setName = isFirst ? setFirstName : setLastName;
      const setBreakifyResult = isFirst
        ? setBreakifyFNResult
        : setBreakifyLNResult;

      setName(name);
      setBreakifyResult(breakify(name));
    } else {
      setFirstName((prev) => (name === "" ? "" : prev));
      setLastName((prev) => (name === "" ? "" : prev));
      setBreakifyFNResult([]);
      setBreakifyLNResult([]);
    }
  }

  return (
    <div className="content">
      <Title arr={breakifyFN} isFirst={true} />
      <Title arr={breakifyLN} isFirst={false} />
      <div className="row">
        <Input
          name={firstName}
          handleNameChange={handleNameChange}
          isFirst={true}
        />
        <Input
          name={lastName}
          handleNameChange={handleNameChange}
          isFirst={false}
        />
      </div>
    </div>
  );
}

export default App;
