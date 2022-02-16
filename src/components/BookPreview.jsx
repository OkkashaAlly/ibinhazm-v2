import sprite from "../assets/sprite.svg";

function BookPreview() {
  const _data = {};
  return (
    <>
      <div className="preview__book p-m">
        <div className="preview__book-top">
          <div className="preview__heading">
            <h1 className="heading heading__1 preview__book-title">
              {_data.title}
            </h1>
          </div>
          <svg className="btn btn__close icon">
            <use href={sprite + "#icon-plus"}></use>
          </svg>
        </div>
        <div className="preview__book-mid m-t-m">
          <div className="preview__book-left m-r-s">
            <img
              src={_data.imageLink}
              alt={_data.title}
              className="preview__book-img"
            />
          </div>
          <ul className="preview__book-right">
            <li className="preview__book-info price">
              price: <span className="light">{_data.isForSale}</span>
            </li>
            <li className="preview__book-info category">
              category: <span className="light">{_data.categories}</span>
            </li>
            <li className="preview__book-info year">
              year: <span className="light">{_data.publishedDate} </span>
            </li>
            <li className="preview__book-info pages">
              pages: <span className="light">{_data.pages} </span>
            </li>
            <li className="preview__book-info isbn">
              {_data.isbnType}: <span className="light">{_data.isbn}</span>
            </li>
            <li className="preview__book-info rate">
              rate: <span className="light">{_data.rate}</span>
            </li>
          </ul>
        </div>
        <div className="preview__book-bottom m-t-m">
          <div className="bottom__wraper">
            <h5 className="preview__book-info prologue">Prologue:</h5>
            <svg className="btn btn__bookmark icon">
              <use href={sprite + "#icon-bookmark"}></use>
            </svg>
          </div>
          <p className="paragraph light">{_data.description}</p>
        </div>
        <div className="preview__book-button m-t-b m-b-m">
          <a
            href={_data.previewLink}
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
