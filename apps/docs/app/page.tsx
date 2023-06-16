// import { Button, Header } from "ui";
import DataComponent from "../modules/DataComponent";

export default function Page() {
  return (
    <>
      {/* <Header text="Docs : Remote" />
      <Button /> */}

      {/* @ts-expect-error Async Server Component */}
      <DataComponent />
    </>
  );
}
