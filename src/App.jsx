import "./App.css";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import promise from "./FetchData";
import context from "./Context.jsx";
import NavBar from "./components/NavBar";
import HomePageBody from "./components/HomePage/HomePageBody.jsx";
import SinglePage from "./components/SinglePage/SinglePage.jsx";

function App() {
  const [mode, setmode] = useState("light");
  const [loading, setloading] = useState(true);
  const [ countryData , setCountryData ] = useState([]) ;
  const [err, seterr] = useState("");

  useEffect(() => {
    promise
      .then((data) => {
        setloading(false);
        setCountryData( data ) ;
      })
      .catch((err) => {
        setloading(false);
        seterr(err);
      });
  }, []);


  return (
    <div className={`${mode == "light" ? "bg-white text-black" : "bg-dark-mode1 text-white"} min-h-screen`}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        err != '' ? <h1>Failed to fetch data</h1>  : <BrowserRouter>
          <context.Provider value={{ mode, setmode, countryData }}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <NavBar /> <HomePageBody />
                  </>
                }
              />
              <Route path="/country/:id" element = {<><NavBar/><SinglePage/></>}/>
            </Routes>
          </context.Provider>
        </BrowserRouter>
      )}
    </div> 
  );
}

export default App;
