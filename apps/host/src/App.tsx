import React, { lazy } from "react";

const DataComponent = lazy(() => import("docs/DataComponent"));

function App() {
  return (
    <div>
      <h1>Host</h1>

      <DataComponent />
    </div>
  );
}

export default App;
