import React from "react";

import { Card, CardBody, Col, CardImg } from "reactstrap";

import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
  return (
    <Col lg="6">
      <Fade bottom duration={1000} distance="40px">
        <Card className="shadow-lg--hover shadow mt-4">
          <CardImg style={{ height: "250px" }} alt="..." src={data.image} top />
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h5 className="text-info">{data.name}</h5>
                <p className="description mt-3">{data.desc}</p>
              </div>
            </div>
          </CardBody>
          {data.link ? (
            <a
              href={data.link.url}
              className="stretched-link"
              target="_blank"
              rel="noreferrer"
              aria-hidden="true"
            >
              {" "}
            </a>
          ) : null}
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
