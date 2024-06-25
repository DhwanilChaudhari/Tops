import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../ReduxHome2/user";

export default function User2() {
  const [name, setName] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const dispatch = useDispatch();

  const data = useSelector((store) => store.userSlice);

  const addUserHandler = () => {
    if (editIndex === null) {
      dispatch(addUser(name));
    } else {
      dispatch(updateUser({ index: editIndex, name }));
      setEditIndex(null);
    }
    setName("");
  };

  const deleteHandler = (index) => {
    dispatch(deleteUser(index));
  };

  const editHandler = (name, index) => {
    setName(name);
    setEditIndex(index);
  };

  return (
    <div>
      <input
        value={name}
        type="text"
        className="border px-2 py-1"
        onChange={(e) => setName(e.target.value)}
      />
      <button className="border px-2 py-1" onClick={addUserHandler}>
        {editIndex === null ? "Add" : "Update"}
      </button>
      <hr />
      <div>
        {data?.user.map?.((e, i) => (
          <div key={i}>
            <li>
              {e} <button onClick={() => editHandler(e, i)}>Edit</button>{" "}
              <button onClick={() => deleteHandler(i)}>Delete</button>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}
