import { Row, Col } from "antd";
import Home from "./components/Home/Home";
import Application from "./components/Application/Application";
import Results from "./components/Results/Results";
import Participate from "./components/Participate/Participate";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      <Row className={styles.homeContainer}>
        <Col xs={24}>
          <Home />
        </Col>
      </Row>
      <Row className={styles.container} justify={"center"}>
        <Col xs={24}>
          <Application />
        </Col>
        <Col xs={24}>
          <Results />
        </Col>
        <Col xs={24}>
          <Participate />
        </Col>
      </Row>
    </>
  );
}

export default Homepage;