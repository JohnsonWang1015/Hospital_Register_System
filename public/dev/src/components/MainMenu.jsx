import logo from "../logo.svg";

import { Navbar, Nav, Container } from "solid-bootstrap";

export default function MainMenu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img alt="" src={logo} width="30" height="30" />
            <span class="mx-2">掛號系統</span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">候診大廳</Nav.Link>
            <Nav.Link href="/register">掛號</Nav.Link>
            <Nav.Link href="/doctor">叫號</Nav.Link>
            {/* <Nav.Link href="/features">特色</Nav.Link>
            <Nav.Link href="/aboutUs">關於我們</Nav.Link>
            <Nav.Link href="/showiot">物聯網展示</Nav.Link> */}
          </Nav>
          {/* <Nav>
            <Nav.Link href="/login">登入</Nav.Link>
            <Nav.Link href="/register">註冊</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
    </div>
  );
}
