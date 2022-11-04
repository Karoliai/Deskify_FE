import { useState } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import Logo from "../../assets/logo.png";

function Login() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      navigate("/dashboard");
    }

    setValidated(true);
  };

  return (
    <div className="vw-100 vh-100 d-flex justify-content-center align-items-center dark-bg flex-column">
      <Image src={Logo} className="mb-5" />

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="mb-0 text-white">
            Username<strong className="text-danger">*</strong>
          </Form.Label>
          <Form.Control required type="username" />
          <Form.Control.Feedback type="invalid">
            Please provide Username.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="mb-0 text-white">
            Password<strong className="text-danger">*</strong>
          </Form.Label>
          <Form.Control required type="password" />
          <Form.Control.Feedback type="invalid">
            Please provide Password.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Sign In
        </Button>
      </Form>
    </div>
  );
}

export default Login;
