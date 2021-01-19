import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Formulir extends Component {
  render() {
    return (
      <div className="container w-25 p-3">
        <Card>
          <Card.Header as="h5"> Login </Card.Header>{" "}
          <Card.Body>
            <Form className="mt-1 w-100 p-3">
              <Form.Group controlId="formBasicEmail">
                <Form.Label> Username </Form.Label>{" "}
                <Form.Control type="username" name="username" />
                <Form.Text className="text-muted">
                  We 'll never share your username or email with anyone else.{" "}
                </Form.Text>{" "}
              </Form.Group>{" "}
              <Form.Group controlId="formBasicPassword">
                <Form.Label> Password </Form.Label>{" "}
                <Form.Control type="password" name="password" />
              </Form.Group>{" "}
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>{" "}
              <Link to="/MenuComponent/HomeComponent">
              <Button variant="primary" type="submit">
                Sign In
              </Button>
              </Link>
            </Form>{" "}
          </Card.Body>{" "}
        </Card>{" "}
      </div>
    );
  }
}
