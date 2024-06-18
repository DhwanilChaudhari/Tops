import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";

export default function SingleProduct() {
  let [data, setData] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${id}`,
    }).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <img style={{ height: "500px" }} src={data.image} alt="" srcset="" />
      <Table striped>
        <thead>
          <tr>
            <td>Title: {data?.title}</td>
            <td>Price: {data?.price}</td>
          </tr>
        </thead>
      </Table>
    </div>
  );
}
