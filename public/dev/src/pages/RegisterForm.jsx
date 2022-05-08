import { Form, Button } from "solid-bootstrap";

export default function RegisterForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>姓名</Form.Label>
        <Form.Control type="text" placeholder="輸入姓名" className="mx-auto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>電子郵件</Form.Label>
        <Form.Control type="email" placeholder="輸入電子郵件" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>密碼</Form.Label>
        <Form.Control type="password" placeholder="輸入密碼" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>電話</Form.Label>
        <Form.Control type="tel" placeholder="輸入電話" />
      </Form.Group>

      <Button variant="primary" type="submit">
        註冊
      </Button>
    </Form>
  );
}
