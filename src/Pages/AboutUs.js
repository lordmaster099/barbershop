import React from "react";
import Employee from "../compenents/employees.json";
import { Link } from "react-router-dom";
import NavBar from "../compenents/NavBar";
import Contact from "../compenents/Contact";
import bg from "../parts/bg.png";
function AboutUs() {
  return (
    <div>
      <NavBar />
      <div
        className=" bg-no-repeat bg-cover bg-fixed "
        style={{ backgroundImage: `url(${bg})` }}>
        <div className=" flex justify-center">
          <div className=" w-5/12 flex flex-col bg-white bg-opacity-40 px-6 py-5 mt-10 rounded-3xl ">
            <h1 className=" text-center py-10 text-5xl font-bold ">
              Our Modern Twist
            </h1>
            <div className=" flex justify-center">
              <div className=" ">
                <p>
                  In the heart of the urban landscape, a group of trendsetters
                  with a passion for cutting-edge style decided to rewrite the
                  narrative of barbering. This is how "Urban Edge Barbers" came
                  to life.
                </p>
                <br></br>
                <p>
                  Picture this: a sleek, contemporary space where the ambiance
                  is as sharp as the cuts we deliver. Urban Edge Barbers was
                  more than just a salon – it was a statement. Our journey began
                  with a collective vision to redefine the barbershop
                  experience, infusing it with modern aesthetics and a touch of
                  urban cool.
                </p>
                <br></br>
                <p>
                  The idea was simple: break away from conventions and create a
                  space that mirrored the fast-paced rhythm of city life. Armed
                  with razors, clippers, and an unwavering commitment to style,
                  we opened our doors, inviting everyone to embrace a new era of
                  grooming.
                </p>
                <br></br>
                <p>
                  From the graffiti-adorned walls to the beats of the latest
                  tunes, stepping into Urban Edge Barbers is an immersion into
                  contemporary culture. Our skilled barbers, each a trend
                  enthusiast, are not just hair professionals – they are style
                  architects, shaping looks that resonate with the spirit of the
                  city.
                </p>
                <br></br>
                <p>
                  But our story isn't just about haircuts; it's about fostering
                  a community that celebrates individuality. Urban Edge quickly
                  became a hub where diversity is celebrated, and where the
                  unique styles of each client contribute to the vibrant
                  tapestry of our identity.
                </p>
                <br></br>
                The buzz of clippers mingles with the laughter of clients,
                creating an atmosphere that is as electric as the city streets
                themselves. Our journey has seen collaborations with local
                artists, pop-up events, and a fusion of styles that sets Urban
                Edge apart as a cultural landmark.
                <br></br>
                <p>
                  As we reflect on our evolution, we're thankful for the clients
                  who've joined us on this style revolution. Urban Edge Barbers
                  isn't just a salon; it's a lifestyle, a testament to the idea
                  that a haircut is more than a service – it's a statement of
                  self-expression.
                </p>
                <br></br>
                <p>
                  Join us in embracing the bold, the modern, and the
                  cutting-edge. Urban Edge Barbers: where style meets the
                  streets.
                </p>
                <br></br>
                <p>Cheers,</p>
                <br></br>
                <span className=" font-bold">The Urban Edge Barbers Team</span>
              </div>
            </div>
          </div>
        </div>
        <h1 className=" text-center my-10 text-5xl font-bold ">
          Meet the team
        </h1>
        <div className=" flex flex-wrap gap-5 justify-center py-5 ">
          {Employee.map((employee) => {
            return (
              <div>
                <div
                  className=" bg-local flex h-[200px] w-[360px] text-transparent hover:text-white duration-700 rounded-3xl"
                  style={{
                    backgroundImage: `url(${employee.image})`,
                    backgroundSize: `360px 200px`,
                  }}>
                  <div className=" h-full w-full">
                    <Link
                      to={`/EmployeeDetails/${employee.id}`}
                      className="h-full w-full hover:bg-black hover:bg-opacity-50 flex flex-wrap flex-row justify-center items-center rounded-3xl ">
                      <h1 className=" text-3xl font-bold  ">{employee.name}</h1>
                      <p className=" flex justify-center w-full ">
                        {employee.position}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default AboutUs;
