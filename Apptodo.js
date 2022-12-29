import React, { useState } from "react";
export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("desc or title can't be empty");
      AddTodo(title, desc);
      setTitle("");
      setDesc("");
    }
    props.addTodo(title, desc);
  };
  return (
    <div className="container my-3">
      <h3 className="text-center">Add a todo</h3>
      <form onSubmit={submit}>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            TOdo Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              id="title"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="desc" className="col-sm-2 col-form-label">
            Todo Description
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={desc}
              className="form-control"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              id="title"
              placeholder="desc"
            />
          </div>
          <button type="submit" className="btn btn-sm btn-success">
            Add todo
          </button>
        </div>
      </form>
    </div>
  );
};
