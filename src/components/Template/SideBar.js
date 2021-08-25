import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        {/* <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" /> */}
        <img src="https://scontent.fdel3-2.fna.fbcdn.net/v/t1.6435-1/c0.0.720.720a/p720x720/154027110_3442813432490053_4351887273308479653_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=aHxYFcDcqXYAX-aAa4-&_nc_ht=scontent.fdel3-2.fna&oh=685b43a2c121791504c539d5d9aa80da&oe=614D927F" alt="" />
      </Link>
      <header>
        <h2>Kunal Kumar</h2>
        <p><a href="mailto:kunalkumar@gmail.com">kunalkumar@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Kunal. This is my Bio-data Site.
        I am a <a href="https://www.dce-darbhanga.org/">Computer</a> graduate, DCE Alumni, and
        computer Teacher <a href="http://www.bsebstet2019.in/#no-back-button">Merit Holder</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/biodata') ? <Link to="/biodata" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Er. Kunal kumar.</p>
    </section>
  </section>
);

export default SideBar;
