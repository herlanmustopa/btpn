/* eslint-disable eqeqeq */
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  IconButton,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Box,
  Skeleton,
  Autocomplete,
  TextField,
  Button,
  Typography,
} from "@mui/material";

// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      idUser: "",
      firstname: "",
      lastname: "",
      age: "",
      setOpenEdit: false,
      setOpenDelete: false,
      loadingEdit: false,
      scroll: "paper",
      idPopUp: "",
      getData: [],
    };
  }

  getUser() {
    axios({
      url: "https://simple-contact-crud.herokuapp.com/contact",
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      const datax = res.data.data;
      // console.log("COMPONENT TYPE " + datax.map((item) => item.age));
      console.log("DATA PLUGINS " + this.state.getData);
      this.setState({
        getData: datax,
      });
    });
    // alert(id);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser = (id) => () => {
    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    const age = this.state.age;
    fetch("https://simple-contact-crud.herokuapp.com/contact/" + { id }, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      },
      body: JSON.stringify({
        firstname: `${firstname}`,
        lastname: `${lastname}`,
        age: `${age}`,
        photo: `string`,
      }),
    })
      .then((res) => {
        res.json();
        // if(res !==null ){

        // }
        console.log("DATA POST " + res.json());
      })
      .then((json) => console.log(json));
  };
  getSingleUser = (id) => () => {
    this.setState({
      setOpenEdit: true,
      loadingEdit: true,
    });
    axios({
      url: "https://simple-contact-crud.herokuapp.com/contact/" + id,
      method: "get",
    })
      .then((result) => {
        console.log("RES EDIT DATA", result.data);
        const datax = result.data.data;
        // console.log("COMPONENT TYPE " + dataz);

        this.setState({
          idUser: datax.id,
          firstname: datax.firstName,
          lastname: datax.lastName,
          age: datax.age,

          loadingEdit: false,
        });
        // window.location.reload(true);
      })
      .catch((err) => {});
  };
  deleteSingleUser = (id) => () => {
    this.setState({
      loadingEdit: true,
      // setOpenDelete: false,
    });
    axios({
      url: "https://simple-contact-crud.herokuapp.com/contact/" + id,
      method: "DELETE",
    })
      .then((result) => {
        window.location.reload(true);
        result.json();
        // console.log("COMPONENT TYPE " + dataz);
        // window.location.reload(true);
      })
      .then((json) => {
        console.log(json);
      })

      .catch((err) => {});
  };

  closeEdit = () => {
    this.setState({
      setOpenEdit: false,
    });
  };

  closeDelete = () => {
    this.setState({
      setOpenDelete: false,
    });
  };
  openDialogDelete = (id) => () => {
    // id;
    this.setState({
      setOpenDelete: true,
      loadingEdit: true,
      idPopUp: id,
    });
  };

  render() {
    const roleId = localStorage.getItem("roleId");
    const dataa = this.state.getData;
    return (
      <>
        {/* Dialog Edit */}
        <Dialog
          fullWidth={true}
          open={this.state.setOpenEdit}
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
              Edit User
            </DialogTitle>
            <DialogTitle id="scroll-dialog-title" alignItems="center">
              <IconButton aria-label="expand row" size="small">
                <CancelIcon onClick={this.closeEdit} sx={{ color: "red" }} />
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
                    label="First Name"
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
                    label="Last Name"
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
                    label="Age"
                    size="small"
                    fullWidth={true}
                    defaultValue={this.state.age}
                    onChange={(event) => {
                      this.setState({
                        age: event.target.value,
                      });
                    }}
                  />
                </Box>
              )}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              // color="myBlue"
              size="small"
              onClick={this.updateUser(this.state.idPopUp)}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>

        {/* Dialog Delete */}
        <Dialog
          fullWidth="true"
          open={this.state.setOpenDelete}
          // onClose={handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <DialogTitle id="scroll-dialog-title" alignItems="center">
              Delete User
            </DialogTitle>
            <DialogTitle id="scroll-dialog-title" alignItems="center">
              <IconButton aria-label="expand row" size="small">
                <CancelIcon onClick={this.closeDelete} sx={{ color: "red" }} />
              </IconButton>
            </DialogTitle>
          </Stack>
          <DialogContent dividers={this.state.scroll === "paper"}>
            <DialogContentText
              id="scroll-dialog-description"
              // ref={descriptionElementRef}
              tabIndex={-1}
            >
              <Stack sx={{ my: 2 }}>
                <Typography variant="subtitle2" wrap="true" textAlign="center">
                  Apakah anda yakin menghapus user {dataa.firstName} ini?
                  {/* {this.state.idPopUp} */}
                </Typography>
              </Stack>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.deleteSingleUser(this.state.idPopUp)}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <TableContainer component={Paper} sx={{ mb: 5 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>NO</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Photo</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.getData.map((datas, index) => (
                <>
                  <TableRow key={datas.id}>
                    <TableCell width="1%">{index + 1}</TableCell>

                    <TableCell align="center">
                      {datas.firstName + " " + datas.lastName}
                    </TableCell>
                    {/* <TableCell align="center">{datas.email}</TableCell>
                    <TableCell align="center">{datas.username}</TableCell> */}
                    <TableCell align="center">{datas.age}</TableCell>
                    <TableCell align="center">{datas.photo}</TableCell>
                    <TableCell width="1%" align="center">
                      <Stack direction="row">
                        <IconButton
                          disabled={roleId == 4 ? true : false}
                          sx={{ mr: 2 }}
                          size="small"
                          onClick={this.getSingleUser(datas.id)}
                        >
                          <EditIcon sx={{ color: "green" }} />
                        </IconButton>
                        <IconButton
                          disabled={roleId == 4 ? true : false}
                          size="small"
                          onClick={this.openDialogDelete(datas.id)}
                        >
                          <DeleteForeverIcon sx={{ color: "red" }} />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

export default TableData;
