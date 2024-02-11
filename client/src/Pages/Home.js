import React from "react";
import Navbar from "../Components/Navbar";
import TweetContainer from "../Components/TweetContainer";
import SearchBar from "../Components/SearchBar";
import HappeningChilds from "../Components/HappeningChilds";

const Home = () => {
  return (
    <div className="App">
      <div className="flex max-h-svh">
        <div className="overflow-y-hidden w-1/4">
          <Navbar />
        </div>
        <div className="flex w-full overflow-y-auto">
          {/* Central Container */}
          <div className=" h-screen">
            <TweetContainer />
            <TweetContainer />
            <TweetContainer />
            <TweetContainer />
            <TweetContainer />
            <div className="h-20 w-full" />
          </div>
          <div className="w-1/2 flex flex-col py-5 px-5">
            <SearchBar />
            <div
              className="mt-10 flex
            flex-col justify-start bg-gray-200 rounded-xl"
            >
              <span className="text-2xl font-bold text-start mb-4 p-4">
                What's happening
              </span>
              <HappeningChilds />
              <HappeningChilds />
              <HappeningChilds />
              <HappeningChilds />
              <HappeningChilds />
              <HappeningChilds />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
