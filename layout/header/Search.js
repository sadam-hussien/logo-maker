import { useTranslation } from "next-i18next";

import { Stack, Form } from "react-bootstrap";

export default function Search() {
  const { t } = useTranslation("header");
  return (
    <div>
      <Stack direction="horizontal" className="header-search">
        <Form.Label className="m-0 header-search-label">
          <span className="header-search-icon">
            <ion-icon name="search-outline"></ion-icon>
          </span>
        </Form.Label>
        <Form.Control
          type="search"
          placeholder={t("search")}
          className="header-search-input border-0 text-capitalize"
        />
      </Stack>
    </div>
  );
}
