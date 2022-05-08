import { Form, Button } from "solid-bootstrap";

export default function Login() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>帳號</Form.Label>
        <Form.Control type="email" placeholder="輸入帳號" />
        <Form.Text className="text-muted">
          基於隱私權，將不會洩漏任何資料
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>密碼</Form.Label>
        <Form.Control type="password" placeholder="輸入密碼" />
      </Form.Group>

      <Button variant="primary" type="submit">
        送出
      </Button>
    </Form>
  );
}
