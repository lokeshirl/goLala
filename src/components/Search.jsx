import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = () => {
  return (
    <div className="search-box border rounded flex items-center justify-between p-2 border-solid shadow-sm focus-within:border focus-within:border-primary">
      <input
        type="text"
        className="search-input outline-none "
        placeholder="Search..."
      />
      <button className="search-btn">
        <MagnifyingGlassIcon className="search-icon w-4 h-4" />
      </button>
    </div>
  );
};

export default Search;
