import React, { useEffect, useState } from "react";

import {
  Grid,
  Card,
  Button,
  CardContent,
  Table,
  Tooltip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Dropzone, { useDropzone } from "react-dropzone";
import stock5 from "../../../assets/images/stock.jpg";

import CloseTwoToneIcon from "@material-ui/icons/CloseTwoTone";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import CheckIcon from "@material-ui/icons/Check";
import PerfectScrollbar from "react-perfect-scrollbar";
import GoogleMapReact from "google-map-react";
import Pagination from "@material-ui/lab/Pagination";
import { NavLink } from "react-router-dom";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";

const MapMarker = ({ text }) => <div>{text}</div>;

export default function LivePreviewExample() {
  const [currentPercent1, setCurrentPercent1] = useState();
  const [currentPercent2, setCurrentPercent2] = useState();
  const [currentPercent3, setCurrentPercent3] = useState();

  const center = {
    lat: 59.95,
    lng: 30.33,
  };
  const zoom = 11;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPercent1(Math.random());
      setCurrentPercent2(Math.random());
      setCurrentPercent3(Math.random());
    }, 1900);

    return () => {
      clearTimeout(timer);
    };
  });
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
  const [entries, setEntries] = useState("1");

  const handleChange = (event) => {
    setEntries(event.target.value);
  };

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
          <Grid item xl={4} className="d-flex">
            <Card>
              <div className="card-img-wrapper h-180px">
                <img
                  alt="..."
                  className="card-img-top img-fit-container"
                  src={stock5}
                />
              </div>
              <CardContent className="text-center card-body-avatar">
                <h3 className="font-weight-bold mt-4 mb-3">Kenol Main Farm</h3>
                <p className="card-text mb-3">
                  Kenol Main farm has three devices installed. It has the
                  following crops being planted: Coffee, Tea and Napier grass.
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
          </Grid>
          <Grid item xl={4} className="d-flex">
            <Card className="card-box mb-spacing-6-x2">
              <div className="d-flex justify-content-between px-4 py-3">
                <div className="d-flex align-items-center">
                  <span>Show</span>
                  <FormControl size="small" variant="outlined" className="mx-3">
                    <InputLabel id="select-entries-label">
                      Season Year
                    </InputLabel>
                    <Select
                      labelId="select-entries-label"
                      id="select-entries"
                      value={entries}
                      onChange={handleChange}
                      label="Entries"
                    >
                      <MenuItem className="mx-2" value={1}>
                        2021-1
                      </MenuItem>
                      <MenuItem className="mx-2" value={10}>
                        2021-2
                      </MenuItem>
                      <MenuItem className="mx-2" value={15}>
                        2021-3
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <span>season</span>
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
                      <th className="bg-white text-left">Mineral Ions</th>
                      <th className="bg-white">% Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-weight-bold">Nitrogen</td>
                      <td>4.5</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Phosphorous</td>
                      <td>6.5</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Potassium</td>
                      <td>3.8</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">NDVI</td>
                      <td>2.9</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Zinc</td>
                      <td>4.2</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Humus</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Seeds</td>
                      <td>High Quality</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Potassium Fertilizer</td>
                      <td>High Quality</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Soil pH</td>
                      <td>7.0</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Soil Temperature</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Soil Moisture</td>
                      <td>Medium</td>
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
                    <InputLabel id="select-entries-label">Tests</InputLabel>
                    <Select
                      labelId="select-entries-label"
                      id="select-entries"
                      value={entries}
                      onChange={handleChange}
                      label="Test done"
                    >
                      <MenuItem className="mx-2" value={1}>
                        Test 1
                      </MenuItem>
                      <MenuItem className="mx-2" value={10}>
                        Test 2
                      </MenuItem>
                      <MenuItem className="mx-2" value={15}>
                        Test 3
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <span>tests</span>
                </div>
              </div>
              <div className="w-100" style={{ height: "350px" }}>
                <GoogleMapReact defaultCenter={center} defaultZoom={zoom}>
                  <MapMarker lat={59.955413} lng={30.337844} text="UiFort" />
                </GoogleMapReact>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
