import React, { useState, useEffect } from "react";
import NavBar from "../compenents/NavBar";
import bg from "../parts/bg.png";
import Contact from "../compenents/Contact";

function Cancel() {
  const [foundItems, setFoundItems] = useState([]);
  const [phoneNumberToSearch, setPhoneNumberToSearch] = useState("");
  const [res, setRes] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/booking/");
        const jsonData = await response.json();

        // Search for items based on the phone number
        const desiredItems = jsonData.filter(
          (item) => item.tel === phoneNumberToSearch
        );

        // Set the found items in state
        setFoundItems(desiredItems);
      } catch (error) {
        console.error("Error fetching or parsing data:", error);
      }
    };

    fetchData();
  }, [res, phoneNumberToSearch]);
  const cancelIt = (id, tel) => {
    fetch("http://localhost:8000/booking/" + id, {
      method: "DELETE",
    }).then(() => {
      alert("cancel success :" + tel);
      setRes(res + 1);
    });
  };
  return (
    <>
      <NavBar />
      <div
        className=" bg-no-repeat bg-cover bg-fixed h-screen text-xl"
        style={{ backgroundImage: `url(${bg})` }}>
        <div className=" py-10 flex flex-col items-center">
          <input
            type="tel"
            className=" border-red-700 border-solid border w-2/12 "
            required
            value={phoneNumberToSearch}
            onChange={(e) => setPhoneNumberToSearch(e.target.value)}
            maxLength="8"
          />
          <div className="">
            {foundItems.length > 0 ? (
              <div>
                <h2 className=" text-center py-10">Matching Items:</h2>
                <div className="flex flex-wrap gap-10 px-10 text-center  justify-center ">
                  {foundItems.map((item) => (
                    <div
                      key={item.id}
                      className="   text-black bg-white  bg-opacity-50 rounded-xl text-start">
                      <h1>Name : {item.name}</h1>
                      <p>Service : {item.ser}</p>
                      <p>Phone Number : {item.tel}</p>
                      <p>Date : {item.resDate}</p>
                      <p>Time : {item.resTime}</p>
                      <div className=" flex justify-center">
                        <button
                          onClick={() => cancelIt(item.id, item.tel)}
                          className=" border border-red-700 rounded-xl py-1 pb-2 px-2 bg-black text-white hover:bg-red-700 duration-700">
                          cancel
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p>No data found for the specified phone number.</p>
            )}
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Cancel;
