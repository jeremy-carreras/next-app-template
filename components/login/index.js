import { Col, Row, FormControl, Container, Button } from "react-bootstrap";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import { adviceLoading, adviceLoadingClose } from "@/functions/advices";
import { useState } from "react";

const Login = () => {
  const [datos, setDatos] = useState({
    user: "",
    password: "",
  });

  const router = useRouter();

  const handleNextPage = () => {
    router.push("/principal");
  };

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const submit = async () => {
    adviceLoading();
    try {
      handleNextPage();
    } catch (error) {
      console.log(error);
    }
    adviceLoadingClose();
  };

  /*const enviarDatos = async () => {
    console.log(datos);
    avisoLoading();
    try {
      const response = await axios.post(`${urlApi}/Trabajador/login`, {
        usuario: datos.usuario,
        password: datos.password,
      });
      localStorage.setItem("nombre", response.data.Usuario.nombre);
      localStorage.setItem(
        "idTipoUsuario",
        response.data.Usuario.idTipoUsuario
      );
      localStorage.setItem("idTrabajador", response.data.Usuario.idTrabajador);
      await Swal.fire({
        icon: "success",
        title: "Bienvenido",
        showConfirmButton: false,
        timer: 600,
      });
      handleNextPage();
    } catch (err) {
      await avisoError("El usuario o la contraseña es incorrecta");
      console.log(err);
    }
    cerrarLoading();
  };*/

  return (
    <Container
      style={{ backgroundColor: "#fff" }}
      className={`${styles.shadow} rounded col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4`}
    >
      <div style={{ margin: "35% 0 40% 0" }}>
        <p className="h3 py-3 text-center">Inicio de sesión</p>
        <Row className="pb-2 px-2">
          <Col className="col-12 mb-2">
            <FormControl
              name="user"
              placeholder="User"
              onChange={handleInputChange}
            />
          </Col>
          <Col className="col-12 mb-1">
            <FormControl
              type="password"
              name="password"
              placeholder="Constraseña"
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        <Row className="pb-3 text-center px-2">
          <Col>
            <Button
              className={`w-100 btn btn-danger ${styles.btn}`}
              onClick={submit}
            >
              Aceptar
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
