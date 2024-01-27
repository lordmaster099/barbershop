import React from "react";
import { FaFacebook, FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
function Contact() {
  return (
    <>
      <div className="flex justify-center  bg-black py-12">
        <div className=" flex gap-4 ">
          {/*-- Facebook -->*/}
          <a href="https://www.facebook.com" target="blank">
            <FaFacebook className=" size-5 text-white " />
          </a>
          {/*-- TikTok --*/}
          <a href="https://www.tiktok.com" target="blank">
            <FaTiktok className=" size-5  text-white" />
          </a>
          {/*-- instagram --*/}
          <a href="https://www.instagram.com" target="blank">
            <FaInstagram className=" size-5  text-white" />
          </a>
          {/*-- X --*/}
          <a href="https://twitter.com" target="blank">
            <BsTwitterX className=" size-5  text-white" />
          </a>
          {/*-- whatsapp --*/}
          <a href="https://whatsapp.com" target="blank">
            <FaWhatsapp className=" size-5  text-white" />
          </a>
          <p className=" size-5  text-white relative bottom-1">+0-12-345-678</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
