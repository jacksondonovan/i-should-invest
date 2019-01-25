import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import '../stylesheets/about-style.css';

const About = () => {
  return (
    <div>
      <h2 className="header-footer-titles">Investing simplified!</h2>
      <h4 className="header-footer-titles">No matter your age or income, it's never too late to start.</h4>
      <h4 className="header-footer-titles">
      We'll help you better understand all types of investments,
      from risky to secure, from property to stocks, anything is possible
      if you start early enough.</h4>

      <hr />
      <h2 className="header-footer-titles">Meet the Team</h2>
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <h4 className="header-footer-titles">Jackson Donovan</h4>
            <Image className="pic-circle" src="https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/18216857_10212856826920493_1606629318825930360_o.jpg?_nc_cat=109&_nc_ht=scontent.fapa1-2.fna&oh=5be0f45f375dda0ea0e85c2ec161ecac&oe=5CF95C8D" circle />
            <h5 className="header-footer-titles">Lead Developer, Finance Enthusiast</h5>
          </Col>
          <Col xs={6} md={4}>
            <h4 className="header-footer-titles">Bryan Bathalon</h4>
            <Image className="pic-circle" src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/10365803_10202630735624531_2093832118338443939_n.jpg?_nc_cat=105&_nc_ht=scontent.fapa1-2.fna&oh=a86a07b89d2f7ac408ce4420ffb8ac85&oe=5CB97E4E" circle />
            <h5 className="header-footer-titles">Financial Expert</h5>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default About;
