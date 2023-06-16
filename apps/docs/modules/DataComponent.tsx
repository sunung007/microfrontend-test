import { Header } from "ui";
import { getData } from "../api/getData";

export default async function DataComponent() {
  const data = (await getData()) as {
    id: number;
    title: string;
    body: string;
    userId: number;
  };

  return (
    <div style={{ background: "yellow" }}>
      <Header text="This is Docs" />
      <Header text={data.title} />
      <div>id: {data.id}</div>
      <div>title: {data.title}</div>
      <div>body: {data.body}</div>
      <div>userId: {data.userId}</div>
    </div>
  );
}
