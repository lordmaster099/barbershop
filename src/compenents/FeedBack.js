import React, { useEffect, useState } from "react";
import renderStarRating from "../parts/StarShow";

function FeedBacks() {
  const [feedBack, setFeedBack] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/FeedBack")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeedBack(data);
      });
  }, []);

  return (
    <div className=" bg-white bg-opacity-70 mx-4 rounded-2xl py-4 mt-6">
      <h1 className=" flex justify-center text-5xl my-7">Feed Backs</h1>
      {feedBack && (
        <div className=" relative flex flex-wrap gap-5 justify-center  ">
          {feedBack.slice(0, 6).map((feedback) => (
            <div
              key={feedback.customerId}
              className=" border-collapse border-4 border-black rounded-lg border-dashed py-6">
              <p className=" flex justify-center text-3xl">{feedback.name}</p>
              <p className=" w-[600px] px-3">{feedback.feedback}</p>
              <p className=" flex px-3">
                Star Rating: {renderStarRating(feedback.starRating)}
              </p>
            </div>
          ))}
        </div>
      )}
      <div></div>
    </div>
  );
}

export default FeedBacks;
