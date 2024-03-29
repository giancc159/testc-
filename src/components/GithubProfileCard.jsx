import React from 'react';

import {
    Card,
    Col,
    Row,
    Container,
} from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import imagePicture from "../assets/img/imagenpaseo.jpg"
const GithubProfileCard = ({prof}) => {
    return ( 
            <Card className="section-lg bg-gradient-info shadow-lg border-0">
                <Container className="">
                <div className="p-2 mt-5">
                  <Row className="">
                  <Col className="order-lg-2" lg="4">
                     
                      <img src={imagePicture} style={{width: "200px"}} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"/>
                    </Col>
                    <Col lg="8" className="order-lg-1">
                      <h2 className="text-white">
                        Reach Out to me!
                      </h2>
                      <p className="lead text-white mt-3">
                        Discuss a project or just want to say hi? Let's talk about this. :)
                      </p>
                      <p className="lead text-white mt-3">
                      I'm a Web Developer
                       </p>
                     
                      <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                        <i className="ni ni-pin-3 text-info mr-2" />
                       Lima - Peru
                        </div>
                        <SocialLinks />
                    </Col>                    
                  </Row>
                </div>
                </Container>
              </Card>
     );
}
 
export default GithubProfileCard;