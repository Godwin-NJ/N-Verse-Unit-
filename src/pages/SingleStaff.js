import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { getEmployeeID } from "../Data/staff";

const SingleStaff = () => {
  let params = useParams();
  const singleStaff = getEmployeeID(parseInt(params.id));
  const { name, employeeID, dept, birthYear, salary, gender, employementDate } =
    singleStaff;
  return (
    <Fragment>
      <section className="singleEmployee">
        <div className="singleLinkRoute">
          <Link to="/" className="singleLink">
            {" "}
            Home
          </Link>
          <Link to="/staff" className="singleLink">
            {" "}
            Staff
          </Link>
        </div>

        <div className="singleStaffInfo">
          <h2>Name : {name}</h2>
          <h3>ID : {employeeID}</h3>
          <h3>Department : {dept}</h3>
          <h3>Year Of Birth : {birthYear}</h3>
          <h3>Gross Salary : ${salary}</h3>
          <h3>Gender : {gender}</h3>
          <h3>Employment-Date :{employementDate}</h3>
        </div>
      </section>
    </Fragment>
  );
};

export default SingleStaff;
