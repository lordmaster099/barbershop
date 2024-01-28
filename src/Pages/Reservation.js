import React, { useState, useEffect } from "react";
import NavBar from "../compenents/NavBar";
import { Link } from "react-router-dom";
import Contact from "../compenents/Contact";
import bg from "../parts/bg.png";

function Reservations() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setPhoneNumber] = useState("");
  const [ser, setSer] = useState("0");
  const [Service, setService] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [resDate, setDate] = useState("2024-01-01");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [resTime, setTime] = useState("08:00");

  useEffect(() => {
    fetch("http://localhost:8000/Services")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setService(data);
      });
  }, []);

  const NumbersOnly = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, ""); // \D is a shorthand for non-digit characters
    setPhoneNumber(numericValue);
  };
  const handleSubmit = (e) => {
    if (dayOfWeek !== "Closed") {
      const date = { name, lastName, tel, ser, resDate, dayOfWeek, resTime };
      fetch("http://localhost:8000/booking", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(date),
      }).then(() => {
        alert("Reservation added success for  :" + tel);
      });
    } else {
      e.preventDefault();
      alert("we are closed on monday");
    }
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    setDate(newDate);
    if (newDate) {
      const dateObject = new Date(newDate);
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const newDayOfWeek = daysOfWeek[dateObject.getDay()];
      setDayOfWeek(newDayOfWeek);

      const openingTime = 8; // Replace with your actual opening time in 24-hour format
      let closingTime = 20; // Replace with your actual closing time in 24-hour format

      // Adjust closing time for some days (half-day)
      if (newDayOfWeek === "Saturday" || newDayOfWeek === "Sunday") {
        closingTime = 13; // Replace with your actual closing time for Saturday in 24-hour format
      }

      // Check for Monday (closed)
      if (newDayOfWeek === "Monday") {
        setDayOfWeek("Closed");
        setAvailableTimes([]);
      } else {
        const interval = 30; // Time interval in minutes

        // Generate available times every half-hour between opening and closing times
        const times = [];
        for (let hour = openingTime; hour <= closingTime; hour++) {
          for (let minute = 0; minute < 60; minute += interval) {
            const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
              .toString()
              .padStart(2, "0")}`;
            times.push(formattedTime);
          }
        }

        setAvailableTimes(times);
      }
    } else {
      setDayOfWeek("");
      setAvailableTimes([]);
    }
  };
  return (
    <div>
      <NavBar />
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className=" h-screen bg-no-repeat bg-cover">
        <form
          className=" justify-center flex  relative top-10  "
          onSubmit={handleSubmit}>
          <fieldset className=" px-10 py-10 w-2/5  bg-gray-700 bg-opacity-70 flex flex-col space-y-8 mx-36 my-6 rounded-2xl ">
            <h1 className=" text-7xl font-serif text-center py-7">booking</h1>

            <div className=" grid grid-cols-7">
              <div className=" text-2xl grid-cols-subgrid col-start-3 col-span-2">
                First name
              </div>
              <input
                type="text"
                className=" border-red-700 border-solid border flex justify-center relative grid-cols-subgrid col-start-5  col-span-2"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className=" grid grid-cols-7">
              <div className=" text-2xl grid-cols-subgrid col-start-3 col-span-2">
                Last name
              </div>
              <input
                type="text"
                className=" border-red-700 border-solid border flex justify-center relative grid-cols-subgrid col-start-5  col-span-2"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className=" grid grid-cols-7">
              <div className=" text-2xl grid-cols-subgrid col-start-3 col-span-2">
                Phone Number
              </div>
              <input
                type="tel"
                className=" border-red-700 border-solid border flex justify-center relative grid-cols-subgrid col-start-5  col-span-2"
                required
                value={tel}
                onChange={NumbersOnly}
                minLength="8"
                maxLength="8"
              />
            </div>
            <div className=" grid grid-cols-7">
              <div className=" text-2xl grid-cols-subgrid col-start-3 col-span-2">
                Select Service
              </div>
              {Service && (
                <select
                  className=" grid-cols-subgrid col-start-5 col-span-2"
                  value={ser}
                  required
                  onChange={(e) => setSer(e.target.value)}>
                  <option value="0">Services</option>
                  {Service.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name} : {service.price}
                    </option>
                  ))}
                </select>
              )}
              
            </div>
            <div className=" flex space-x-7 justify-center">
              <div htmlFor="date" className=" text-2xl">
                Select Date:
              </div>
              <input
                type="date"
                className=" w-[150px] min-w-[150px] text-xl"
                value={resDate}
                onChange={handleDateChange}
                required
                max="2024-12-31" // Set the maximum date to 2024-12-31
                min="2024-01-01" // Set the minimum date to 2024-01-01
              />

              {dayOfWeek && (
                <p>
                  {dayOfWeek === "Closed"
                    ? "We are closed on Monday"
                    : `Selected day: ${dayOfWeek}`}
                </p>
              )}
            </div>
            <div className=" flex space-x-7 justify-center">
              {availableTimes.length > 0 && (
                <div className=" flex gap-4">
                  <div htmlFor="time" className="text-2xl">
                    Select Time:
                  </div>
                  <select
                    className=" h-8 text-xl relative "
                    value={resTime}
                    required
                    onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <div className=" flex justify-center space-x-52">
              <button
                type="submit"
                className="ring-2 hover:ring-green-600 hover:bg-blue-600  ring-blue-600 duration-700 px-5 py-1 rounded-lg bg-green-600 text-white ">
                take place
              </button>
              <Link
                to="/Cancel"
                className="ring-2 ring-red-500 px-5 py-1 rounded-lg bg-gray-600 hover:ring-gray-600 hover:bg-red-500 duration-700 text-white ">
                Cancel your date
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
      <Contact />
    </div>
  );
}

export default Reservations;
