import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Department:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Department Name"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Select from Department
        </button>
        <button onClick={props.handleSort} className="btn btn-primary mt-3">
          Sort by Salary
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
