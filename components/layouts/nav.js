import Link from "next/link";
import { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Offcanvas } from "react-bootstrap";
import styles from "../../styles/nav.module.css";

const Nav = (props) => {
  const [userType, setUserType] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={`${styles.nav}`}>
      <div className={`${styles.centro} container-fluid mx-5`}>
        <FontAwesomeIcon
          className={`${styles.bars} fa-2x d-inline-flex`}
          onClick={handleShow}
          icon={faBars}
        />
        <p className={`${styles.title} col-5 h4`}>{props.title}</p>
        <div className={`col-5 offset-5 d-inline-flex justify-content-end`}>
          <p className={`${styles.subTitle}`}>
            Sistema Integral de Administración
            <br />
          </p>
        </div>
        <div className={styles.triangle}></div>
      </div>

      <Offcanvas className={styles.sidebar} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <FontAwesomeIcon
            className={`fa-2x d-inline-flex`}
            onClick={handleShow}
            icon={faBars}
          />
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.contenedor}>
          <br />
          <Link className={`${styles.link} my-5`} href="/matricula">
            Matrícula
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Nav;
