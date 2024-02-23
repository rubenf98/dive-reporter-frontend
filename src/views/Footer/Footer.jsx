import { Link } from "react-router-dom";
import { Row, Col, Divider } from "antd";
import {
  IeOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import styles from "./Footer.module.css";

const logoPaths = [
  "logoMARE",
  "logoArditi",
  "logoWave",
  "logoTigerwhale",
  "logoEU",
  "logoFCT",
  "logoMac",
  "logoClimarest",
  "logoCleanAtlantic",
  "logoPlasmar",
];

function Footer() {
  return (
    <div className={styles.container}>
      <Divider style={{ borderTop: "1px solid grey" }} />

      <Row gutter={[16, 16]} justify={"space-between"} align={"middle"}>
        {logoPaths.map((element, index) => (
          <Col key={index} lg={2} md={2} sm={3} xs={4}>
            <Link className={styles.logo}>
              <img src={`src/assets/logos/${element}.png`} />
            </Link>
          </Col>
        ))}
      </Row>

      <div className={styles.description}>©2024 | MARE-Madeira</div>
      <div className={styles.description}>Contact: team@wave-labs.org</div>
      <Row className={styles.socialLogos} align={"middle"} gutter={16}>
        <Link to={"https://mare-madeira.pt/"} target="_blank">
          <IeOutlined />
        </Link>
        <Link
          to={"https://www.instagram.com/mare_madeira/?hl=en"}
          target="_blank"
        >
          <InstagramOutlined />
        </Link>
        <Link to={"https://www.youtube.com/@mare-madeira"} target="_blank">
          <YoutubeOutlined />
        </Link>
        <Link to={"https://www.facebook.com/MARE.Madeira"} target="_blank">
          <FacebookOutlined />
        </Link>
        <Link to={"https://twitter.com/MARE_Madeira"} target="_blank">
          <TwitterOutlined />
        </Link>
        <Link
          to={"https://www.linkedin.com/company/mare-madeira/"}
          target="_blank"
        >
          <LinkedinOutlined />
        </Link>
      </Row>
    </div>
  );
}

export default Footer;
