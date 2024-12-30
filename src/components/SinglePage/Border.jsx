import { useContext } from "react";
import context from "../../Context.jsx"
import { useNavigate } from "react-router-dom";
const Border = ({selectedPage , Codes }) => {
    let { mode , setmode , countryData } = useContext(context ) ;
    let navigate = useNavigate() ;  
  return (
    selectedPage.borders != undefined
        ? selectedPage.borders.map((item, index) => {
            return (

              <span
                className={`border p-2 ml-3  ${
                  mode == "light"
                    ? "bg-custom-grey text-black"
                    : "bg-dark-mode1 text-white"
                }`}
                key={index}
                onClick={() => { console.log(Codes[ item ].name.common) ; navigate(`/country/${Codes[ item ].cca3}`) ;}}
              >
                                  
               {Codes[item].name.common} &nbsp;
              </span>
            );
          })
        : null

  )
}

export default Border