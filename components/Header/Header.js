import React from "react";

import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { useUser } from 'components/User/User';

function Header({ balanceData }) {
  const user = useUser()

  return (
    <>
      <div className="bg-gradient-dark  pt-md-8">
        <div>
          <Row>
            <Col className="rounded-xl" lg="12" xl="6">
              <Card className="shadow-md rounded-xl mb-3 sm:mb-4 mb-xl-0 ">
                <CardBody>
                  <Row>
                    <div className="text-center h-20 flex flex-col justify-between">
                      <CardTitle
                        className="text-base sm:text-xl text-muted border-b-2 border-indigo-300 pb-2"
                      >
                        Account
                      </CardTitle>
                      <span className="text-base sm:text-xl">{user.user.walletAddress}</span>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="shadow-md mb-3 sm:mb-4 mb-xl-0 rounded-xl">
                <CardBody>
                  <Row>
                    <div className="col text-center h-20 flex flex-col justify-between">
                      <CardTitle
                        className="text-base sm:text-xl text-muted border-b-2 border-indigo-300 pb-2 "
                      >
                        Balance
                      </CardTitle>
                      <span className="text-base sm:text-xl">
                        {balanceData.toString().slice(0, 8)}
                      </span>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col className="rounded-xl" lg="6" xl="3">
              <Card className="shadow-md rounded-xl mb-3 sm:mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col text-center h-20 flex flex-col justify-between">
                      <CardTitle
                        tag="h5"
                        className="text-base sm:text-xl text-muted border-b-2 border-indigo-300 pb-2 "
                      >
                        Minimum Payout
                      </CardTitle>
                      <span className="text-base sm:text-xl">0.05</span>
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
