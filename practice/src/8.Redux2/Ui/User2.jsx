import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../ReduxHome2/user";

export default function User2() {
  let [name, setName] = useState();
  let [i, setI] = useState();
  const dispatch = useDispatch();

  const data = useSelector((store) => {
    return store.userSlice;
  });

  const addUserHandler = () => {
    dispatch(addUser(name));
    setName("");
  };
  const deleteHandler = (i) => {
    dispatch(deleteUser(i));
    setI("");
  };
  return (
    <div>
      <input
        value={name}
        type="text"
        className="border px-2 py-1"
        onChange={(e) => setName(e.target.value)}
      />
      <button className="border px-2 py-1" onClick={() => addUserHandler()}>
        Add
      </button>

      <hr />

      <ul>
        {data?.user.map?.((e, i) => {
          return (
            <div key={i}>
              <li>
                {e} <button onClick={() => deleteHandler(i)}>Delete</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
