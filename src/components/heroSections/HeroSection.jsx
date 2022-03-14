import stock6 from '../../assets/images/custom-photos/shambaAssistant.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Button, Container } from '@material-ui/core';
import React from 'react';

import MarketingHeader from '../marketingHeaders';
export default function LivePreviewExample() {
  return (
    <div className="hero-wrapper bg-composed-wrapper bg-serious-blue">
      <div className="bg-composed-wrapper--bg bg-white opacity-8"></div>
      <div className="bg-composed-wrapper--bg bg-deep-blue opacity-4"></div>
      <Container className="header-top-section py-2">
        <MarketingHeader />
      </Container>
      <div className="hero-wrapper--content">
        <div className="bg-composed-wrapper--content">
          <Container className="text-second pb-0 pb-lg-5">
            <Grid container spacing={6} className="py-5">
              <Grid item lg={6} className="d-flex align-items-center">
                <div className="text-center text-lg-left">
                  <h2 className="display-3 font-weight-bold">
                    Shamba Assistant
                  </h2>
                  <p className="font-size-xl py-3 text-black-50">
                    Handheld IoT Soil Testing and Crop Monitoring Device to
                    support e-extension services among farmers.
                  </p>
                  <div className="pt-3">
                    {/* <Button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      size="large"
                      className="btn-pill shadow-second-sm btn-first"
                    >
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </span>
                      <span className="btn-wrapper--label">
                        View all articles
                      </span>
                    </Button> */}
                  </div>
                </div>
              </Grid>
              <Grid item lg={6} className="d-flex align-items-center">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="shadow-xxl mt-5 mt-lg-0 image-title-overlay d-block rounded h-320px"
                  title="..."
                >
                  {/* <div className="card-badges">
                    <div className="badge badge-pill badge-success h-auto px-3 py-1">
                      New Content
                    </div>
                  </div> */}
                  <div className="image-title-overlay--bottom p-4">
                    <h3 className="font-size-xxl font-weight-bold m-0 text-white">
                      Shamba Assistant
                    </h3>
                  </div>
                  <img
                    alt="..."
                    className="rounded img-fit-container"
                    src={stock6}
                  />
                </a>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
}
