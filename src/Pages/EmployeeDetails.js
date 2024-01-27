import React from "react";
import { useParams } from "react-router-dom";
import Employee from "../compenents/employees.json";
import NavBar from "../compenents/NavBar";
import Contact from "../compenents/Contact";
import bg from "../parts/bg.png";

function EmployeeDetails() {
  const { employeeID } = useParams();
  return (
    <div>
      <NavBar />
      <div
        className=" bg-no-repeat bg-cover bg-fixed "
        style={{ backgroundImage: `url(${bg})` }}>
        <div className=" h-svh pt-36">
          <cenetr>
            <div>
              {Employee.map((employee) => {
                if (employee.id == employeeID) {
                  return (
                    <center>
                      <h1 className=" text-7xl pt-4 text-red-700">
                        {employee.name}
                      </h1>
                      <img
                        src={employee.image}
                        alt={employee.name}
                        className="  w-[600px] h-[400px] my-9 rounded-xl "
                      />
                      <div className=" w-2/5 bg-white bg-opacity-50 rounded-2xl">
                        <p className=" text-5xl">{employee.position}</p>
                        <p className="  py-8 text-lg">{employee.description}</p>
                      </div>
                    </center>
                  );
                }
              })}
            </div>
          </cenetr>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default EmployeeDetails;
