import { useContext } from "react";
import context from "../../Context";
const SearchBar = ({ input, setinputValue }) => {
  let { mode, setmode, countryData } = useContext(context);
  return (
    <input
      type="text"
      placeholder="Enter a place..."
      className={`border p-4 lg:w-96 mb-6 lg:mb-0 rounded-lg border-black w-1/2 ${
        mode == "light" ? "bg-white text-black" : "bg-dark-mode-2 text-white"
      }`}
      value={input}
      onChange={(e) => {
        setinputValue(e.target.value);
      }}
    />
  );
};

export default SearchBar;
