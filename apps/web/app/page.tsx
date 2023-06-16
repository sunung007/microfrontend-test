import { lazy } from "react";
import { Button, Header } from "ui";

const DataComponent = lazy(() => import("docs/DataComponent"));

export default function Page() {
  return (
    <>
      <Header text="Web : Remote" />
      <Button />

      <DataComponent />
    </>
  );
}
