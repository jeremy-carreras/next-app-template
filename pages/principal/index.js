import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Layout from "/components/layouts/layout";
import PrincipalComponent from "@/components/principal";

const Index = () => {
  return (
    <Layout titleNav={"Principal"} userType={1}>
      <PrincipalComponent/>
    </Layout>
  );
};

export default Index;
