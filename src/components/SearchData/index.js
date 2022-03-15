/* eslint-disable eqeqeq */
// import * as React from "react";
import Button from "@mui/material/Button";

// icon
import AddIcon from "@mui/icons-material/Add";
// import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import { grey } from "@mui/material/colors";

import React from "react";

import axios from "axios";
import { Autocomplete, TextField } from "@mui/material";

const type = [
  { label: "URL", id: 1 },
  { label: "Plugin", id: 2 },
  { label: "Rules", id: 3 },
];

class SearchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [type[1]],
      setOpen: false,
      setScroll: false,
      scroll: "paper",
      idUser: "",
      username: "",
      email: "",
      phone: "",
      firstname: "",
      lastname: "",
      city: "",

      versionId: "",
    };
  }

  handleChange = (event) => {
    this.setState({ age: event.target.value });
    // setAge(event.target.value);
  };

  handleClickOpen = () => () => {
    this.setState({ setOpen: true });
  };

  handleClose = () => {
    this.setState({
      setOpen: false,
    });
  };

  addDataUser = () => () => {
    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    const username = this.state.username;
    const email = this.state.email;
    const phone = this.state.phone;
    const city = this.state.city;

    // axios({
    //   url: "https://fakestoreapi.com/users",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({
    //     email: `"+${email}+"`,
    //     username: `"+${username}+"`,
    //     password: "m38rmF$",
    //     name: {
    //       firstname: `"+${firstname}+"`,
    //       lastname: `"+${lastname}+"`,
    //     },
    //     address: {
    //       city: `"+${city}+"`,
    //       street: "7835 new road",
    //       number: 3,
    //       zipcode: "12926-3874",
    //       geolocation: {
    //         lat: "-37.3159",
    //         long: "81.1496",
    //       },
    //     },
    //     phone: `"+${phone}+"`,
    //   }),
    // }).then((res) => {
    //   res.json();
    //   // const datax = res.data;
    //   console.log("COMPONENT TYPE " + res);
    //   // this.setState({
    //   //   getData: datax,
    //   // });
    //   // datax.map((data) => {
    //   //   return data.email;
    //   // });
    //   // console.log("DATA PLUGINS " + datax);
    // });

    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: `"${email}"`,
        username: `"${username}"`,
        password: "m38rmF$",
        name: {
          firstname: `"${firstname}"`,
          lastname: `"${lastname}"`,
        },
        address: {
          city: `"${city}"`,
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: `"${phone}"`,
      }),
    })
      .then((res) => {
        res.json();
        // if(res !==null ){

        // }
        console.log("DATA POST " + res.json());
      })
      .then((json) => console.log(json));
    // alert(id);
  };

  render() {
    return (
      <>
        <TextField
          fullWidth
          size="small"
          label="Search Data User"
          sx={{ mr: 2, mb: 2 }}
        />

        {/* <Autocomplete
          freeSolo
          sx={{ mr: 2, mb: 2 }}
          fullWidth
          size="small"
          id="search komoditas"
          disableClearable
          // options={Ikan.map((name) => name)}
          // onChange={handleClickTag}
          // onInputChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Data User"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        /> */}
      </>
    );
  }
}

export default SearchData;
