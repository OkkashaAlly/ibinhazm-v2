import sprite from "../assets/sprite.svg";

function BuyDownload() {
  return (
    <section className="buy">
      <div className="preview__book p-m">
        <div className="preview__book-top">
          <div className="preview__heading">
            <h1 className="heading heading__1 preview__book-title">
              steve jobs
            </h1>
            <h4 className="preview__book-info author">
              author: <span className="light">walter issaacton </span>
            </h4>
          </div>
          <svg className="btn btn__close icon">
            // <use href={sprite + "#icon-plus"} />
          </svg>
        </div>
        <div className="preview__book-mid m-t-m">
          <div className="preview__book-left m-r-s">
            <span className="preview__book-img"></span>
          </div>
          <ul className="preview__book-right">
            <li className="preview__book-info price">
              price: <span className="light">42,500 </span>
            </li>
            <li className="preview__book-info category">
              category: <span className="light">educational </span>
            </li>
            <li className="preview__book-info year">
              year: <span className="light">2014 </span>
            </li>
            <li className="preview__book-info pages">
              pages: <span className="light">236 </span>
            </li>
            <li className="preview__book-info isbn">
              ISBN: <span className="light">9876545678987654 </span>
            </li>
            <li className="preview__book-info rate">
              rate: <span className="light">4.8</span>
            </li>
          </ul>
        </div>
        <div className="preview__book-bottom m-t-m">
          <h5 className="preview__book-info prologue">Prologue:</h5>
          <p className="paragraph light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <p className="paragraph light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
        </div>
        <div className="preview__book-button m-t-b m-b-m">
          <button className="btn btn__download">Download / Buy</button>
        </div>
      </div>
    </section>
  );
}

export default BuyDownload;
