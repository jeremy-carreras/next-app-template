import styles from "../../styles/default.module.css";

function Footer() {
  return (
    <footer className={`container-fluid ${styles.bgColor} ${styles.footer} py-3`}>
      <p className="my-0">
        Hecho en México. Todos los derechos reservados 2023.
      </p>
    </footer>
  );
}

export default Footer;
