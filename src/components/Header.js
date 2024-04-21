import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogInOut } from "../store/authSlice";

const Header = () => {
  const { error } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(LogInOut());
  }
  return (
    <Fragment>
      {error && (
        <div className="alert alert-danger mb-0" role="alert">
          {error}
        </div>
      )}

      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Books</span>
        <button className="btn btn-outline-primary" type="submit" onClick={handleClick}>
          Log In
        </button>
      </nav>
    </Fragment>
  );
};

export default Header;
