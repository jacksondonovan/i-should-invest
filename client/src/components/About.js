import React from 'react';
import { Grid, Row, Col, Image, Navbar, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../stylesheets/about-style.css';

const About = () => {
  return (
    <div>

      <Jumbotron>
        <h2 className="header-footer-titles">Investing simplified!</h2>
        <h4 className="header-footer-titles">Put your money to work.
        <br />
        Make sense of your finances through your goals.</h4>
        <h4 className="header-footer-titles">
        Here at I Should Invest, we strongly believe that taking control of personal finances
        can empower and propel individuals.
        <br />
        We don't earn any compensation from any companies mentioned on the site. We are here to help
        the next generations perpare for the uncertainty with confidence. It may be hard to visualize but
        investing today will help you in the short-term or long-term. it's all up to you!
        </h4>
      </Jumbotron>




      <hr />
      <h2 className="header-footer-titles">Meet the Team</h2>
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <h4 className="header-footer-titles">Jackson Donovan</h4>
            <Image className="pic-circle" src="https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/10384034_10152768758896225_776426950501530360_n.jpg?_nc_cat=108&_nc_ht=scontent.fapa1-1.fna&oh=19e30d9048d2408c673601d98c99fdce&oe=5CF38D9B" circle />
            <h5 className="header-footer-titles">Founder, Lead Developer</h5>
          </Col>
          <Col xs={6} md={4}>
            <h4 className="header-footer-titles">Bryan Bathalon</h4>
            <Image className="pic-circle" src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/10365803_10202630735624531_2093832118338443939_n.jpg?_nc_cat=105&_nc_ht=scontent.fapa1-2.fna&oh=a86a07b89d2f7ac408ce4420ffb8ac85&oe=5CB97E4E" circle />
            <h5 className="header-footer-titles">CPA, Financial Expert</h5>
          </Col>
          <Col xs={6} md={4}>
            <h4 className="header-footer-titles">Jules Perryman</h4>
            <Image className="pic-circle" src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/13406848_10100126844400061_324622342631310514_n.jpg?_nc_cat=100&_nc_ht=scontent.fapa1-2.fna&oh=c6a357e8bf53f1ed87dc3ada99329b6b&oe=5CF7A2BC" circle />
            <h5 className="header-footer-titles">Crypto, Real Estate Expert</h5>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={6} md={4}>
            <h4 className="header-footer-titles">Cassandra Boutsioulis</h4>
            <Image className="pic-circle" src="https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/12829381_10153995903297812_3273425546622774852_o.jpg?_nc_cat=109&_nc_ht=scontent.fapa1-2.fna&oh=75c6231f99f0660978354b852c577c9c&oe=5CFEFD98" circle />
            <h5 className="header-footer-titles">Graphic Designer, Finance Enthusiast</h5>
          </Col>
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}></Col>
        </Row>
      </Grid>
      <br />
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

export default About;
