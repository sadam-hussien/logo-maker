import Link from "next/link";

import { useTranslation } from "next-i18next";

export default function LoginBtn() {
  const { t } = useTranslation("header");
  return (
    <Link href="/auth/login">
      <a className="login-btn text-capitalize">{t("login")}</a>
    </Link>
  );
}
