import axios from "axios";
import { User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "reactstrap";

export default function AllUser() {
  let [user, setUser] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/users",
    })
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {});
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>FirstName</th>
            <th>LastName</th>
          </tr>
        </thead>
        <tbody>
          {user?.map((e, i) => {
            return (
              <tr key={e.id}>
                <td scope="row">{i + 1}</td>
                <td>{e?.email}</td>
                <td>{e?.username}</td>
                <td>{e?.password}</td>
                <td>{e?.name.firstname}</td>
                <td>{e?.name.lastname}</td>

                <td>
                  <User
                    role="button"
                    onClick={() => navigate(`/User/${e.id}`)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
