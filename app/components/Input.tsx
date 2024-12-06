"use client";
import SearchIcon from "@mui/icons-material/Search";

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ handleSearch, setLocation }: InputProps) => {
  return (
    <form
      className="flex items-center md:w-2/4 w-full order-2 md:order-1"
      aria-label="Search form"
    >
      <label htmlFor="search-input" className="sr-only">
        Search for a location
      </label>
      <input
        id="search-input"
        type="text"
        className="w-full rounded-lg p-1 outline-none text-blue-600"
        placeholder="Search..."
        onKeyDown={handleSearch}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <button
        type="button"
        className="ml-[-25px] text-blue-600 cursor-pointer"
        aria-label="Search"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default Input;
