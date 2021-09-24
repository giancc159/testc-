import React, {Fragment} from 'react';

import { Fade } from 'react-reveal';
import DisplayLottie from '../components/DisplayLottie'
import webdev from '../assets/lottie/webdev.json';

import {
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

import { skillsSection } from "../portfolio";

const Skills = () => {
    return ( 
        <Fade left duration={1000} distance="40px">
            <Container className="text-center my-5 section section-lg">
            <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-spaceship text-info" />
              </div>
            </div>
            <div className="pl-4 header-text">
              <h4 className="display-3 text-info">My Skills</h4>
            </div>
          </div>
            <p className="lead">{skillsSection.description}</p>
            <Row>
                <Col lg="6">
                    <DisplayLottie animationData={webdev} />
                </Col>
                <Col lg="6">
                    <div className="d-flex justify-content-center flex-wrap mt-2">
                        {
                            skillsSection.softwareSkills.map((skill) => {
                                return <Fragment key={skill.skillName}>
                            <div className="icon icon-lg icon-shape shadow rounded-circle mb-5"  id={skill.skillName}>
                                <span className="iconify" data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
                            </div>
                            <UncontrolledTooltip
                                delay={0}
                                placement="bottom"
                                target={skill.skillName}
                                >
                                {skill.skillName}
                            </UncontrolledTooltip>
                                </Fragment>
                            })
                        }
                    </div>
                    <div>
                        {
                            skillsSection.skills.map(skill => {
                                return <p key={skill}>{skill}</p>
                            })
                        }
                    </div>
                </Col>
            </Row>
            </Container>
        </Fade>
     );
}
 
export default Skills;