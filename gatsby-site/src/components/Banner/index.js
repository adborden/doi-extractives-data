import React from 'react';
import Link from 'gatsby-link';

import logo from "../../img/us-flag-small.png";

const Banner = () => (
  <section className="banner slab-beta-light">
    <span className="banner-centered"><img class="banner-image" src={logo} alt="U.S. flag signifying that this is a United States Federal Government website" /> An official website of the U.S. government</span>
  </section>
);

export default Banner;