import React, { useState } from "react";

import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Grid,
  Checkbox,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider,
} from "@material-ui/core";

import { connect } from "react-redux";
import Rating from "@material-ui/lab/Rating";

import { setHeaderDrawerToggle } from "../../reducers/ThemeOptions";

import avatar1 from "../../assets/images/avatars/avatar1.jpg";
import avatar2 from "../../assets/images/avatars/avatar2.jpg";
import avatar6 from "../../assets/images/avatars/avatar6.jpg";
import avatar7 from "../../assets/images/avatars/avatar7.jpg";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import CountUp from "react-countup";
import Chart from "react-apexcharts";
import PerfectScrollbar from "react-perfect-scrollbar";

const HeaderDrawer = (props) => {
  const chartHeaderDrawerOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },

    stroke: {
      color: "#1bc943",
      curve: "smooth",
      width: 4,
    },
    colors: ["#1bc943"],
    fill: {
      color: "1bc943",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.7,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      min: 0,
    },
  };
  const chartHeaderDrawerData = [
    {
      name: "Monthly Analytics",
      data: [47, 38, 56, 24, 45, 54, 38, 56, 24, 65],
    },
  ];
  const [value, setValue] = useState(2);

  const { headerDrawerToggle, setHeaderDrawerToggle } = props;

  const toogleHeaderDrawer = () => {
    setHeaderDrawerToggle(!headerDrawerToggle);
  };

  return (
    <>
      <div className="app-drawer-wrapper"></div>
    </>
  );
};

const mapStateToProps = (state) => ({
  headerDrawerToggle: state.ThemeOptions.headerDrawerToggle,
});

const mapDispatchToProps = (dispatch) => ({
  setHeaderDrawerToggle: (enable) => dispatch(setHeaderDrawerToggle(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDrawer);
