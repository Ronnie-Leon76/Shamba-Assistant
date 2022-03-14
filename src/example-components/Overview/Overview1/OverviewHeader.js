import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  Collapse,
  Grid,
  Typography,
  Tabs,
  Tab,
  Button,
  List,
  ListItem,
} from "@material-ui/core";

import projectLogo from "../../../assets/images/react.svg";
import { NavLink } from "react-router-dom";
import shambaAssistant from "../../../assets/images/shamba-assistant.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function LivePreviewExample() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <>
      <div className="header-nav-wrapper header-nav-wrapper-lg navbar-dark">
        <div className="app-nav-logo">
          <NavLink
            to="/Overview"
            title="Shamba Assistant"
            className="app-nav-logo app-nav-logo--light"
          >
            <div className="app-nav-logo--icon rounded-lg shadow-second-sm bg-secondary border-0">
              <img
                alt="Bamburgh React Admin Dashboard with Material-UI PRO"
                src={shambaAssistant}
              />
            </div>
            <div className="app-nav-logo--text">
              <span>Shamba</span>

              <b>Assistant</b>
            </div>
          </NavLink>
        </div>
        <NavLink
          to="/DashboardMonitoring"
          title="Shamba Assistant Farmers and Farms"
          className="app-nav-logo app-nav-logo--light"
        >
          <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
            <span className="d-none d-lg-block">
              <Button
                //href="#"
                rel="noopener noreferrer"
                target="_blank"
                className="rounded-lg text-nowrap font-size-xs text-uppercase shadow-second-sm btn-success font-weight-bold"
              >
                Dashboard
              </Button>
            </span>

            <span className="d-block d-lg-none">
              <button
                onClick={toggle}
                className={clsx("navbar-toggler hamburger hamburger--elastic", {
                  "is-active": collapse,
                })}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </span>
          </div>
        </NavLink>
        <div className="d-flex d-lg-none">
          <Collapse
            in={collapse}
            className="nav-collapsed-wrapper shadow-lg navbar-collapse"
          >
            <div className="nav-inner-wrapper">
              <Button
                onClick={toggle}
                className="btn-danger btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0"
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "times"]} />
                </span>
              </Button>
              <div className="p-3">
                <div className="px-4 text-uppercase py-2 text-primary font-weight-bold font-size-sm">
                  Dashboard
                </div>
                <List
                  component="div"
                  className="nav-pills nav-neutral-primary mb-3 nav-pills-rounded flex-column"
                >
                  <ListItem
                    button
                    component={NavLink}
                    to="/DashboardMonitoring"
                    className="px-4 d-flex align-items-center"
                  >
                    <span>Monitoring</span>
                  </ListItem>
                </List>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
      <div
        className={clsx("collapse-page-trigger", { "is-active": collapse })}
        onClick={toggle}
      />
    </>
  );
}
