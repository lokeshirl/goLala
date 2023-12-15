import React from "react";
import MainCategoryCard from "./MainCategoryCard.jsx";

const MainCategoryContainer = () => {
  return (
    <div className=" container-max grid h-52 grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      <div className="h-full rounded-lg hover:bg-gray-50">
        <MainCategoryCard />
      </div>
      <div className="h-full rounded-lg hover:bg-gray-50">
        <MainCategoryCard />
      </div>
      <div className="h-full rounded-lg hover:bg-gray-50">
        <MainCategoryCard />
      </div>
    </div>
  );
};

export default MainCategoryContainer;
