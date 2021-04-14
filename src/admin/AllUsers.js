import Base from "../core/Base";
import React, { useState, useEffect } from "react";
import { getAllUsers } from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper";
import { CSVLink, CSVDownload } from "react-csv";

const AllUsers = () => {
  const [users, setusers] = useState([]);
  const { token } = isAuthenticated();
  const preload = () => {
    getAllUsers(token).then((data) => {
      setusers(data);
    });
  };
  useEffect(() => {
    preload();
  }, []);

  const headers = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "role", key: "role" },
    { label: "id", key: "_id" },
  ];

  return (
    <Base
      title="All users"
      description="All user info is displayed"
      className="container bg-info p-4"
    >
      {users.map((users, index) => {
        return (
          <div key={index} className="row text-ClientRect mb-2">
            <div className="col-4">
              <h3 className="text-white text-left">{users.name}</h3>
            </div>
            <div className="col-4">
              <h3 className="text-white text-left">{users.email}</h3>
            </div>
            <div className="col-4">
              <h3 className="text-white text-left">{users.role}</h3>
            </div>
          </div>
        );
      })}

      <CSVLink
        className="btn btn-success btn-block"
        data={users}
        //headers={headers}
      >
        Download me
      </CSVLink>
    </Base>
  );
};

export default AllUsers;
