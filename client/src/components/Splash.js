import React from 'react';
import { Jumbotron, Button, Grid, Row, Col, Thumbnail, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../stylesheets/splash-style.css';

const Splash = () => {
  return (
    <div>
      <Jumbotron className="tall-jumbo background-control">
        <h3 className="header-footer-titles jumbo-text">I Should Invest?</h3>
        <h2 className="header-footer-titles jumbo-text eye-catcher-text">Yes You Should!</h2>
        <p className="header-footer-titles jumbo-text">
          Too many times we hear that Millennials and
          young folks want to invest
          <br />
          but don't understand
          the logistics or where to start.
        </p>
        <hr />
        <br />
        <br />
        <br />
        <p className="header-footer-titles jumbo-text">
          Our team is changing that.
        </p>
        <br />
        <br />
        <br />
        <p className="header-footer-titles">
          <Button bsStyle="primary">Get Started</Button>
        </p>
      </Jumbotron>

      <h2 className="header-footer-titles">Typical Investing Types</h2>

      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhyregOtAoVfiJgGVW8eIct6IKgkiK6pXGu94Z_UbjzAH-lhi" alt="242x200">
              <h3 className="header-footer-titles">Stocks</h3>
              <p>Understand how stocks work and how to move beyond judging a stock by its price. Become an invester not a trader.</p>
              <p>
                <Button bsStyle="primary">Learn More</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9uNbhqG6fWzXc3wNc3kPqfbKoJTVfPfDOwe6Qn2sIWy6lMOUu" alt="242x200">
              <h3 className="header-footer-titles">Property</h3>
              <p>Housing can be expensive but isn't always a strong investment. Find out what makes housing risky and rewarding.</p>
              <p>
                <Button bsStyle="primary">Learn More</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="https://thecorrespondent.in/wp-content/uploads/2018/09/Vacation.jpg" alt="242x200">
              <h3 className="header-footer-titles">Retirement Accounts</h3>
              <p>Retiring can be tricky, how much do you need? What accounts are worth opening? Let's put the me back in retirement.</p>
              <p>
                <Button bsStyle="primary">Learn More</Button>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>

      <Jumbotron className="tall-jumbo">
        <p className="header-footer-titles">Not all investments are equal.</p>
        <p className="header-footer-titles">A few things to consider before jumping in.</p>
        <br />
        <Grid>
          <Row>
            <Col xs={6} md={3}>
              <Thumbnail>
                <h3 className="header-footer-titles">Income</h3>
                <p>You don't need much to start investing. Carving out small amounts from paychecks can make a big difference down the road.</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail>
                <h3 className="header-footer-titles">Risk Adversity</h3>
                <p>Risk is a big component of investing. Low risk investments yield small gains while higher risks can lead to higher returns.</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail>
                <h3 className="header-footer-titles">Your Age</h3>
                <p>There's never a bad time to start investing. When you need money for retirement can dictate which investments make sense.</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail>
                <h3 className="header-footer-titles">Economic Climate</h3>
                <p>Never try to time the market. But it pays to pay attention. "Be fearful when others are greedy and greedy when others are fearful."</p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>

      </Jumbotron>

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

export default Splash;
