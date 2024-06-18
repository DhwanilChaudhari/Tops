import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";

export default function SingleUser() {
  let [data, setData] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/users/${id}`,
    }).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <Table striped>
        <thead className=" text-center ">
          <tr>
            <td>ID: {data?.id}</td>
          </tr>
          <tr>
            <th>Email: {data?.email}</th>
          </tr>
          <tr>
            <th>Username: {data?.username}</th>
          </tr>
          <tr>
            <th>Password: {data?.password}</th>
          </tr>
          <tr>
            <th>Firstname: {data?.name?.firstname}</th>
          </tr>
          <tr>
            {" "}
            <th>Lastname: {data?.name?.lastname}</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
}
