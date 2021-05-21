import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { US_ADD_ITEM } from "../redux/actions";
import { Link } from "react-router-dom";
import _ from "underscore";

function Task2() {
  const uslist = useSelector((state) => state.uslist);
  const [nuslist, setnuslist] = useState(uslist);
  const [uscityName, setusCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [flag, setflag] = useState(true);
  const [noOfPopulation, setnoOfPopulation] = React.useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // debugger
    if (flag === false) {
      setflag(true);
    }
  }, [flag]);
  const onAddItem = (event) => {
    let list_history = nuslist;
    let new_item = {
      uscity: uscityName,
      state: stateName,
      population: noOfPopulation,
    };
    if (
      new_item.uscity === "" ||
      new_item.state === "" ||
      new_item.population === ""
    ) {
      alert(`please enter all value `);
    } else {
      list_history.push(new_item);
      dispatch(US_ADD_ITEM(list_history));
      event.preventDefault();
      setflag(false);
      setusCityName("");
      setStateName("");
      setnoOfPopulation("");
    }
  };
  const sortBycity = () => {
    var objs = nuslist;

    var sortedObjs = _.sortBy(objs, "uscity");
    setnuslist(sortedObjs);
    setflag(false);
  };
  const sortByState = () => {
    var objs = nuslist;

    var sortedObjs = _.sortBy(objs, "state");
    setnuslist(sortedObjs);
    setflag(false);
  };
  const sortByPopulation = () => {
    var objs = nuslist;

    var sortedObjs = _.sortBy(objs, "population");
    setnuslist(sortedObjs);
    setflag(false);
  };
  return (
    <>
      <div style={{ textAlign: "center", width: "50%" }}>
        <label className="form-label">US City</label>
        <input
          type="text"
          className="form-control"
          min="1"
          max="30"
          value={uscityName}
          onChange={(e) => setusCityName(e.target.value)}
        />
        <label className="form-label">State</label>
        <input
          type="text"
          className="form-control"
          min="1"
          max="30"
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
        />
        <label className="form-label">Population</label>
        <input
          type="Number"
          className="form-control"
          min="1"
          max="30"
          value={noOfPopulation}
          onChange={(e) => setnoOfPopulation(e.target.value)}
        />{" "}
        <br />
        <button type="submit" className="btn btn-primary" onClick={onAddItem}>
          Add To Table
        </button>
        {/* {console.log("sortByPopulation -> uslist", uslist)} */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <Link onClick={sortBycity}>US City</Link>
              </th>
              <th scope="col">
                <Link onClick={sortByState}>State</Link>
              </th>
              <th scope="col">
                <Link onClick={sortByPopulation}>Population</Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {flag === true &&
              nuslist.map((value) => {
                return (
                  <tr>
                    <td>{value.uscity}</td>
                    <td>{value.state}</td>
                    <td>{value.population}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Task2;
