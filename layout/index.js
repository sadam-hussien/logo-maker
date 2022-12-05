import Header from "./header";

import Navigation from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navigation />
      <main>{children}</main>
      {/* <footer>footer</footer> */}
    </>
  );
}
