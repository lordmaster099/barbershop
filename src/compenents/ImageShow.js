import React from "react";
import img1 from "../parts/img1.jpg";
import img2 from "../parts/img2.jpg";
import img3 from "../parts/img3.jpg";
import img4 from "../parts/img4.jpg";
import img5 from "../parts/img5.jpg";
import img6 from "../parts/img6.jpg";
import img7 from "../parts/img7.jpg";

function ImageShow() {
  return (
    <div className=" flex flex-wrap justify-center gap-1 py-7">
      <img src={img1} className=" h-[300px] hover:scale-110 duration-300" />
      <img src={img2} className=" h-[300px] hover:scale-110 duration-300" />
      <img src={img3} className=" h-[300px] hover:scale-110 duration-300" />
      <img src={img4} className=" h-[300px] hover:scale-110 duration-300" />
      <img src={img5} className=" h-[300px] hover:scale-110 duration-300" />
      <img src={img6} className=" h-[300px] hover:scale-110 duration-300" />
      <img src={img7} className=" h-[300px] hover:scale-110 duration-300" />
    </div>
  );
}

export default ImageShow;
