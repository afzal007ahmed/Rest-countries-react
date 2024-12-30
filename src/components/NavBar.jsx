import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import context from "../Context";

const NavBar = () => {
  let { mode, setmode } = useContext(context);
  let navigate = useNavigate();
  function setMode() {
    if (mode == "light") {
      setmode("dark");
    } else {
      setmode("light");
    }
  }
  return (
    <>
      <div
        className={`flex justify-between lg:px-16 pt-8 pb-4 shadow-lg px-0 ${
          mode == "light" ? "bg-white text-black" : "bg-dark-mode-2 text-white"
        }`}
      >
        <h2
          className="font-bold text-2xl"
          onClick={() => {
            navigate("/");
          }}
        >
          Where in the world ?
        </h2>
        <p className={`font-bold}`} onClick={() => setMode()}>
          {mode == "light" ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </>
  );
};

export default NavBar;