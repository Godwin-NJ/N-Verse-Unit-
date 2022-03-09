import React, { Fragment } from "react";
import { useGlobalContext } from "../context";
import { Link, useSearchParams } from "react-router-dom";

const Employee = () => {
  const { staff } = useGlobalContext();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <section>
      <div className="employee-to-home">
        <Link to="/" style={{ color: "white" }}>
          {" "}
          Home
        </Link>
      </div>
      {/* start input  */}
      <div style={{ marginLeft: "35%", marginTop: "1rem" }}>
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
      </div>
      {/* end input  */}
      <div className="employee-section">
        {staff
          .filter((staff) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = staff.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((singleEmployee) => {
            const { employeeID: id, name, dept, birthYear } = singleEmployee;
            function getAge(dateString) {
              var ageInMilliseconds = new Date() - new Date(dateString);
              return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
            }
            const age = getAge(birthYear);
            // console.log(age);
            return (
              <Fragment key={id}>
                <div className="employee">
                  <h4>{name}</h4>
                  <p>{dept}</p>
                  <h4>{age}</h4>
                  <Link to={`/staff/${id}`} className="detailsColor">
                    Details
                  </Link>
                </div>
              </Fragment>
            );
          })}
      </div>
    </section>
  );
};

export default Employee;
