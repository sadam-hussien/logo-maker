import { useTranslation } from "next-i18next";

import Image from "next/image";

import { Container, Row, Col, Button } from "react-bootstrap";

import Wave from "./Wave";

export default function Landing() {
  const { t } = useTranslation("home");
  return (
    <div className="home-page-landing">
      <Container>
        <Row className="justify-content-between align-items-center text-capitalize">
          <Col md={5}>
            <h2 className="home-page-landing-title font-weight-bold">
              {t("home_landing_title")}
            </h2>
            <h5 className="home-page-landing-desc lh-base">
              {t("home_landing_desc")}
            </h5>
            <Button
              variant="secondary"
              size="lg"
              className="text-capitalize my-btn d-flex align-items-center"
            >
              {t("get_started")}
              <span className="home-page-landing-getstarted-btn-icon">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
            </Button>
          </Col>
          <Col md={5}>
            <Image
              src="/images/hero.png"
              alt="hero"
              width={600}
              height={600}
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
      <Wave />
    </div>
  );
}
