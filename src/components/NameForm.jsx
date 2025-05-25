import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
      // setName(e.target.value);
      alert(e.target.value)
  };

  return (
    <div>
      <h2>Hello, {name || "stranger"}!</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default NameForm;
