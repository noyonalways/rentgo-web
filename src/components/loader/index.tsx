import React from "react";

const BouncingLoader: React.FC = () => {
  return (
    <div className="gap-x-2 flex justify-center items-center">
      <div className="size-4 bg-primary/70 animate-bounce rounded-full"></div>
      <div className="size-4 bg-primary/80 animate-bounce delay-100 rounded-full "></div>
      <div className="size-4 bg-primary/90 animate-bounce delay-200 rounded-full"></div>
    </div>
  );
};

export default BouncingLoader;
