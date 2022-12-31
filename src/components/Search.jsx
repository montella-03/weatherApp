import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Url,ApiOptions } from "../Api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${Url}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        ApiOptions
      );
      const response_1 = await response.json();
      return {
        options: response_1.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name},${city.countryCode}}`,
          };
        }),
      };
    } catch (err) {
      return console.error(err);
    }
  };
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <div className='text-gray-400 rounded drop-shadow-md'>
      <AsyncPaginate
        placeholder="search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
