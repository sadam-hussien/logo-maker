import { Container, Stack } from "react-bootstrap";

import Brand from "../brand";

import Search from "./Search";

import LangSwitcher from "./LangSwitcher";

import ModeSwitcher from "./ModeSwitcher";

import LoginBtn from "../loginBtn";

export default function Header() {
  return (
    <header className="header d-flex align-items-center overflow-hiden">
      <Container className="d-flex justify-content-between align-items-center">
        <Brand />
        <Search />
        <div>
          <Stack direction="horizontal">
            <LangSwitcher />
            <ModeSwitcher />
            <LoginBtn />
          </Stack>
        </div>
      </Container>
    </header>
  );
}
