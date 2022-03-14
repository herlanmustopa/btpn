import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material/";

const Search = ({ setSearch, onSearch }) => {
  const handleChange = async (event) => {
    setSearch(event.target.value);
    onSearch(event.target.value);
  };

  const handleClickTag = async (event) => {
    setSearch(event.target.textContent);
    onSearch(event.target.textContent);
  };
  const Ikan = ["Ikan Hiu", "Ikan Buntal", "Ikan Gurame", "Ikan Bawal"];
  return (
    <Autocomplete
      freeSolo
      sx={{ mr: 2 }}
      fullWidth
      size="small"
      id="search komoditas"
      disableClearable
      options={Ikan.map((name) => name)}
      onChange={handleClickTag}
      onInputChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Ikan"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
};

export default Search;
