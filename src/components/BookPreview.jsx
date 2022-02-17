import { useContext } from "react";
import sprite from "../assets/sprite.svg";
import BooksContext from "../context/BooksContext";

function BookPreview({ book }) {
  book.bookmarked = false;

  const { closePreview, displayPreview } = useContext(BooksContext);

  return (
    <>
      <div className="preview__book p-m" style={displayPreview}>
        <div className="preview__book-top">
          <div className="preview__heading">
            <h1 className="heading heading__1 preview__book-title">
              {book.title}
            </h1>
          </div>
          <svg onClick={closePreview} className="btn btn__close icon">
            <use href={sprite + "#icon-plus"}></use>
          </svg>
        </div>
        <div className="preview__book-mid m-t-m">
          <div className="preview__book-left m-r-s">
            <img
              src={book.imageLink}
              alt={book.title}
              className="preview__book-img"
            />
          </div>
          <ul className="preview__book-right">
            <li className="preview__book-info price">
              price: <span className="light">{book.isForSale}</span>
            </li>
            <li className="preview__book-info category">
              category: <span className="light">{book.categories}</span>
            </li>
            <li className="preview__book-info year">
              year: <span className="light">{book.publishedDate} </span>
            </li>
            <li className="preview__book-info pages">
              pages: <span className="light">{book.pages} </span>
            </li>
            <li className="preview__book-info isbn">
              {book.isbnType}: <span className="light">{book.isbn}</span>
            </li>
            <li className="preview__book-info rate">
              rate: <span className="light">{book.rate}</span>
            </li>
          </ul>
        </div>
        <div className="preview__book-bottom m-t-m">
          <div className="bottom__wraper">
            <h5 className="preview__book-info prologue">Prologue:</h5>
            <svg className="btn btn__bookmark icon">
              <use
                href={
                  sprite +
                  "#icon-bookmark" +
                  (book.bookmarked ? "" : "-outline")
                }
              ></use>
            </svg>
          </div>
          <p className="paragraph light">{book.description}</p>
        </div>
        <div className="preview__book-button m-t-b m-b-m">
          <a
            href={book.previewLink}
            target="_blank"
            className="btn btn__download"
          >
            Download / Buy
          </a>
        </div>
      </div>
    </>
  );
}

export default BookPreview;
