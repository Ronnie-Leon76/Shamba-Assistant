import React, { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  IconButton,
  Box,
  Typography,
  Tabs,
  Tab,
  Popover,
  LinearProgress,
  Badge,
  Button,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";

import avatar1 from "../../assets/images/avatars/avatar1.jpg";
import avatar2 from "../../assets/images/avatars/avatar2.jpg";
import avatar6 from "../../assets/images/avatars/avatar6.jpg";
import avatar7 from "../../assets/images/avatars/avatar7.jpg";
import people1 from "../../assets/images/stock-photos/people-1.jpg";
import people3 from "../../assets/images/stock-photos/people-3.jpg";

import NotificationsActiveTwoToneIcon from "@material-ui/icons/NotificationsActiveTwoTone";
import PollTwoToneIcon from "@material-ui/icons/PollTwoTone";
import PeopleAltTwoToneIcon from "@material-ui/icons/PeopleAltTwoTone";

import Chart from "react-apexcharts";
import PerfectScrollbar from "react-perfect-scrollbar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const HeaderDots = () => {
  const chartHeaderDotsOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      stacked: true,
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "65%",
      },
    },
    stroke: {
      show: false,
      width: 0,
      colors: ["transparent"],
    },
    colors: ["#7a7b97", "rgba(122, 123, 151, 0.15)"],
    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
    },
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Last week",
      "Last month",
      "Last year",
      "Last quarter",
    ],
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      min: 0,
    },
  };
  const chartHeaderDotsData = [
    {
      name: "Net Profit",
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2],
    },
    {
      name: "Net Loss",
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2],
    },
  ];

  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="d-flex align-items-center popover-header-wrapper"></div>
    </>
  );
};

export default HeaderDots;
