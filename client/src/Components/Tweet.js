import React from "react";

const Tweet = ({ tImg }) => {
  return (
    <div className="mt-2">
      <img
        src={tImg}
        alt="tweet"
        className="w-4/5 justify-center flex rounded-2xl border-2"
      />
    </div>
  );
};

export default Tweet;
