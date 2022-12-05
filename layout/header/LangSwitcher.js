import { useRouter } from "next/router";

import Link from "next/link";

export default function LangSwitcher() {
  const { locale, pathname } = useRouter();
  return (
    <Link href={pathname} locale={locale === "en" ? "ar" : "en"}>
      <a className="header-lang-switcher text-decoration-none text-uppercase d-flex align-items-center justify-content-center">
        {locale === "en" ? "ar" : "en"}
      </a>
    </Link>
  );
}
