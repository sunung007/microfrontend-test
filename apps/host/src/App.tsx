import React, { Suspense, lazy } from "react";
import { * as jsonx } from 'jsonx';

const DataComponent = lazy(() =>
  import("docs/DataComponent").then(async (res) => {
    console.log(res);
    console.log(res.default);
    const comp = await res.default();
    console.log(comp);
    // console.log({
    //   ...res,
    //   default: comp,
    // });

    jsonx.getReactElement

    return {
      // ...res,
      default: comp as unknown as React.ComponentType,
    };
  })
);

function App() {
  return (
    <div>
      <h1>Host</h1>

      <Suspense>
        <DataComponent />
      </Suspense>
    </div>
  );
}

export default App;
