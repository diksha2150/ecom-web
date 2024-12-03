import React from "react";
import Layout from "../../components/Layout";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Input from "../../components/UI/Input";
const SignIn = () => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                Label="First Name"
                placeholder="First name"
                value=""
                type="text"
                onChange={() => {}}
              />
              <Input
                Label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => {}}
              />
              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: "8px" }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SignIn;
