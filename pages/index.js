import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../layout";

import HomeContent from "../modules/home";

export default function Home() {
  return (
    <section className="home-page">
      <HomeContent />
    </section>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "navbar",
        "home",
      ])),
      // Will be passed to the page component as props
    },
  };
}
