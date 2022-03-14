import React from "react";

import clsx from "clsx";

import { connect } from "react-redux";

import { setSidebarToggleMobile } from "../../reducers/ThemeOptions";

import HeaderSearch from "../../layout-components/HeaderSearch";

const Header = (props) => {
  const {
    headerShadow,
    headerBgTransparent,
    sidebarToggleMobile,
    setSidebarToggleMobile,
  } = props;

  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  return (
    <>
      <div
        className={clsx("app-header", {
          "app-header--shadow": headerShadow,
          "app-header--opacity-bg": headerBgTransparent,
        })}
      >
        <div className="app-header--pane">
          <button
            className={clsx(
              "navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn",
              { "is-active": sidebarToggleMobile }
            )}
            onClick={toggleSidebarMobile}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          <div style={{ marginLeft: "0%" }}>
            <HeaderSearch />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  headerShadow: state.ThemeOptions.headerShadow,
  headerBgTransparent: state.ThemeOptions.headerBgTransparent,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
