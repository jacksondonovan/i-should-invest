import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h5>We'd love to hear about your feedback.</h5>
      <h5>What could we be doing better?
      What new features do you want to see?</h5>

      <h5>Interested in joining our team?</h5>

      <h6>Email us and tell us how you think you could help
      our financial experts team.</h6>
      Email: notarealemail@gmail.com
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">I Should Invest</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            <Navbar.Brand>
              <Link to="/about">About</Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/contact">Contact</Link>
            </Navbar.Brand>
          </Navbar.Text>
          <Navbar.Text pullRight>Copyright ISI 2019</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Contact;
