import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const BookInfo = () => {
  const { bookInfo } = useSelector((state) => state.books);

  return (
    <Fragment>
      <h2>Book Details</h2>
      {bookInfo!==null ? (
        <div>
          <p className="fw-bold">Title: {bookInfo.Title}</p>
          <p className="fw-light">Description: {bookInfo.Description}</p>
          <p className="fst-italic">Price: {bookInfo.Price}</p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is no post selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
