import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Kunal Kumar</h2>
        <p><a href="mailto:michael.l.dangelo@gmail.com">kunalkumar@gmail.com</a></p>
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
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
