import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_ITEM } from "../redux/actions";
import { Link } from "react-router-dom";

export default function Task1() {
  const list = useSelector((state) => state.list);
  const [realList, setRealList] = useState(list);
  const [flag, setflag] = useState(true);
  const [item, setItem] = React.useState("");
  const [edit, setEdit] = React.useState("");
  const [onStatus, setonStatus] = React.useState("add");
  const dispatch = useDispatch();

  const onAddItem = (event) => {
    let list_history = list;
    let new_item = {
      name: item,
      status: "todo",
    };
    list_history.push(new_item);
    console.log("onAddItem -> list_history", list_history);
    dispatch(ADD_ITEM(list_history));
    setItem("");
    event.preventDefault();
  };
  // const onEdit = (e, val, i) => {
  //   console.log("onEdit -> i", i
  //   );
  //   const fd = new FormData();
  //   if (val.length > 0) {
  //     //name
  //     fd.append("name", val[i].name); //name
  //   }

  //   setonStatus("update");
  // };
  useEffect(() => {
    // debugger
    if (flag === false) {
      setflag(true);
    }
  }, [flag]);
  const handleSetStatusCompleted = (e, i) => {
    console.log("handleSetStatusCompleted -> 2i", i);
    let value = e.target.checked;
    let list_history = list;
    if (value === true) {
      list_history[i].status = "complete";
      dispatch(ADD_ITEM(list_history));
      setRealList(list_history);
      setflag(!flag);
      // setflag(true);
    } else {
      list_history[i].status = "todo";
      dispatch(ADD_ITEM(list_history));
      setRealList(list_history);
      setflag(!flag);
      // setflag(true);
    }
  };
  const handleSetStatusTodo = (e, i) => {
    console.log("handleSetStatusTodo -> 1i", i);

    // debugger
    let value = e.target.checked;
    let list_history = list;
    if (value === true) {
      list_history[i].status = "todo";
      dispatch(ADD_ITEM(list_history));
      setRealList(list_history);
      setflag(!flag);
    } else {
      list_history[i].status = "complete";
      dispatch(ADD_ITEM(list_history));
      setRealList(list_history);
      setflag(!flag);
    }
  };

  return (
    <>
      <div
        className="mb-6 lg-6 xl-6"
        style={{ textAlign: "center", width: "50%" }}
      >
        <h3>
          <label for="exampleFormControlInput1" className="form-label">
            Item
          </label>
        </h3>
        <input
          className="form-control mb-6 lg-6 xl-6"
          name="item"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
        {/* {onStatus === "add" ? ( */}
        <button type="button" className="btn btn-primary" onClick={onAddItem}>
          Add
        </button>
        {/* // ) : (
        //   <button type="button" className="btn btn-primary" onClick={onEdit}>
        //     update
        //   </button>
        // )}{" "}
        - */}
      </div>
      <div>
        <h3>
          <label>TODO</label>
        </h3>

        <table className="table">
          {flag === true &&
            realList.map(
              (val, i) =>
                val.status === "todo" && (
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        name={val.name}
                        onChange={(e) => handleSetStatusCompleted(e, i)}
                      />
                    </td>
                    <td>{val.name}</td>
                    <td>
                      <Link
                      // onClick={(e) => onEdit(e, i)}
                      >
                        EDIT
                      </Link>
                      <Link>Delete</Link>
                    </td>
                  </tr>
                )
            )}
        </table>
      </div>
      <div>
        <h3>
          <label>COMPLETE</label>
        </h3>
        <table className="table">
          {flag === true &&
            realList.map(
              (val, i) =>
                val.status === "complete" && (
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        name={val.name}
                        onChange={(e) => handleSetStatusTodo(e, val, i)}
                      />
                    </td>
                    <td>{val.name}</td>
                    <td>
                      <Link>EDIT</Link>
                      <Link>Delete</Link>
                    </td>
                  </tr>
                )
              // )
            )}
        </table>
      </div>
    </>
  );
}
