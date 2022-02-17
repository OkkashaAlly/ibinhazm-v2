import { createContext, useState, useReducer } from "react";
import BooksReducer from "./BooksReducer";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const initialState = {
    books: [],
    loading: false,
    book: {},
    showPreview: {},
    displayPreview: { opacity: 0 },
  };

  const [state, dispatch] = useReducer(BooksReducer, initialState);

  // Load books from API
  const getBooks = async (query = "flowers") => {
    dispatch({ type: "SET_LOADING" });

    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/?q=${query}`
    );

    const data = await response.json();

    const books = data.items.map(book => {
      return {
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        publisher: book.volumeInfo.publisher,
        previewLink: book.volumeInfo.previewLink,
        publishedDate: book.volumeInfo.publishedDate,
        description: book.volumeInfo.description?.replaceAll("<p>", " "),
        isbnType: book.volumeInfo.industryIdentifiers
          ? book.volumeInfo.industryIdentifiers[0].type
          : "isbn",
        isbn: book.volumeInfo.industryIdentifiers
          ? book.volumeInfo.industryIdentifiers[0].identifier
          : "undefined",
        pages: book.volumeInfo.pageCount,
        categories: Array.isArray(book.volumeInfo.categories)
          ? book.volumeInfo.categories[0]
          : book.volumeInfo.categories,
        rate: book.volumeInfo.averageRating,
        imageLink: book.volumeInfo.imageLinks.thumbnail,
        language: book.volumeInfo.language,
        isForSale: book.saleInfo.saleability,
      };
    });

    dispatch({ type: "GET_BOOKS", payload: books });
  };

  const renderPreview = book => {
    const preview = {
      transform: "translateX(0)",
      transition: "transform 0.3s ease",
    };

    const display = {
      opacity: "1",
      transition: "opacity 2s ease",
    };

    dispatch({ type: "RENDER_PREVIEW", payload: { preview, book, display } });
  };

  const closePreview = _ => {
    const preview = {
      transform: "translateX(50rem)",
      transition: "transform 0.3s ease",
    };

    const display = {
      opacity: "0",
    };

    dispatch({ type: "CLOSE_PREVIEW", payload: { preview, display } });
  };

  return (
    <BooksContext.Provider
      value={{
        books: state.books,
        book: state.book,
        loading: state.loading,
        showPreview: state.showPreview,
        displayPreview: state.displayPreview,
        getBooks,
        renderPreview,
        closePreview,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
