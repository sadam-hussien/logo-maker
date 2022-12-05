import { useRouter } from "next/router";

import { useState } from "react";

import { Form, Stack } from "react-bootstrap";

export default function ModeSwitcher() {
  const { locale } = useRouter();
  const [checked, setChecked] = useState(false);
  console.log(locale);
  return (
    <Stack
      direction="horizontal"
      className={`mode-switcher ${locale === "ar" ? "flex-row-reverse" : ""}`}
    >
      <Form.Label
        className={`m-0 mode-switch-label ${
          !checked ? "mode-switch-label-active" : ""
        }`}
      >
        <ion-icon name="partly-sunny-outline"></ion-icon>
      </Form.Label>
      <Form.Check
        type="switch"
        id="mode-switch"
        className="mode-switch"
        onChange={(e) => setChecked(e.target.checked)}
      />
      <Form.Label
        className={`m-0 mode-switch-label ${
          checked ? "mode-switch-label-active" : ""
        }`}
      >
        <ion-icon name="moon-outline"></ion-icon>
      </Form.Label>
    </Stack>
  );
}
