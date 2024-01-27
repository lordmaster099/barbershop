import React from "react";
import NavBar from "../compenents/NavBar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Contact from "../compenents/Contact";

function FAQ() {
  const imgLink =
    "https://i.pinimg.com/564x/2b/9f/35/2b9f3508b2e141e3cdec78fe6ff771e9.jpg";
  return (
    <>
      <NavBar />
      <div className=" bg-gray-400 h-dvh flex xl:justify-normal sm:justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className=" flex  xl:w-2/5 xl:px-10  justify-center relative top-12 mx-14 py-5 bg-opacity-50 text-opacity-100 bg-local bg-no-repeat bg-cover xl:h-4/5 sm:h-max rounded-s-lg Left-to-right hover:rounded-none"
          style={{
            backgroundImage: `url(${imgLink})`,
          }}>
          <motion.div className=" relative xl:left-full sm:left-0">
            <dl>
              <motion.h1
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 1,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" text-3xl py-6 text-red-600">
                FAQ
              </motion.h1>
              <motion.dt
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 1.4,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" tInList">
                What services do you offer?
              </motion.dt>
              <motion.dd
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 1.8,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" dInList">
                Provide a comprehensive list of the haircut and styling services
                you provide.
              </motion.dd>
              <motion.dt
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 2.1,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" tInList">
                How much do your services cost?
              </motion.dt>
              <motion.dd
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 2.4,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" dInList">
                Mention the prices for different services or provide a general
                pricing range.
              </motion.dd>
              <motion.dt
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 2.6,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" tInList">
                What payment methods do you accept?
              </motion.dt>
              <motion.dd
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 2.6,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" dInList">
                Specify whether you accept cash, credit cards, or other payment
                methods.
              </motion.dd>
              <motion.dt
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 2.7,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" tInList">
                Can I bring a photo for reference when getting a haircut?
              </motion.dt>
              <motion.dd
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 2.8,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" dInList">
                Explain whether clients can bring inspiration photos for their
                desired hairstyle.
              </motion.dd>
              <motion.dt
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 2.9,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" tInList">
                How long does a typical appointment take?
              </motion.dt>
              <motion.dd
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 3,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" dInList">
                Provide an estimate of the duration for different services.
              </motion.dd>
              <motion.dt
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 3.2,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" tInList">
                Do you offer discounts or loyalty programs?
              </motion.dt>
              <motion.dd
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 3.4,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" dInList">
                Mention any promotions, discounts, or loyalty programs you have.
              </motion.dd>
              <motion.dt
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 3.7,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" tInList">
                What's your cancellation policy?
              </motion.dt>
              <motion.dd
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 4,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" dInList">
                Explain your policy regarding canceling or rescheduling
                appointments.
              </motion.dd>
              <motion.dt
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 4.3,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" tInList">
                Do you provide services for children or seniors?
              </motion.dt>
              <motion.dd
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 4.6,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" dInList">
                Specify if you offer specialized services for certain age
                groups.
              </motion.dd>
              <motion.dt
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 5,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" tInList">
                Can I book an appointment online?
              </motion.dt>
              <motion.dd
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 5.4,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" dInList">
                If applicable, provide information about your online booking
                system.
                <Link to="/Reservations" className=" text-red-700">
                  from here
                </Link>
              </motion.dd>
              <motion.dt
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 5.8,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" tInList">
                How can I contact you for additional questions?
              </motion.dt>
              <motion.dd
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 6,
                  type: "spring",
                  stiffness: 120,
                }}
                className=" dInList">
                Provide contact information for further inquiries.
                <Link to="/Contact" className=" text-red-700">
                  Contact
                </Link>
              </motion.dd>
            </dl>
          </motion.div>
        </motion.div>
      </div>
      <Contact />
    </>
  );
}

export default FAQ;
