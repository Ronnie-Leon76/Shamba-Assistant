import React, { useState } from "react";
import Chart from "react-apexcharts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Card, CardContent, Button } from "@material-ui/core";

import CountUp from "react-countup";
import farmer from "../../../assets/images/farmers.png";
import farms from "../../../assets/images/farms.png";
import hubs from "../../../assets/images/hubs.png";

export default function LivePreviewExample() {
  const chartSparklinesLarge3AOptions = {
    stroke: {
      curve: "smooth",
      width: [0, 4],
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(60, 68, 177, 0.3)", "#3c44b1"],
    fill: {
      opacity: 1,
    },
    labels: [
      "01 Mar 2022",
      "02 Mar 2022",
      "03 Mar 2022",
      "04 Mar 2022",
      "05 Mar 2022",
      "06 Mar 2022",
      "07 Mar 2022",
      "08 Mar 2022",
      "09 Mar 2022",
      "10 Mar 2022",
      "11 Mar 2022",
      "12 Mar 2022",
    ],
    xaxis: {
      type: "datetime",
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      strokeDashArray: "5",
      borderColor: "rgba(125, 138, 156, 0.3)",
    },
    legend: {
      show: false,
    },
  };
  const chartSparklinesLarge3AData = [
    {
      name: "Tests",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: "Devices",
      type: "line",
      data: [231, 442, 335, 227, 433, 222, 117, 316, 242, 252, 162, 176],
    },
  ];

  const chartSparklinesLarge3BOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: "rounded",
        endingShape: "rounded",
        columnWidth: "60%",
      },
    },
    colors: ["#1bc943"],
    fill: {
      opacity: 1,
    },
    stroke: {
      color: "#1bc943",
      width: 3,
    },
    legend: {
      show: false,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      crosshairs: {
        width: 0,
      },
    },
    yaxis: {
      min: 0,
    },
  };
  const chartSparklinesLarge3BData = [
    {
      name: "Registered",
      data: [47, 38, 56, 24, 43, 24, 56, 56, 24, 65],
    },
  ];

  const chartSparklinesLarge3COptions = {
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: "rounded",
        endingShape: "rounded",
        columnWidth: "60%",
      },
    },
    colors: ["#1bc943"],
    fill: {
      opacity: 1,
    },
    stroke: {
      color: "#1bc943",
      width: 3,
    },
    legend: {
      show: false,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      crosshairs: {
        width: 0,
      },
    },
    yaxis: {
      min: 0,
    },
  };
  const chartSparklinesLarge3CData = [
    {
      name: "Tests Done",
      data: [38, 43, 24, 56, 43, 24, 56, 35, 56, 65],
    },
  ];

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <Grid container spacing={0}>
          <Grid item xl={5}>
            <div className="hero-wrapper bg-composed-wrapper bg-sunrise-purple h-100 rounded br-xl-right-0">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div
                  className="bg-composed-wrapper--image rounded br-xl-right-0"
                  style={{ backgroundImage: "url(" + farmer + ")" }}
                />
                <div className="bg-composed-wrapper--bg bg-second opacity-5 rounded br-xl-right-0" />
                <div className="bg-composed-wrapper--content p-5">
                  <div className="align-self-center px-4">
                    <div className="py-3">
                      <Card className="card-box shadow-lg border-success card-box-border-bottom rounded hover-scale-sm">
                        <div className="card-tr-actions">
                          <Button
                            variant="text"
                            className="p-0 d-30 border-0 btn-transition-none text-dark"
                            disableRipple
                          >
                            <FontAwesomeIcon
                              icon={["fas", "ellipsis-h"]}
                              className="font-size-lg"
                            />
                          </Button>
                        </div>
                        <div className="p-4 text-left">
                          <div className="display-3 text-success font-weight-bold">
                            45000
                          </div>
                          <div className="font-size-xxl font-weight-bold text-black">
                            Farmers
                          </div>
                        </div>
                        <div className="rounded-bottom overflow-hidden">
                          <Chart
                            options={chartSparklinesLarge3BOptions}
                            series={chartSparklinesLarge3BData}
                            type="area"
                            height={70}
                          />
                        </div>
                      </Card>
                    </div>
                    <div className="py-3">
                      <Card className="card-box shadow-lg border-success card-box-border-bottom rounded hover-scale-sm">
                        <div className="card-tr-actions">
                          <Button
                            variant="text"
                            className="p-0 d-30 border-0 btn-transition-none text-dark"
                            disableRipple
                          >
                            <FontAwesomeIcon
                              icon={["fas", "ellipsis-h"]}
                              className="font-size-lg"
                            />
                          </Button>
                        </div>
                        <div className="p-4 text-left">
                          <div className="display-3 text-success font-weight-bold">
                            65743
                          </div>
                          <div className="font-size-xxl font-weight-bold text-black">
                            Farms
                          </div>
                        </div>
                        <div className="rounded-bottom overflow-hidden">
                          <Chart
                            options={chartSparklinesLarge3COptions}
                            series={chartSparklinesLarge3CData}
                            type="area"
                            height={70}
                          />
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xl={7}>
            <div className="p-4">
              <div className="p-2">
                <h6 className="font-weight-bold font-size-xl mb-1 text-black">
                  Monthly Devices Registration
                </h6>
                <p className="text-black-50 font-size-lg mb-0">
                  Check the number of devices installed in farms
                </p>
              </div>
            </div>
            <div className="divider" />
            <div>
              <Chart
                options={chartSparklinesLarge3AOptions}
                series={chartSparklinesLarge3AData}
                type="line"
                height={365}
              />
            </div>
            <div className="divider bg-dark opacity-1" />
            <div className="p-4 bg-secondary text-center">
              <Button className="btn-primary hover-scale-sm px-5">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "download"]} />
                </span>
                <span className="btn-wrapper--label">Create Report</span>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
