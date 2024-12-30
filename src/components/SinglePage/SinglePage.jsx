import { useContext } from "react";
import context from "../../Context";
import { useNavigate, useParams } from "react-router-dom";
import Border from "./Border";

const SinglePage = () => {
  let { mode, setmode, countryData } = useContext(context);
  let navigate = useNavigate();
  let parameter = useParams();
  let selectedPage = countryData.filter((item) => item.cca3 == parameter.id)[0];
  console.log(selectedPage);
  let Codes = {};
  countryData.map((item) => {
    Codes[item.cca3] = item;
  });

  return (
    <div
      className={`pt-16 lg:px-12  min-h-screen mx-12 lg:mx-0 ${
        mode == "light"
          ? "bg-custom-grey text-black"
          : "bg-dark-mode1 text-white"
      }`}
    >
      <button
        className="border px-12 py-2"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
      <div
        className={`flex  mt-12 lg:flex-row flex-col w-full  lg:px-0 ${
          mode == "light" ? "bg-white text-black" : "bg-dark-mode-2 text-white"
        } `}
      >
        <div className={`lg:w-1/2 w-[100%] h-inherit`}>
          <img
            src={`${selectedPage.flags.svg}`}
            className=" block w-full h-full object-cover"
          />
        </div>
        <div className={`lg:w-1/2 lg:pl-12 mt-5 py-8 ml-4 lg:ml-0`}>
          <h1 className="font-bold text-3xl">{selectedPage.name.common}</h1>
          <div className="mt-16 flex lg:flex-row flex-col  w-full">
            <div className="lg:w-1/2 w-full">
              <p>
                <span className="font-bold">Native Name:</span> &nbsp;
                {
                  selectedPage.name.nativeName[
                    Object.keys(selectedPage.name.nativeName)[0]
                  ].official
                }
              </p>
              <p className="mt-2">
                <span className="font-bold">Population:</span> &nbsp;
                {selectedPage.population.toLocaleString()}
              </p>
              <p className="mt-2">
                <span className="font-bold">Region:</span> &nbsp;
                {selectedPage.region}
              </p>
              <p className="mt-2">
                <span className="font-bold">Sub Region:</span> &nbsp;
                {selectedPage.subregion}
              </p>
              <p className="mt-2">
                <span className="font-bold">Capital:</span> &nbsp;
                {selectedPage.capital}
              </p>
            </div>
            <div className="lg:pl-4 lg:w-1/2 w-full lg:mt-0 mt-8">
              <p className="w-[100%]">
                <span className="font-bold">Top Level Domain:</span> &nbsp;
                {selectedPage.tld[0]}
              </p>
              {selectedPage.currencies != undefined ? (
                <p className="mt-2">
                  <span className="font-bold">Currencies:</span> &nbsp;
                  {
                    selectedPage.currencies[
                      Object.keys(selectedPage.currencies)[0]
                    ].name
                  }
                </p>
              ) : null}
              <p className="mt-2">
                <span className="font-bold">Languages:</span> &nbsp;
                {Object.keys(selectedPage.languages).map((item, index) => {
                  return (
                    <span className="mr-2" key={index}>
                      {selectedPage.languages[item]}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="w-full leading-[3rem]">
              <span className="font-bold">Border Countries:</span>
              <Border selectedPage={selectedPage} Codes={Codes} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
