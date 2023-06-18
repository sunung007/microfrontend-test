import { Header } from "ui";
import { getData } from "../api/getData";
import { use, useEffect, useState } from "react";

function DataComponent() {
   // const data = use(getData()); // -> 사용 불가

   // const [data, setData] = useState({
   //   id: 0,
   //   title: "",
   //   body: "",
   //   userId: 0,
   // });

   // useEffect(() => {
   //   getData().then((res) => {
   //     setData(res);
   //   });
   // }, []);

   // const data = (await getData()) as {
   //   id: number;
   //   title: string;
   //   body: string;
   //   userId: number;
   // };

   return (
     <div style={{ background: "yellow" }}>
       <Header text="This is Docs" />
       {/* <Header text={data.title} />
      <div>id: {data.id}</div>
      <div>title: {data.title}</div>
      <div>body: {data.body}</div>
      <div>userId: {data.userId}</div> */}
     </div>
   );
 }

export default DataComponent;
// export default DataComponent as React.FunctionComponent;