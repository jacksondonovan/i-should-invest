import React from 'react';
import { Jumbotron, Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import '../stylesheets/splash-style.css';

const Splash = () => {
  return (
    <div>
      <Jumbotron className="tall-jumbo">
        <h2 className="header-footer-titles">Welcome to I Should Invest!</h2>
        <p className="header-footer-titles">
          Too many times we hear that Millennials and
          young folks want to invest, but don't understand
          the logistics or where to start.
        </p>
        <hr />
        <p className="header-footer-titles">
          Our team is changing that.
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="header-footer-titles">
          <Button bsStyle="primary">Get Started</Button>
        </p>
      </Jumbotron>

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
                <Button bsStyle="primary">Button</Button>
                &nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>


    </div>
  );
}

export default Splash;
