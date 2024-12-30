import { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import context from "../../Context";
import DropDown from "./DropDown";
import AllFlags from "./AllFlags";
import { useNavigate } from "react-router-dom";

const HomePageBody = () => {
  let { mode, setmode, countryData } = useContext(context);
  let Navigate = useNavigate() ;
  const [sort, setSort] = useState("");
  const [input, setinputValue] = useState("");
  const [filter, setFilter] = useState("");
  const [subregion, setsubregion] = useState("");
  let subfilter = false;
  let subregionArr = [];
  let tempData = [...countryData];
  let filterArr = ["Filter by region"];
  
  function handleClickSinglePage(code) {
    Navigate(`/country/${code}`)
  }
  
  countryData.map((item) => {
    filterArr.push(item.region);
  });

  filterArr = filterArr.reduce((first, second) => {
    if (!first.includes(second)) {
      first.push(second);
    }
    return first;
  }, []);

  let sortArr = [
    "Sort",
    "Sort by population ASC",
    "Sort by population DESC",
    "Sort by area ASC",
    "Sort by area DESC",
  ];

  if (input != "") {
    tempData = tempData.filter((item) => {
      if (
        item.name.common.toLowerCase().indexOf(input.toLowerCase().trim()) != -1
      ) {
        return item;
      }
    });
  }
  if (sort != "") {
    if (sort == "Sort by population ASC") {
      tempData.sort((a, b) => a.population - b.population);
    } else if (sort == "Sort by population DESC") {
      tempData.sort((a, b) => b.population - a.population);
    } else if (sort == "Sort by area ASC") {
      tempData.sort((a, b) => a.area - b.area);
    } else if (sort == "Sort by area DESC") {
      tempData.sort((a, b) => b.area - a.area);
    }
  }

  if (filter != "") {
    if (filter != "Filter by region") {
      tempData = tempData.filter((item) => item.region == filter);
      tempData.map((item) => {
        subregionArr.push(item.subregion);
      });

      //subregion array
      let finalsubArr = subregionArr.reduce((first, second) => {
        if (!first.includes(second)) {
          first.push(second);
        }
        return first;
      }, []);
      subregionArr = ["Filter by subregion", ...finalsubArr];
      subfilter = true;
    }
  }

  if (subregion != "") {
    if (subregion != "Filter by subregion") {
      tempData = tempData.filter((item) => item.subregion == subregion);
    }
  }
  const handleFilter = (e) => {
    if (e.target.name === "region") {
      setsubregion("");
    }
  };

  return (
    <div className="border-box mx-4">
      <div className="flex justify-between  pt-12 flex-col lg:flex-row w-full">
        <SearchBar input={input} setinputValue={setinputValue} />
        <div>
          <DropDown
            content={sortArr}
            setValue={sort}
            changeValue={setSort}
            handleFilter={handleFilter}
            temp="sort"
          />

          <DropDown
            content={filterArr}
            setValue={filter}
            changeValue={setFilter}
            handleFilter={handleFilter}
            temp="region"
          />
          {subfilter ? (
            <DropDown
              content={subregionArr}
              setValue={subregion}
              changeValue={setsubregion}
              handleFilter={handleFilter}
              temp="subRegion"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <AllFlags data={tempData} singlePage = { handleClickSinglePage } />
    </div>
  );
};

export default HomePageBody;
