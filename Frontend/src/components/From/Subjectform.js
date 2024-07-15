import React from "react";

const Subjectform = ({hendleSubmit,value,setValue}) => {
  return (
    <>
      <form onSubmit={hendleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter New Subject Name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  )
}

export default Subjectform
