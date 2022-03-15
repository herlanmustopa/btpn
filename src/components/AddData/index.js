/* eslint-disable eqeqeq */
// import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// icon
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
// import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import { grey } from "@mui/material/colors";

import React from "react";

import {
  IconButton,
  Stack,
  TextField,
  Typography,
  Autocomplete,
  Box,
  Skeleton,
  // Grid,
} from "@mui/material";

import axios from "axios";

const type = [
  { label: "URL", id: 1 },
  { label: "Plugin", id: 2 },
  { label: "Rules", id: 3 },
];

class AddData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [type[1]],
      setOpen: false,
      setScroll: false,
      scroll: "paper",
      idUser: "",
      firstname: "",
      lastname: "",
      age: "",

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
    const age = this.state.age;
    fetch("https://simple-contact-crud.herokuapp.com/contact", {
      mode: "no-cors",
      method: "POST",
      // credentials: "include",
      // credentials: "same-origin",
      // redirect: "follow",
      // referrerPolicy: "no-referrer",
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Headers":
      //     "Content-Type, Authorization, X-Requested-With, Origin, Accept, ",
      //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      //   "Access-Control-Allow-Credentials": true,
      //   // "Access-Control-Allow-Headers": "Content-Type, Authorization",
      // },
      body: JSON.stringify({
        firstname: "Herlan",
        // firstname: `${firstname}`,
        lastname: "Mustopa",
        age: 21,
        // age: `${age}`,
        photo:
          "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
      }),
    })
      .then((res) => {
        res.json();
        // if(res !==null ){

        // }
        console.log(JSON.stringify(res.data));
      })
      .then((json) => console.log(json));
    // alert(id);
  };
  addDataUser2 = () => () => {
    // const firstname = this.state.firstname;
    // const lastname = this.state.lastname;
    // const age = this.state.age;
    var axios = require("axios");
    var data = JSON.stringify({
      firstName: "Ariel22",
      lastName: "Noah",
      age: 32,
      photo: "string",
    });

    var config = {
      method: "post",
      url: "https://simple-contact-crud.herokuapp.com/contact",
      // crossorigin:true,
      // mode: "no-cors",
      withCredentials: true,
      // credentials: 'include',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Credentials": true,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const roleId = localStorage.getItem("roleId");

    return (
      <>
        <Button
          disabled={roleId == 4 ? true : false}
          underline="none"
          onClick={this.handleClickOpen()}
          size="small"
          variant="contained"
          endIcon={<AddIcon />}
        >
          Add User
        </Button>
        <Dialog
          fullWidth={true}
          open={this.state.setOpen}
          // onClose={this.handleClosedEdit}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          sx={{ borderRadius: "20px !important" }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <DialogTitle id="scroll-dialog-title" alignItems="center">
              Add User
            </DialogTitle>
            <DialogTitle id="scroll-dialog-title" alignItems="center">
              <IconButton aria-label="expand row" size="small">
                <CancelIcon onClick={this.handleClose} sx={{ color: "red" }} />
              </IconButton>
            </DialogTitle>
          </Stack>

          <DialogContent dividers={this.state.scroll === "paper"}>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              {this.state.loadingEdit ? (
                <Box
                  sx={{ width: "100%", justifyContent: "center" }}
                  justifyItems="center"
                >
                  <Skeleton width={500} height={40} />
                  <Skeleton animatio="wave" width={500} height={40} />
                  <Skeleton animation={false} width={500} height={40} />
                </Box>
              ) : (
                <Box>
                  <TextField
                    sx={{ mb: 4 }}
                    required
                    id="outlined-required"
                    label="firstname"
                    size="small"
                    fullWidth={true}
                    defaultValue={this.state.firstname}
                    onChange={(event) => {
                      this.setState({
                        firstname: event.target.value,
                      });
                    }}
                  />
                  <TextField
                    sx={{ mb: 4 }}
                    required
                    id="outlined-required"
                    label="lastname"
                    size="small"
                    fullWidth={true}
                    defaultValue={this.state.lastname}
                    onChange={(event) => {
                      this.setState({
                        lastname: event.target.value,
                      });
                    }}
                  />

                  <TextField
                    sx={{ mb: 4 }}
                    required
                    id="outlined-required"
                    label="age"
                    size="small"
                    fullWidth={true}
                    defaultValue={this.state.age}
                    onChange={(event) => {
                      this.setState({
                        age: event.target.value,
                      });
                    }}
                  />

                  {/* <TextField
                    sx={{ mb: 4 }}
                    required
                    id="outlined-required"
                    label="Input"
                    size="small"
                    fullWidth={true}
                    defaultValue={this.state.username}
                    onChange={(event) => {
                      this.setState({
                        username: event.target.value,
                      });
                    }}
                  /> */}
                </Box>
              )}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              // color="myBlue"
              size="small"
              onClick={this.addDataUser()}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default AddData;
