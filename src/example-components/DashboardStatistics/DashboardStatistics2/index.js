import React, { useState, useEffect } from "react";

import {
  Grid,
  Card,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  Table,
  CardContent,
  Tooltip,
} from "@material-ui/core";
import Dropzone, { useDropzone } from "react-dropzone";

import CloseTwoToneIcon from "@material-ui/icons/CloseTwoTone";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import CheckIcon from "@material-ui/icons/Check";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "@material-ui/lab/Pagination";
import { NavLink } from "react-router-dom";
import stock5 from "../../../assets/images/stock.jpg";
import avatar6 from "../../../assets/images/avatar.jpg";

export default function LivePreviewExample() {
  const [entries, setEntries] = useState("1");

  const handleChange = (event) => {
    setEntries(event.target.value);
  };
  const [files, setFiles] = useState([]);
  const {
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
    getRootProps,
    getInputProps,
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div
      key={file.name}
      className="rounded-circle avatar-image overflow-hidden d-100 bg-neutral-success text-center font-weight-bold text-success d-flex justify-content-center align-items-center"
    >
      <img
        className="img-fluid img-fit-container rounded-sm"
        src={file.preview}
        alt="..."
      />
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      <div className="mb-spacing-6">
        <Grid container spacing={6}>
          <Grid item xl={6} style={{ padding: 10 }}>
            <Card>
              <div className="card-img-wrapper h-180px">
                <img
                  alt="..."
                  className="card-img-top img-fit-container"
                  src={stock5}
                />
              </div>
              <CardContent className="text-center card-body-avatar">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="avatar-icon-wrapper card-box-hover rounded-circle card-box-hover-rise hover-scale-lg d-130"
                >
                  <div className="avatar-icon rounded-circle">
                    <img alt="..." className="img-fluid" src={avatar6} />
                  </div>
                </a>
                <h3 className="font-weight-bold mt-4 mb-3">Patrick Kamau</h3>
                <p className="card-text mb-3">
                  Patrick is a coffee and dairy milkfarmer. In his large tract
                  of land he has three devices installed to ensure soil pH and
                  other parameters are constantly monitored
                </p>
                <div className="py-3">
                  <Tooltip title="Facebook">
                    <Button className="btn-github btn-pill d-60 p-0">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon
                          icon={["fab", "facebook"]}
                          className="font-size-xl"
                        />
                      </span>
                    </Button>
                  </Tooltip>
                  <Tooltip title="Instagram" arrow>
                    <Button className="btn-instagram btn-pill d-60 p-0 mx-2">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon
                          icon={["fab", "instagram"]}
                          className="font-size-xl"
                        />
                      </span>
                    </Button>
                  </Tooltip>
                  <Tooltip title="Twitter" arrow>
                    <Button className="btn-google btn-pill d-60 p-0">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon
                          icon={["fab", "twitter"]}
                          className="font-size-xl"
                        />
                      </span>
                    </Button>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>
            <Card className="card-box mb-spacing-6-x2">
              <div className="d-flex justify-content-between px-4 py-3">
                <div className="d-flex align-items-center">
                  <span>Show</span>
                  <FormControl size="small" variant="outlined" className="mx-3">
                    <InputLabel id="select-entries-label">Farms</InputLabel>
                    <Select
                      labelId="select-entries-label"
                      id="select-entries"
                      value={entries}
                      onChange={handleChange}
                      label="Entries"
                    >
                      <MenuItem className="mx-2" value={1}>
                        All farms
                      </MenuItem>
                      <MenuItem className="mx-2" value={10}>
                        10
                      </MenuItem>
                      <MenuItem className="mx-2" value={15}>
                        15
                      </MenuItem>
                      <MenuItem className="mx-2" value={20}>
                        20
                      </MenuItem>
                      <MenuItem className="mx-2" value={25}>
                        25
                      </MenuItem>
                      <MenuItem className="mx-2" value={30}>
                        30
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <span>farms</span>
                </div>
                <div className="search-wrapper">
                  <TextField
                    variant="outlined"
                    size="small"
                    id="input-search"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchTwoToneIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>
              <div className="divider" />
              <div className="table-responsive-md">
                <Table className="table table-hover text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="bg-white text-left">Farm ID</th>
                      <th className="bg-white">Farm</th>
                      <th className="bg-white text-left">Location</th>
                      <th className="bg-white text-center">Plant</th>
                      <th className="bg-white text-center">Season Start</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-weight-bold">451</td>
                      <td>
                        <NavLink to="/DashboardCommerce">
                          Kenol Main Farm
                        </NavLink>
                      </td>
                      <td className="text-center">
                        <div>Kenol</div>
                      </td>
                      <td className="text-center">
                        <div>Coffee</div>
                      </td>
                      <td className="text-center text-black-50">12/12/2020</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">451</td>
                      <td>
                        <NavLink to="/DashboardCommerce">
                          Kenol Main Farm
                        </NavLink>
                      </td>
                      <td className="text-center">
                        <div>Kenol</div>
                      </td>
                      <td className="text-center">
                        <div>Coffee</div>
                      </td>
                      <td className="text-center text-black-50">12/12/2020</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">451</td>
                      <td>
                        <NavLink to="/DashboardCommerce">
                          Kenol Main Farm
                        </NavLink>
                      </td>
                      <td className="text-center">
                        <div>Kenol</div>
                      </td>
                      <td className="text-center">
                        <div>Coffee</div>
                      </td>
                      <td className="text-center text-black-50">12/12/2020</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">451</td>
                      <td>
                        <NavLink to="/DashboardCommerce">
                          Kenol Main Farm
                        </NavLink>
                      </td>
                      <td className="text-center">
                        <div>Kenol</div>
                      </td>
                      <td className="text-center">
                        <div>Coffee</div>
                      </td>
                      <td className="text-center text-black-50">12/12/2020</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">451</td>
                      <td>
                        <NavLink to="/DashboardCommerce">
                          Kenol Main Farm
                        </NavLink>
                      </td>
                      <td className="text-center">
                        <div>Kenol</div>
                      </td>
                      <td className="text-center">
                        <div>Coffee</div>
                      </td>
                      <td className="text-center text-black-50">12/12/2020</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">451</td>
                      <td>
                        <NavLink to="/DashboardCommerce">
                          Kenol Main Farm
                        </NavLink>
                      </td>
                      <td className="text-center">
                        <div>Kenol</div>
                      </td>
                      <td className="text-center">
                        <div>Coffee</div>
                      </td>
                      <td className="text-center text-black-50">12/12/2020</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">451</td>
                      <td>
                        <NavLink to="/DashboardCommerce">
                          Kenol Main Farm
                        </NavLink>
                      </td>
                      <td className="text-center">
                        <div>Kenol</div>
                      </td>
                      <td className="text-center">
                        <div>Coffee</div>
                      </td>
                      <td className="text-center text-black-50">12/12/2020</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="card-footer py-3 d-flex justify-content-between">
                <Pagination
                  className="pagination-second"
                  variant="outlined"
                  count={10}
                />
                <div className="d-flex align-items-center">
                  <span>Show</span>
                  <FormControl size="small" variant="outlined" className="mx-3">
                    <InputLabel id="select-entries-label">Entries</InputLabel>
                    <Select
                      labelId="select-entries-label"
                      id="select-entries"
                      value={entries}
                      onChange={handleChange}
                      label="Entries"
                    >
                      <MenuItem className="mx-2" value={1}>
                        All entries
                      </MenuItem>
                      <MenuItem className="mx-2" value={10}>
                        10
                      </MenuItem>
                      <MenuItem className="mx-2" value={15}>
                        15
                      </MenuItem>
                      <MenuItem className="mx-2" value={20}>
                        20
                      </MenuItem>
                      <MenuItem className="mx-2" value={25}>
                        25
                      </MenuItem>
                      <MenuItem className="mx-2" value={30}>
                        30
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <span>entries</span>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
