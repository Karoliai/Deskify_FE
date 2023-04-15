import { useRef, useState } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from "../../assets/logo.png";

function Login() {
  const [validated, setValidated] = useState<boolean | undefined>();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (
      usernameRef.current?.value === "qwerty123" &&
      passwordRef.current?.value === "admin1"
    ) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  };

  return (
    <div className="vw-100 vh-100 d-flex justify-content-center align-items-center dark-bg flex-column">
      <Image src={Logo} className="mb-5" />
      {validated === false && (
        <p className="text-danger">Bad Username or Password</p>
      )}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="mb-0 text-white">
            Username<strong className="text-danger"></strong>
          </Form.Label>
          <Form.Control
            ref={usernameRef}
            required
            type="username"
            placeholder="Enter your username"
          />
          <Form.Control.Feedback type="invalid">
            Please provide Username.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="mb-0 text-white">
            Password<strong className="text-danger"></strong>
          </Form.Label>
          <Form.Control
            ref={passwordRef}
            required
            type="password"
            placeholder="Enter your password"
          />
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
