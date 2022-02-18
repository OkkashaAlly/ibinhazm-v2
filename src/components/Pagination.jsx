function Pagination() {
  const handlePagination = action => {
    console.log(action);
  };
  return (
    <div className="pagination m-t-m">
      <div className="pagination__wrapper">
        <button
          onClick={_ => handlePagination("prev: clicked")}
          className="btn btn__pagination btn__pagination-prev"
        >
          prev
        </button>
        <button
          onClick={_ => handlePagination("next: clicked")}
          className="btn btn__pagination btn__pagination-next"
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
