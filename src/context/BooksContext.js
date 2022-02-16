import { createContext, useState } from "react";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBooks = async (query = "flowers") => {
    setLoading(true);

    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/?q=${query}`
    );

    const data = await response.json();

    const books = data.items.map(book => {
      return {
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        imageLink: book.volumeInfo.imageLinks.thumbnail,
        id: book.id,
      };
    });

    setBooks(books);
    setLoading(false);
  };

  return (
    <BooksContext.Provider value={{ books, loading, getBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
