"use client";
import styles from "../../styles/default.module.css";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <div
      className={`${styles.divMaster} ${styles.header} ${styles.bgColor} container-fluir col-12`}
    >
      <Container className="d-flex">
        <Row className="text-center">
          <Col className="col-12 text-center" style={{ width: "9rem" }}>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
