import React from "react";

import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function Header({ balanceData }) {

  return (
    <>
      <div className="bg-gradient-dark py-3 pt-md-8">
        <div>
          <Row>
            <Col className="rounded-xl" lg="12" xl="6">
              <Card className="rounded-xl mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col text-center h-20 flex flex-col justify-between">
                      <CardTitle
                        tag="h5"
                        className="text-muted"
                      >
                        Account
                      </CardTitle>
                      <span className="text-lg">0x5a7ad5c896d77e3ba4af0de014f8b34fa248f45a</span>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="mb-4 mb-xl-0 rounded-xl">
                <CardBody>
                  <Row>
                    <div className="col text-center h-20 flex flex-col justify-between">
                      <CardTitle
                        tag="h5"
                        className="text-muted"
                      >
                        Balance
                      </CardTitle>
                      <span className="h3">
                        {balanceData.toString().slice(0, 8)}
                      </span>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col className="rounded-xl" lg="6" xl="3">
              <Card className="rounded-xl mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col text-center h-20 flex flex-col justify-between">
                      <CardTitle
                        tag="h5"
                        className="text-muted"
                      >
                        Minimum Payout
                      </CardTitle>
                      <span className="h3">0.05</span>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </div>
      </div>
    </>
  );
}

export default Header;
