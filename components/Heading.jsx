import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {heading}
      </h2>
    </div>
  );
};

export default Heading;
