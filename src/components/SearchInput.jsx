import { useState, useContext } from "react";
import BooksContext from "../context/BooksContext";

function SearchInput() {
  const [text, setText] = useState("");

  const { getBooks, closePreview } = useContext(BooksContext);

  const handleChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    closePreview();
    getBooks(text);
  };

  return (
    <form onSubmit={handleSubmit} className="header__search">
      <input
        type="text"
        className="header__search-input"
        placeholder="Search for a book here.."
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchInput;
