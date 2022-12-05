import { Navbar, Container, Nav } from "react-bootstrap";

import Link from "next/link";

import links from "./links";

import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";

export default function Navigation() {
  const { t } = useTranslation("navbar");
  const { pathname } = useRouter();
  const activeLink = (path) => {
    if (pathname === path) {
      return "nav-link-item-active";
    }
    return "";
  };
  return (
    <Navbar bg="dark" variant="dark" className="p-0 ">
      <Container>
        <Nav>
          {links.map((item) => (
            <Link key={item.id} href={item.path}>
              <a
                className={`text-capitalize nav-link nav-link-item ${activeLink(
                  item.path
                )}`}
              >
                {t(item.link)}
              </a>
            </Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}
