import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const MainCategoryCard = () => {
  return (
    <article className="group">
      <img
        alt="Lava"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
      />

      <div className="p-4">
        <button className="bg-primary w-full text-white p-2 px-4 rounded-md flex-center items-center gap-2">
          🍱 Order Now
          <ArrowUpRightIcon className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};

export default MainCategoryCard;
