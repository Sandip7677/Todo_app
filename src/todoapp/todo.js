import React, { useState, useEffect } from "react";
import "./style.css";

const getdata = () => {
  const data = localStorage.getItem("todoItem");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputdata, setInputdata] = useState("");
  const [inputarr, setInputarr] = useState(getdata());
  const [isedit, setIsedit] = useState("");
  const [toggle, setToggle] = useState(false);

  const additem = () => {
    if (!inputdata) {
      alert("input the data");
    } else if (inputdata && toggle) {
      setInputarr(
        inputarr.map((cur) => {
          if (cur.id === isedit) {
            return { ...cur, name: inputdata };
          }
          return cur;
        })
      );
      setInputdata("");
      setToggle(false);
      setIsedit(null);
    } else {
      const dataobject = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setInputarr([...inputarr, dataobject]);
      setInputdata("");
    }
  };

  const deleteItem = (ind) => {
    const updatedarr = inputarr.filter((cur) => {
      return cur.id !== ind;
    });
    setInputarr(updatedarr);
  };

  const deleteAll = () => {
    setInputarr([]);
  };

  const editItem = (index) => {
    const item_to_edit = inputarr.find((cur) => {
      return cur.id === index;
    });
    setInputdata(item_to_edit.name);
    setIsedit(index);
    setToggle(true);
  };

  useEffect(() => {
    localStorage.setItem("todoItem", JSON.stringify(inputarr));
  }, [inputarr]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            {/* <img src="./images/todo.svg" alt="todologo" /> */}
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputdata}
              onChange={(e) => setInputdata(e.target.value)}
            />
            {toggle ? (
              <i className="far fa-edit add-btn" onClick={additem}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={additem}></i>
            )}
          </div>
          {/* show our items  */}
          <div className="showItems">
            {inputarr.map((cur) => {
              return (
                <div className="eachItem" key={cur.id}>
                  <h3>{cur.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(cur.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(cur.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* rmeove all button  */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={deleteAll}
            >
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
