
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [branch, setBranch] = useState("");
  const [gender, setGender] = useState("");

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${name}, Age: ${age}, Branch: ${branch}, Gender: ${gender}`
    );
  };

  const handleClear = () => {
    setName("");
    setAge("");
    setBranch("");
    setGender("");
  };

  return (
    <div className="App">
      <h1 className="title">Student Form</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </label>

        <br />

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleAgeChange}
            required
          />
        </label>

        <br />

        <div className="gender-group">
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={handleGenderChange}
              required
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={handleGenderChange}
            />
            Female
          </label>
        </div>

        <br />

        <label>
          Branch:
          <select
            name="branch"
            value={branch}
            onChange={handleBranchChange}
            required
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="EEE">EEE</option>
            <option value="MECH">MECH</option>
          </select>
        </label>

        <br />

        <div className="button-group">
          <button className="submit-button" type="submit">
            Submit
          </button>

          <button
            className="reset-button"
            type="button"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
