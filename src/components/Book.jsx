function Book({ title, author }) {
  return (
    <div className="book">
      <span className="book__img"></span>
      <div className="book__info">
        <h4 className="heading heading__4 book__title">{title}</h4>
        <h5 className="heading heading__5 book__author">{author}</h5>
      </div>
    </div>
  );
}

export default Book;
