import React from "react";
import { Col, Row, Container, Button } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { GeneralInfoForm } from "./FormSidebar";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();

  return (
    <article>
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
              <h1 className="h2">Sidebar</h1>
              <Button
                onClick={() => history.push("/components/creating-sidebar")}
                variant="secondary"
                className="text-dark me-2"
              >
                <FontAwesomeIcon icon={faPlus} className="me-2" />
                <span>New</span>
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <GeneralInfoForm />
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default Sidebar;
