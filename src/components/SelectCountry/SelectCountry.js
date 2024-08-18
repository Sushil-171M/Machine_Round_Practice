import React, { useState, useEffect } from "react";
import { Countries } from "../../Utility/CountryList";

const SelectCountry = () => {
  const CountryList = Object.keys(Countries);
  const [country, setCountry] = useState("");
  const [stateList, setStateList] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  const onCountryChangeHandler = (e) => {
    setCountry(e.target.value);
  };

  const onStateChangeHandler = (e) => {
    setSelectedState(e.target.value);
  };

  useEffect(() => {
    const stateData = Countries[country];
    setStateList(stateData);
  }, [country]);

  return (
    <>
      <div>
        <h3>
          {" "}
          This program is for dropdown in which we first select country and
          based on that we will select state
        </h3>
        <div>
          <select onChange={onCountryChangeHandler} value={country}>
            <option value="country">Please Select a Country</option>
            {CountryList.map((country, index) => {
              return (
                <option key={index} value={country}>
                  {country}
                </option>
              );
            })}
          </select>
        </div>

        <div style={{ margin: "20px" }}>
          <select
            value={selectedState}
            onChange={onStateChangeHandler}
            multiple={false}
          >
            <option value="State"> Please Select a State </option>
            {stateList &&
              stateList.map((st, index) => {
                return (
                  <option key={index} value={st}>
                    {st}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    </>
  );
};

export default SelectCountry;
