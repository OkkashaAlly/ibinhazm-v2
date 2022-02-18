import { useContext, useEffect } from "react";
import BooksContext from "../context/BooksContext";
import Book from "../components/Book";
import Spinner from "../components/shared/Spinner";
import Message from "../components/shared/Message";

function Main() {
  const { books, bookmarks, loadBookmarks, loading, getBooks, message } =
    useContext(BooksContext);

  useEffect(_ => getBooks(), []);

  if (loading) {
    return (
      <section className="app m-t-m p-s m-b-s">
        <div className="recently m-b-m">
          <Spinner />
        </div>
      </section>
    );
  }

  if (loadBookmarks) {
    return (
      <section className="app m-t-m p-s m-b-s">
        <div className="recently m-b-m">
          <h2 className="heading heading__2">recently added</h2>
          <div className="recently__books m-t-s">
            {bookmarks.map(book => (
              <Book book={book} key={book.id} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (message.type === "error") {
    return (
      <section className="app m-t-m p-s m-b-s">
        <div className="recently m-b-m">
          <Message message={message} />
        </div>
      </section>
    );
  }

  return (
    <section className="app m-t-m p-s m-b-s">
      <div className="recently m-b-m">
        <h2 className="heading heading__2">recently added</h2>
        <div className="recently__books m-t-s">
          {books.map(book => (
            <Book book={book} key={book.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Main;
