import { useContext } from "react"
import context from "../../Context"

const DropDown = ({content , setValue , changeValue,handleFilter,temp }) => {
  let { mode , setmode , countryData } = useContext(context ) ;
  return (
    <select className={`mr-4 h-full shadow-lg  mb-3  lg:mb-3 ${mode == "light" ? "bg-custom-grey text-black" : "bg-dark-mode-2 text-white"} lg:p-0`} value={setValue} name={temp}
    onChange={(e)=>{changeValue( e.target.value ),handleFilter(e)}}
    >
        {
            content.map(( item  , i ) => {
             return <option key={i} className="" >{item}</option>   
            })
        }
    </select>
  )
}

export default DropDown