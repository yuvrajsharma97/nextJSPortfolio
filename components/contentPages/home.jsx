import React from "react";
import Image from "next/image";
const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full">
      <div className="flex w-full">
        <div className="w-1/2">
          <Image
            src="/assets/1609.jpg"
            alt="My Image"
            width="300"
            height="200"
          />
        </div>
        <div className="w-1/2">

        </div>
      </div>
    </div>
  );
};

export default HomePage;
