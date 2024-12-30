import { useContext } from "react";
import context from "../../Context";

const AllFlags = ({ data, singlePage }) => {
  let { mode, setmode, countryData } = useContext(context);
  return (
    <>
      {data.length != 0 ? (
        <div className="flex  flex-wrap lg:justify-between pt-6 justify-center w-full mt-24 lg:mt-0">
          {data.map((item) => (
            <div
              className={`mb-12 shadow-xl ${
                mode == "light"
                  ? "bg-white text-black"
                  : "bg-dark-mode-2 text-white"
              } lg:mr-0 mr-3`}
              key={item.name.common}
              onClick={() => {
                singlePage(item.cca3);
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${item.flags.svg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "200px",
                  width: "350px",
                }}
                className="rounded-tl-xl rounded-tr-xl"
              ></div>
              <div className="mb-12">
                <h2 className="font-bold mt-8 mb-8 text-left ml-4 text-xl">
                  {item.name.common}
                </h2>
                <p className="text-left ml-4 ">
                  <span className="font-bold">Population:</span>&nbsp;
                  {item.population.toLocaleString()}
                </p>
                <p className="text-left ml-4 ">
                  <span className="font-bold">Region:</span>&nbsp;
                  {item.region}
                </p>
                <p className="text-left ml-4 ">
                  <span className="font-bold">Capital:</span>&nbsp;
                  {item.capital}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className=" mt-[20vh] ">No countries found</h1>
      )}
    </>
  );
};

export default AllFlags;
