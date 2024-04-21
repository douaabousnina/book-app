import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, getBook } from "../../store/bookSlice";

const BooksList = ({ isLoading, books }) => {
  const { isLoggedIn } = useSelector((state) => state.authentification);
  const dispatch = useDispatch();

  if (isLoading === true) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Books List</h2>
      <ul className="list-group">
        {books.length > 0 ? (
          books.map((book) => {
            return (
              <li
                key={book.id}
                className="list-group-item d-flex  justify-content-between align-items-center"
              >
                <div>{book.Title}</div>
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={!isLoggedIn}
                    onClick={()=>dispatch(getBook(book.id))}
                  >
                    Read
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    disabled={!isLoggedIn}
                    onClick={()=>dispatch(deleteBook(book.id))}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })
        ) : (
          <div className="alert alert-primary" role="alert">
            There are no books here
          </div>
        )}
      </ul>
    </div>
  );
};

export default BooksList;
