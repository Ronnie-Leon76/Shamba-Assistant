import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Button, CardContent, Table, Checkbox } from "@material-ui/core";
import { NavLink } from "react-router-dom";

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
              Farmer Details
            </h4>
          </div>
        </div>
        <CardContent className="px-0 pt-2 pb-3">
          <Table className="table table-borderless table-hover table-alternate text-nowrap mb-0">
            <thead>
              <tr>
                <th>Name</th>
                <th className="text-center">Phone Number</th>
                <th className="text-center">Location</th>
                <th className="text-center">Subscription</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex">
                    <div>
                      <NavLink
                        activeClassName="active"
                        className="nav-link-simple"
                        to="/DashboardStatistics"
                      >
                        Patrick Kamau
                      </NavLink>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <span>+254722722250</span>
                </td>
                <td className="text-center">
                  <span>Kenol</span>
                </td>
                <td className="text-center">
                  <div className="badge badge-danger">Overdue</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex">
                    <div>
                      <NavLink
                        activeClassName="active"
                        className="nav-link-simple"
                        to="/DashboardStatistics"
                      >
                        Patrick Kamau
                      </NavLink>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <span>+254722722250</span>
                </td>
                <td className="text-center">
                  <span>Kenol</span>
                </td>
                <td className="text-center">
                  <div className="badge badge-danger">Overdue</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex">
                    <div>
                      <NavLink
                        activeClassName="active"
                        className="nav-link-simple"
                        to="/DashboardStatistics"
                      >
                        Patrick Kamau
                      </NavLink>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <span>+254722722250</span>
                </td>
                <td className="text-center">
                  <span>Kenol</span>
                </td>
                <td className="text-center">
                  <div className="badge badge-danger">Overdue</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex">
                    <div>
                      <NavLink
                        activeClassName="active"
                        className="nav-link-simple"
                        to="/DashboardStatistics"
                      >
                        Patrick Kamau
                      </NavLink>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <span>+254722722250</span>
                </td>
                <td className="text-center">
                  <span>Kenol</span>
                </td>
                <td className="text-center">
                  <div className="badge badge-danger">Overdue</div>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="divider mb-3" />
          <div className="text-center">
            <Button variant="contained" color="primary">
              <span className="btn-wrapper--label">View details</span>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={["fas", "chevron-right"]} />
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
