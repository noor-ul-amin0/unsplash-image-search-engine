import React from "react";
import "./SearchBox.css";

const SearchBox = ({ placeholder, setSearchTerm, setIncorrectResult }) => {
  const [name, setName] = React.useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (name.length === 0) {
          alert("enter a name!");
        } else {
          setSearchTerm(name);
        }
      }}
    >
      <input
        className="search-styled"
        type="search"
        placeholder={placeholder}
        onChange={(e) => {
          setIncorrectResult(false);
          setName(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchBox;
