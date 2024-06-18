import React, { useState } from "react";
import { Button, Container, Input } from "reactstrap";
import { toast } from "react-toastify";
import { Edit, Plus, Trash } from "lucide-react";

export default function SingleInput() {
  let [task, setTask] = useState("");
  let [taskArr, setTaskArr] = useState([]);
  let [index, setIndex] = useState(null);
  let [update, setUpdate] = useState(false);
  const getData = (e) => {
    console.log("adding");
    setTask(e?.target?.value);
  };
  const addData = () => {
    console.log("---task----", task);
    if (task !== "") {
      setTaskArr([...taskArr, task]);
      setTask("");
    } else {
      toast.warn("Please enter your task!");
    }
  };
  const deleteHandler = () => {
    let filterData = taskArr.filter((e, i) => i !== index);
    setTaskArr(filterData);
  };

  return (
    <div className="box_css">
      <div
        style={{ minWidth: "300px" }}
        className="mt-3 w-50 d-flex border rounded-2 p-2s"
      >
        <Input
          className="shadow-none rounded-0 w-100"
          name="todo"
          onChange={(e) => getData(e)}
          placeholder="Please enter task"
          value={task}
        />

        {update ? (
          <Button color="danger" onClick={() => updateHandler()}>
            Update
          </Button>
        ) : (
          <Plus onClick={() => addData()} className="bg-danger" />
        )}
      </div>

      <div
        style={{ minWidth: "300px" }}
        className="w-50 border rounded-1 p-3 mt-4"
      >
        <h1 className="text-center">Task List</h1>
        <hr
          style={{ width: "100%", height: "5px", backgroundColor: "black" }}
        />
        {taskArr.length > 0 ? (
          <ol className="">
            {taskArr.map((e, i) => {
              return (
                <>
                  <li className="m-0" key={i}>
                    {e}
                  </li>
                  <Edit onClick={() => editHandler(e, i)} />
                  <Trash onClick={() => deleteHandler(i)} />
                  <hr className="mt-0" />
                </>
              );
            })}
          </ol>
        ) : (
          <p className="text-center">!.....Data not Available....!</p>
        )}
      </div>
    </div>
  );
}
